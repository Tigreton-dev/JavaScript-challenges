"use client"
import React, { useEffect, useRef } from "react";
import NavBar from "../app/NavBar"
import Split from 'react-split'
import ProblemDescription from "./problemDescription";
import RightSide from "./rightSide";
import { DataContext } from './context/dataContext';
import Firework from "./firework";

export default function Home() {
	const { data, updateData } = React.useContext(DataContext);
	const sliptRef = useRef(null)
	const mainRef = useRef(null)

	useEffect(() => {
		data.isFullScreen ? sliptRef.current.parent.classList.add("splitFullScreen") : sliptRef.current.parent.classList.remove("splitFullScreen")
	}, [data.isFullScreen])

	useEffect(() => {
		const htmlElement = document.getElementById("htmlElement")
		htmlElement.style.fontSize = `${data.appSize}px`
		// htmlElement.style.setProperty("--nav-bar-height", String(allSdkRatio));
	}, [data.appSize])

	return (
		<main className="h-[100vh] flex flex-col overflow-hidden" ref={mainRef}>
			<NavBar />
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
				<RightSide />
			</Split>
			<Firework />
		</main>
	);
}
