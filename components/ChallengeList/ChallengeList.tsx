import * as React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

import ChallengeBox from "../../components/ChallengeList/ChallengeBox"
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';
import myData from '../../data/challenges.json';

export default function ChallengeList() {
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const currentTheme = data.currentTheme;
    const problemList = data.problemsList;
    const [category, setCategory] = React.useState("String")
    const categoryBoxref = React.useRef(null)
    const list = ["String", "Array", "Linked List", "Stack & Queue", "Graphs", "Binary Tree", "Dynamic Programming", "Recursion"]

    React.useEffect(() => {
        const problemList = Object.keys(myData).map((key) => myData[key]);
        updateData({ problemsList: problemList });
    }, [])

    if (!problemList) return "Loading...";

    const clickHandler = (e) => {
        const buttons = Array.from(categoryBoxref.current.getElementsByTagName("button"));
        console.log("AAA", buttons)
        buttons.map(element => element.style.background = "none")
        setCategory(e.target.textContent)
        e.target.style.background = "red"
        console.log(e.target)
    }

    return (
        <Box sx={{ width: "95%", maxWidth: "800px", margin: "auto", marginTop: "40px" }}>
            <Typography variant="h3" sx={{margin:"150px 0 20px 0"}}><FormatListNumberedIcon sx={{ fontSize: 40 }} />Challenge List</Typography>
            <Box ref={categoryBoxref}>
            {list.map(element => 
                <Button 
                key={element}
                sx={{margin:"5px 5px 20px 0", cursor:"pointer", fontSize:"12px", borderRadius:"20px", textTransform: "capitalize"}}
                    variant="outlined"
                    onClick={e => clickHandler(e)} 
                >{element}</Button>)
            }
            </Box>

            {problemList.filter(e => e.category === category).map((element: object, index: number) => {
                return (
                    <ChallengeBox
                        key={index}
                        isChallengeSubmitted={element.isChallengeSubmitted}
                        title={element.title}
                        tags={element.tags}
                        refName={element.refName}
                        refNumber={element.refNumber}
                        dificulty={element.dificulty}
                    />
                )
            })}
        </Box>
    )
}

