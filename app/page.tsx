"use client"
import React from "react";
import NavBar from "../app/NavBar"
import Split from 'react-split'
import ProblemDescription from "./problemDescription";
import RightSide from "./rightSide";

export default function Home() {

	return (
		<main className="">
			<NavBar />
			<Split
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
