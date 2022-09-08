import * as React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import ChallengeBox from "../../components/ChallengeList/ChallengeBox"
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';
import myData from '../../data/challenges.json';

export default function ChallengeList() {
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const currentTheme = data.currentTheme;
    const problemList = data.problemsList;
    const list = ["string", "array", "LinkedList", "Stack&Queue", "Graph", "Binary Tree", "Dinamic Programming", "Recursion"]

    React.useEffect(() => {
        const problemList = Object.keys(myData).map((key) => myData[key]);
        updateData({ problemsList: problemList });
    }, [])

    if (!problemList) return "Loading...";

    return (
        <Box sx={{ width: "95%", maxWidth: "800px", margin: "auto", marginTop: "40px" }}>
            <Typography variant="h3" sx={{margin:"150px 0 20px 0"}}>Challenge List</Typography>
            {list.map(element => <Chip key={element} label={element} variant="outlined" sx={{margin:"5px 5px 20px 0", cursor:"pointer", fontSize:"14px"}} />)}
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

