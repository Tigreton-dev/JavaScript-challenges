import * as React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ChallengeBox from "../../components/ChallengeList/ChallengeBox"
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';
import myData from '../../data/challenges.json';

export default function ChallengeList() {
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const currentTheme = data.currentTheme;
    const problemList = data.problemsList;

    React.useEffect(() => {
        const problemList = Object.keys(myData).map((key) => myData[key]);
        updateData({ problemsList: problemList });
    }, [])

    if (!problemList) return "Loading...";

    return (
        <Box sx={{ width: "95%", maxWidth: "700px", margin: "auto", marginTop: "40px" }}>
            <Typography 
                variant="h4"
                sx={{ color: currentTheme.color, textAlign: "center", marginBottom: "40px" }}
            >
                    Challenge List
            </Typography>
                    {problemList.map((element: object, index: number) => {
                        return (
                            <ChallengeBox
                                key={index}
                                isChallengeSubmitted={element.isChallengeSubmitted}
                                title={element.title}
                                tags={element.tags}
                                refName={element.refName}
                                refNumber={element.refNumber}
                            />
                        )
                    })}
        </Box>
    )
}

