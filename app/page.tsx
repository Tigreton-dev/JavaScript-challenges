"use client"
import React, { useEffect, useRef } from "react";
import NavBar from "../app/NavBar"
import Split from 'react-split'
import ProblemDescription from "./problemDescription";
import RightSide from "./rightSide";
import { DataContext } from './context/dataContext';

export default function Home() {
	const { data, updateData } = React.useContext(DataContext);
	const sliptRef = useRef(null)

	useEffect(() => {
		data.isFullScreen ? sliptRef.current.parent.classList.add("splitFullScreen") : sliptRef.current.parent.classList.remove("splitFullScreen")
	}, [data.isFullScreen])

	return (
		<main className="">
			<NavBar />
			<Split
				ref={sliptRef}
				className="split"
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
		</main>
	);
}
