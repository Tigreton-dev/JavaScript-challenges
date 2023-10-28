import * as React from 'react';
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

const Video = () => {
    const { data } = React.useContext(DataContext) as DataContextType;
    const currentProblem = data.currentProblem;
    const title = currentProblem.title;
    const isAlgoPlatform = currentProblem.platform === 'algoExpert';
    const videoName = isAlgoPlatform
        ? 'videos2/' + title + '_720p.mp4'
        : ('videos1/' + title.replaceAll(' ', '_') + '_approach.m4v.mp4').toLowerCase();
    const videoNameWalkthrough = (title.replaceAll(' ', '_') + '_walkthrough_js.m4v.mp4').toLowerCase();

    return (
        <div
            style={{ margin: '10px', textAlign: 'initial', height: 'calc(100vh - 6.5rem - 45px)', overflow: 'scroll' }}
        >
            <h1>video {title}</h1>
            <h2>Aproach</h2>
            <video controls src={`/videos/${videoName}`} width="100%"></video>
            <h2>Walk Through</h2>
            {!isAlgoPlatform && <video controls src={`/videos/videos1/${videoNameWalkthrough}`} width="100%"></video>}
        </div>
    );
};

export default Video;
