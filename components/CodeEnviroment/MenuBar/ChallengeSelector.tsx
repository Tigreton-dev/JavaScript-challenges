import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Chip from '@mui/material/Chip';
import Challenges from '../../../data/challenges.json';
import { useRouter } from 'next/router';

import { DataContext } from '../../../context/dataContext';
import { DataContextType } from '../../../context/@types.data';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const ChallengeSelector = () => {
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const router = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (font: number) => {
        if (font !== 0) updateData({ fontSize: font });
        setAnchorEl(null);
    };

    React.useEffect(() => {
        // @ts-ignore
        const problemList: Array<IcurrentProblem> = Object.keys(Challenges).map((key: string) => Challenges[key]);
        updateData({ problemsList: problemList });
    }, []);

    React.useEffect(() => {
        if (data.currentChallengeList.length === 0) {
            const challenges = data.problemsList
                .filter((e: any) => e.category === 'String')
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
        }
    }, [data.problemsList]);

    const ChipColor = (tagName: string) => {
        let color = '#1976d2';
        if (tagName === 'Easy') color = 'green';
        if (tagName === 'Medium') color = 'orange';
        if (tagName === 'Hard') color = 'red';
        return color;
    };

    const nextChallenge = async (refNumber: number) => {
        const newProblemName = Object.values(Challenges)[refNumber].refName;
        router.push(`./${newProblemName}`);
    };

    return (
        <div>
            <Button
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                size="large"
                endIcon={<ArrowDropDownIcon />}
                style={{
                    boxShadow: data.currentTheme.borderShadow,
                    textTransform: 'capitalize',
                    fontSize: '1rem',
                    fontWeight: '500'
                }}
            >
                <FormatListBulletedIcon /> &nbsp;
                <b>Challenge {data.currentProblem.refNumber}:</b> &nbsp;
                <span
                    style={{
                        display: 'block',
                        maxWidth: '180px',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        textAlign: 'left'
                    }}
                >
                    {data.currentProblem.title}
                </span>
            </Button>
            <Menu
                sx={{ mt: '5px', height: '400px', minWidth: '900px' }}
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose(0)}
            >
                {data.currentChallengeList.map((challenge, i) => {
                    return (
                        <MenuItem
                            onClick={() => nextChallenge(challenge.refNumber)}
                            key={i}
                            sx={{
                                width: '400px',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis'
                            }}
                        >
                            <span
                                style={{
                                    display: 'block',
                                    width: '350px',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    textAlign: 'left'
                                }}
                            >
                                <b>{challenge.refNumber}.</b>&nbsp;{challenge.title}
                            </span>
                            <Chip
                                key={i}
                                label={challenge.difficulty}
                                variant="outlined"
                                sx={{
                                    color: ChipColor(challenge.difficulty),
                                    border: `1px solid ${ChipColor(challenge.difficulty)}`
                                }}
                            />
                        </MenuItem>
                    );
                })}
            </Menu>
        </div>
    );
};

export default ChallengeSelector;
