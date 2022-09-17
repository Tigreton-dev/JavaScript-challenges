import * as React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import challenges from '../../data/challenges.json';
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

const DynamicComponentWithNoSSR = dynamic(() => import('../../components/CodeEnviroment/CodeEnviroment'), {
    ssr: false
});

export default function PostPage() {
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const currentProblem = data.currentProblem;
    const lightTheme = data.lightTheme;
    const darkTheme = data.darkTheme;
    const router = useRouter();
    const challengeRefName = router.query.id;

    // Setting global theme
    React.useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === null) {
            localStorage.setItem('theme', JSON.stringify(lightTheme));
            updateData({ currentTheme: lightTheme });
        } else {
            if (JSON.parse(theme).isDarkTheme) updateData({ currentTheme: darkTheme });
            if (!JSON.parse(theme).isDarkTheme) updateData({ currentTheme: lightTheme });
        }
    }, []);

    // Store currentProblem to context
    React.useEffect(() => {
        type ObjectKey = keyof typeof challenges;
        const myVar = challengeRefName as ObjectKey;
        const updateCurrentProblem = challenges[myVar];
        if (updateCurrentProblem !== undefined) updateData({ currentProblem: updateCurrentProblem });
    }, [challengeRefName]);

    if (Object.keys(currentProblem).length === 0) return <h1>Problem Not Found</h1>;

    return (
        <>
            <DynamicComponentWithNoSSR />
        </>
    );
}
