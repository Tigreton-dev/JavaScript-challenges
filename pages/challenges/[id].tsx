import * as React from 'react'
import { useRouter } from "next/router";
import dynamic from 'next/dynamic'

import myData from '../../data/challenges.json';
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

const DynamicComponentWithNoSSR = dynamic(
    () => import('../../components/CodeEnviroment/CodeEnviroment'),
    { ssr: false }
);

export default function PostPage() {
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const currentProblem = data.currentProblem;
    const router = useRouter();
    const pathID = router.query.id;

    React.useEffect(() => {
        const updateCurrentProblem = myData[pathID];
        if (updateCurrentProblem !== undefined)
            updateData({ currentProblem: myData[pathID] });
    }, [pathID]);

    if (Object.keys(currentProblem).length === 0) return <h1>Problem Not Found</h1>

    return (
        <>
            <DynamicComponentWithNoSSR pathID={pathID} />
        </>
    )
}