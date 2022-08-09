import * as React from 'react'
import { useRouter } from "next/router";
import dynamic from 'next/dynamic'
import useSWR from "swr";

import myData from '../../data/challenges.json';

import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

const DynamicComponentWithNoSSR = dynamic(
    () => import('../../components/CodeEnviroment/CodeEnviroment'),
    { ssr: false }
)

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PostPage() {
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const router = useRouter();
    const { asPath } = useRouter()
    const pathID = router.query.id

    React.useEffect(() => {
        updateData({ currentProblem: myData[pathID] })
    }, [pathID])

    // If session exists, display content
    return (
        <>
            <DynamicComponentWithNoSSR pathID={pathID} />
        </>
    )
}