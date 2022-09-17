import * as React from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Stack from '@mui/material/Stack';

import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

interface Iprops {
    title: string;
    tags: Array<string>;
    refName: string;
    refNumber: Number;
    difficulty: string;
}

export default function BoxSx(props: Iprops) {
    const { title, tags, refName, refNumber, difficulty } = props;
    const { data } = React.useContext(DataContext) as DataContextType;
    const currentTheme = data.currentTheme;
    const isProblemSubmitted = localStorage.getItem(refName);
    const icon = isProblemSubmitted ? (
        <CheckCircleIcon fontSize="large" color="success" />
    ) : (
        <CancelIcon fontSize="large" color="error" />
    );

    const ChipColor = (tagName: string) => {
        let color = '#1976d2';
        if (tagName === 'Easy') color = 'green';
        if (tagName === 'Medium') color = 'orange';
        if (tagName === 'Hard') color = 'red';
        return color;
    };

    const boxColor = () => {
        if (difficulty === 'Easy') return 'green';
        if (difficulty === 'Medium') return 'orange';
        if (difficulty === 'Hard') return 'red';
    };

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: 'auto',
                padding: '1rem',
                borderRadius: '5px',
                backgroundColor: '#f8fcff',
                boxShadow: currentTheme.borderShadow,
                marginBottom: '1rem',
                boxSizing: 'border-box',
                borderRight: `1.25rem solid ${boxColor()}`
            }}
        >
            <Box style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', position: 'relative' }}>
                {icon}
                <Typography
                    variant="h1"
                    component="h1"
                    style={{ marginLeft: '0.625rem', width: '250px', fontSize: '18px', fontWeight: 'bold' }}
                >
                    <Link href={`/challenges/${refName}`}>
                        <a style={{ textDecoration: 'none', color: '#6d6e6d' }}>{`${refNumber}. ${title}`}</a>
                    </Link>
                </Typography>
                <Stack direction="row" spacing={1} style={{ position: 'absolute', right: '0' }}>
                    {tags.map((tagName: string) => {
                        return (
                            <Chip
                                key={tagName}
                                label={tagName}
                                variant="outlined"
                                sx={{ color: ChipColor(tagName), border: `1px solid ${ChipColor(tagName)}` }}
                            />
                        );
                    })}
                </Stack>
            </Box>
        </Box>
    );
}
