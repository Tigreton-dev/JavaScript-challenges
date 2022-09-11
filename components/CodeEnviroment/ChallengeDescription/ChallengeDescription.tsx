import * as React from 'react'
import parse from 'html-react-parser';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import ExampleCode from "./ExampleCode";
import Hints from "./Hints";
import Title from "./Title";
import { DataContext } from '../../../context/dataContext';
import { DataContextType } from '../../../context/@types.data';

const ChallengeDescription = () => {
    const { data } = React.useContext(DataContext) as DataContextType;

    const currentProblem = data.currentProblem;

    const containerStyle = {
        padding: "20px",
        paddingTop: "0",
        height: "calc(100vh - 160px)",
        overflow: "scroll",
        textAlign: "left"
    }

    const ChipColor = (tagName: string) => {
        let color = "#1976d2";
        if (tagName === "Easy") color = "green";
        if (tagName === "Medium") color = "orange";
        if (tagName === "Hard") color = "red";
        return color;
    }

    return (
        <Box sx={containerStyle}>
            <Title title={currentProblem.title} refName={currentProblem.refName} />
            <Stack direction="row" spacing={1}>
                {currentProblem.tags.map((tagName: string) => {
                    return <Chip
                        key={tagName}
                        label={tagName}
                        variant="outlined"
                        sx={{fontWeight: "bold", color:ChipColor(tagName), border:`1px solid ${ChipColor(tagName)}`}}
                    />
                })}
            </Stack>
            <Box style={{ fontSize: "18.5px", fontFamily: "Roboto", fontWeight: "400" }}>{
                parse(currentProblem.description)}
            </Box>
            <ExampleCode />
            <Hints />
        </Box>
    );
};

export default ChallengeDescription;
