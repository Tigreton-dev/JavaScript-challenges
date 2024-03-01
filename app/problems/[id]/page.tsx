'use client'
import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../components/navBar/navBar"
import Split from 'react-split'
import ProblemDescription from "../../components/problemDescription";
import DevelopmentEnvironment from "../../components/codeEditor/developmentEnvironment";
import { DataContext } from '../../context/dataContext';
import Firework from "../../components/firework";
import { usePathname } from 'next/navigation'
import {Spinner} from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function ProblemPage() {
    const { data, updateData } = React.useContext(DataContext);
    const sliptRef = useRef(null)
    const mainRef = useRef(null)
    const pathname = usePathname()
    const [isProblemSet, setProblem] = useState(false)
    const { data: session, status } = useSession();

    useEffect(() => {
        async function getData() {
            setProblem(() => false)
            const pathnameSplited = pathname.split("/");
            const problemNameId = pathnameSplited[pathnameSplited.length - 1];
            const response = await fetch(`../../api/`, {
                method: 'GET',
                headers: {
                    'problemNameId': `${problemNameId}`,
                    "user_id": status === "authenticated" ? session.user.id : "null",
                }
            });
            const problem = await response.json();
            updateData({ currentProblem: problem })
            setProblem(() => true)
        }

        if(status !== "loading") getData()
    }, [status]);

    useEffect(() => {
        if (sliptRef.current === null) return
        data.isFullScreen ? sliptRef.current.parent.classList.add("splitFullScreen") : sliptRef.current.parent.classList.remove("splitFullScreen")
    }, [data.isFullScreen])

    useEffect(() => {
        const htmlElement = document.getElementById("htmlElement") as HTMLElement
        htmlElement.style.fontSize = `${data.appSize}px`
    }, [data.appSize])

    return (
        <main className="h-[100vh] flex flex-col overflow-hidden" ref={mainRef}>
            <NavBar />
            {isProblemSet ? <>
                <Split
                    ref={sliptRef}
                    className="split grow overflow-hidden"
                    sizes={[45, 55]}
                    minSize={100}
                    expandToMin={false}
                    gutterSize={10}
                    gutterAlign="center"
                    snapOffset={30}
                    dragInterval={1}
                    direction="horizontal"
                    cursor="col-resize"
                >
                    <ProblemDescription />
                    <DevelopmentEnvironment />
                </Split>
                <Firework />
            </> :  <Spinner label="Loading" size="lg" classNames={{wrapper:"w-20 h-20", circle1:"border-4", circle2:"border-4"}} className="h-[100%]"/>}
        </main>
    );
}
