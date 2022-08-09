import * as React from 'react'
import useSWR from "swr";

import ChallengeBox from "../../components/ChallengeList/ChallengeBox"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';
import myData from '../../data/challenges.json';

export default function ChallengeList() {

    const [data2, setData2] = React.useState(null);
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const currentTheme = data.currentTheme;

    React.useEffect(() => {
        console.log("ENTRA")
        setData2(Object.keys(myData).map((key) => myData[key]))
        if (data2) updateData({ problemsList: data2 })
    }, [])

    if (!data2) return "Loading...";

    return (
        <Box sx={{ width: "95%", maxWidth: "700px", margin: "auto", marginTop: "40px" }}>
            <Typography variant="h4" component="h4" sx={{ color: currentTheme.color, textAlign: "center", marginBottom: "40px" }}>Challenge List</Typography>
            <Accordion defaultExpanded={true} style={{ color: currentTheme.color, backgroundColor: currentTheme.primary, marginBottom: "20px", borderRadius: "8px" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: currentTheme.color }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h5">String</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    {data2.map((element: object, index: number) => {
                        return (
                            <ChallengeBox
                                key={index}
                                isChallengeSubmitted={element.isChallengeSubmitted}
                                title={element.title}
                                tags={element.tags}
                                refName={element.refName}
                            />
                        )
                    })}
                </AccordionDetails>
            </Accordion>


            <Accordion defaultExpanded={true} style={{ color: currentTheme.color, backgroundColor: currentTheme.primary, marginBottom: "20px", borderRadius: "8px" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h5">String</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    {data2.map((element: object, index: number) => {
                        return (
                            <ChallengeBox
                                key={index}
                                isChallengeSubmitted={element.isChallengeSubmitted}
                                title={element.title}
                                tags={element.tags}
                                refName={element.refName}
                            />
                        )
                    })}
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

