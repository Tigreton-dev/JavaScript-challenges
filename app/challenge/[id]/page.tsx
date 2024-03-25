'use client';

import React, { useState, useEffect } from 'react';
import NavBar from '../../components/navBar/navBar';
import ChallengeDescription from '../../components/challengeDescription';
import ChallengeSolution from '../../components/challengeSolution';
import SplitComponent from '../../components/splitComponent';
import { CircularProgress } from '@nextui-org/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Firework from '../../components/firework';
import { DataContext } from '../../context/dataContext';

export default function ProblemPage({ params }) {
    const { data, updateData } = React.useContext(DataContext);
    const { id } = params;
    const { data: session, status } = useSession();
    const [currentChallenge, setCurrentChallenge] = useState(null);

    useEffect(() => {
        async function getData() {
            const response = await fetch(`../../api/getChallenge/`, {
                method: 'GET',
                headers: {
                    challenge_id: id,
                    user_id: status === 'authenticated' ? session.user.id : 'null'
                }
            });
            const challenge = await response.json();
            setCurrentChallenge(challenge);
            updateData({ testCases: challenge.testCases, passesAllTests: null });
        }
        if (status !== 'loading') getData();
    }, [status]);

    if (currentChallenge === null) {
        return (
            <div className="w-[100vw] h-[100vh]">
                <CircularProgress
                    aria-label="Loading"
                    label="Loading"
                    size="lg"
                    className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]"
                    classNames={{
                        svg: 'w-[6rem] h-[6rem]'
                    }}
                />
            </div>
        );
    }

    return (
        <main className="h-[100vh] flex flex-col overflow-hidden">
            <NavBar challengeTitle={currentChallenge.title} />
            <SplitComponent>
                <ChallengeDescription currentChallenge={currentChallenge} />
                <ChallengeSolution
                    startedCode={currentChallenge.startedCode.javaScript}
                    refName={currentChallenge.refName}
                    testCases={currentChallenge.testCases}
                    solutionCode={currentChallenge.solutionCode}
                    submittedCode={currentChallenge.submittedCode}
                />
            </SplitComponent>
            <Firework />
        </main>
    );
}
