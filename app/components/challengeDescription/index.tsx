import React, { useState, useEffect } from 'react';
import TabComponent from './tabs';
import { MackOsTitleBar } from '../../helpers';
import VideoSolutions from './videosSolutions';
import TestCases from './testCases';
import SolutionCode from './solutionCode';
import Description from './description';

export default function ChallengeDescription({ currentChallenge }) {
    const [index, setIndex] = useState<number>(0);

    return (
        <div className="border border-default-300 dark:border-default-100 overflow-hidden rounded-lg">
            <MackOsTitleBar />
            <div className="overflow-scroll h-[calc(100%-2rem)] relative">
                <TabComponent onTabChange={(i: number) => setIndex(i)} />
                {index === 0 && <Description currentChallenge={currentChallenge} />}
                {index === 1 && <SolutionCode currentChallenge={currentChallenge} />}
                {index === 2 && <TestCases challengeId={currentChallenge.refName} />}
                {/* {index === 3 && <VideoSolutions />} */}
            </div>
        </div>
    );
}
