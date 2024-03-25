import React from "react";
import { DataContext } from '../../context/dataContext';

export default function VideosSolutions() {
	const { data } = React.useContext(DataContext);
	const currentProblem = data.currentProblem;
	const title = currentProblem.title;
	const isAlgoPlatform = currentProblem.platform === 'algoExpert';
	const videoName = isAlgoPlatform
		? 'videos2/' + title + '_720p.mp4'
		: ('videos1/' + title.replaceAll(' ', '_') + '_approach.m4v.mp4').toLowerCase();
	const videoNameWalkthrough = (title.replaceAll(' ', '_') + '_walkthrough_js.m4v.mp4').toLowerCase();

	return (
		<div className="p-4">
			<h1 className="text-2xl">video {title}</h1>
			<h2 className="text-xl my-4">Aproach</h2>
			<video controls src={`/videos/${videoName}`} width="100%"></video>
			<h2 className="text-xl my-4">Walk Through</h2>
			{!isAlgoPlatform && <video controls src={`/videos/videos1/${videoNameWalkthrough}`} width="100%"></video>}
		</div>
	);
}
