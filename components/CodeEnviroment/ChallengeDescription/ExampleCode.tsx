import * as React from 'react';
// import { javascript } from '@codemirror/lang-javascript';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Highlight from 'react-highlight';
import Head from 'next/head';

import { lightTheme, darkTheme } from '../../../helpers/CodeEditorTheme';
import { DataContext } from '../../../context/dataContext';
import { DataContextType } from '../../../context/@types.data';

const ExampleCode = () => {
    const { data } = React.useContext(DataContext) as DataContextType;
    const fontSize = data.fontSize;
    const examples = data.currentProblem.examples;
    const currentTheme = data.currentTheme;
    const spanStyles = {
        borderRadius: '5px',
        color: currentTheme.color,
        position: 'relative',
        top: '10px',
        fontSize: '1.1rem',
        background: currentTheme.primary,
        boxShadow: currentTheme.borderShadow
    };

    return (
        <div>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-dark.min.css"
                />
            </Head>
            {Object.entries(examples).map(([key, value], i) => {
                return (
                    <Box key={key} style={{ fontSize: '1rem' }}>
                        <Typography variant="h6">Example {i + 1}</Typography>
                        <Chip label="Input" sx={spanStyles} />
                        {/* @ts-ignore */}
                        <Highlight language="javascript">{value.input}</Highlight>
                        <Chip label="Output" sx={spanStyles} />
                        {/* @ts-ignore */}
                        <Highlight language="javascript">{value.output}</Highlight>
                    </Box>
                );
            })}
        </div>
    );
};

export default ExampleCode;
