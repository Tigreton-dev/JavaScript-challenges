import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import ChallengeBox from '../../components/ChallengeList/ChallengeBox';
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';
import Challenges from '../../data/challenges.json';
import { IcurrentProblem } from '../../context/@types.data';
import DescriptionDialog from '../CodeEnviroment/DescriptionDialog';

export default function ChallengeList() {
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const problemList = data.problemsList;
    const [category, setCategory] = React.useState('String');
    const categoryBoxRef = React.useRef<any>(null);
    const list = [
        'String',
        'Array',
        'Linked List',
        'Stacks & Queues',
        'Graphs',
        'Binary Tree',
        'Dynamic Programming',
        'Recursion',
        'javascript'
    ];

    React.useEffect(() => {
        const challenges = problemList
            .filter((e: any) => e.category === category)
            .sort((a: any, b: any) => {
                if (a.difficulty === 'Easy') a.difNum = 0;
                if (a.difficulty === 'Medium') a.difNum = 1;
                if (a.difficulty === 'Hard') a.difNum = 2;
                if (b.difficulty === 'Easy') b.difNum = 0;
                if (b.difficulty === 'Medium') b.difNum = 1;
                if (b.difficulty === 'Hard') b.difNum = 2;
                return a.difNum - b.difNum;
            });
        updateData({ currentChallengeList: challenges });
    }, [category]);

    React.useEffect(() => {
        // @ts-ignore
        const problemList: Array<IcurrentProblem> = Object.keys(Challenges).map((key: string) => Challenges[key]);
        updateData({ problemsList: problemList });
    }, []);

    React.useEffect(() => {
        const buttons: Array<any> = Array.from(categoryBoxRef.current.getElementsByTagName('button'));
        buttons[0].style.background = '#1976d2';
        buttons[0].style.color = 'white';
    }, []);

    if (!problemList) return <h1>'Loading...'</h1>;

    const clickHandler = (e: any) => {
        const buttons = Array.from(categoryBoxRef.current.getElementsByTagName('button'));
        buttons.map((element: any) => {
            element.style.background = 'none';
            element.style.color = '#1976d2';
        });
        setCategory(e.target.textContent);
        e.target.style.background = '#1976d2';
        e.target.style.color = 'white';
    };

    return (
        <Box sx={{ width: '95%', maxWidth: '830px', margin: 'auto', marginTop: '40px' }}>
            <DescriptionDialog />
            <Typography variant="h3" sx={{ margin: '150px 0 20px 0' }}>
                Challenge List
            </Typography>
            <Box ref={categoryBoxRef}>
                {list.map(element => (
                    <Button
                        key={element}
                        sx={{
                            margin: '5px 5px 20px 0',
                            cursor: 'pointer',
                            fontSize: '12px',
                            borderRadius: '20px',
                            textTransform: 'capitalize'
                        }}
                        variant="outlined"
                        onClick={e => clickHandler(e)}
                    >
                        {element}
                    </Button>
                ))}
            </Box>

            {problemList
                .filter((e: any) => e.category === category)
                .sort((a: any, b: any) => {
                    if (a.difficulty === 'Easy') a.difNum = 0;
                    if (a.difficulty === 'Medium') a.difNum = 1;
                    if (a.difficulty === 'Hard') a.difNum = 2;
                    if (b.difficulty === 'Easy') b.difNum = 0;
                    if (b.difficulty === 'Medium') b.difNum = 1;
                    if (b.difficulty === 'Hard') b.difNum = 2;
                    return a.difNum - b.difNum;
                })
                .map((element: any, index: number) => {
                    return (
                        <ChallengeBox
                            key={index}
                            title={element.title}
                            tags={element.tags}
                            refName={element.refName}
                            refNumber={element.refNumber}
                            difficulty={element.difficulty}
                        />
                    );
                })}
        </Box>
    );
}
