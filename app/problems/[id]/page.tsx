'use client'
import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../components/navBar/navBar"
import Split from 'react-split'
import ProblemDescription from "../../components/problemDescription";
import DevelopmentEnvironment from "../../components/codeEditor/developmentEnvironment";
import { DataContext } from '../../context/dataContext';
import Firework from "../../components/firework";
import { usePathname } from 'next/navigation'

export default function ProblemPage() {
    const { data, updateData } = React.useContext(DataContext);
    const sliptRef = useRef(null)
    const mainRef = useRef(null)
    const pathname = usePathname()
    const [isProblemSet, setProblem] = useState(false)

    useEffect(() => {
        async function getData() {
            setProblem(() => false)
            const pathnameSplited = pathname.split("/");
            const problemNameId = pathnameSplited[pathnameSplited.length - 1];
            const response = await fetch(`../../api/`, {
                method: 'GET',
                headers: {
                    'problemNameId': `${problemNameId}`,
                }
            });
            const problem = await response.json();
            updateData({ currentProblem: problem })
            setTimeout(() => {
                setProblem(() => true)
            }, 500);
        }

        getData()
    }, []);

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
            </> : <p>Loading problem...</p>}
        </main>
    );
}
