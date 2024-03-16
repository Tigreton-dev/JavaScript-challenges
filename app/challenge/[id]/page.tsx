'use client';

import React, { useState, useEffect } from 'react';
import NavBar from '../../components/navBar/navBar';
import ChallengeDescription from '../../components/challengeDescription';
import ChallengeSolution from '../../components/challengeSolution';
import SplitComponent from '../../components/splitComponent';
import { Spinner } from '@nextui-org/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Firework from "../../components/firework"

export default function ProblemPage({ params }) {
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
        }
        if(status !== "loading") getData()
    }, [status]);

    if (currentChallenge === null)
        return (
            <Spinner
                label="Loading"
                size="lg"
                classNames={{ wrapper: 'w-20 h-20', circle1: 'border-4', circle2: 'border-4' }}
                className="h-[100%] basolute left-[50%] top-[50%]"
            />
        );

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
