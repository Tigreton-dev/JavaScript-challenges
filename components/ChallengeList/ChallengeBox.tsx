import * as React from 'react';
import Link from "next/link"
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Stack from '@mui/material/Stack';

import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

export default function BoxSx(props) {
    const { isChallengeSubmitted, title, tags, refName, refNumber, dificulty } = props;
    const { data } = React.useContext(DataContext) as DataContextType;
    const currentTheme = data.currentTheme;
    const icon = isChallengeSubmitted ?
        <CheckCircleIcon fontSize="large" color="success" />
        :
        <CancelIcon fontSize="large" color="error" />

    const ChipColor = (tagName: string) => {
        let color = "primary";
        if (tagName === "Easy") color = "success";
        if (tagName === "Medium") color = "warning";
        if (tagName === "Hard") color = "error";
        return color;
    }

    const boxColor = () => {
        if (dificulty === "Easy") return "green"
        if (dificulty === "Medium") return "orange"
        if (dificulty === "Hard") return "red"
    }

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "auto",
                padding: "15px",
                borderRadius: "5px",
                backgroundColor: "#f8fcff",
                boxShadow: currentTheme.borderShadow,
                marginBottom: "15px",
                boxSizing: "border-box",
                borderRight: `20px solid ${boxColor()}`,
            }}
        >
            <Box style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                position: "relative"
            }}>
                {icon}
                <Typography variant="h1" component="h1" style={{ marginLeft: "10px", width: "250px", fontSize: "18px", fontWeight: "bold" }}>
                    <Link href={`/challenges/${refName}`}>
                        <a style={{ textDecoration: "none", color: "#6d6e6d" }}>{refNumber}. {title}</a>
                    </Link>
                </Typography>
                <Stack direction="row" spacing={1} style={{ position: "absolute", right: "0" }}>
                    {tags.map((tagName: string) => {
                        return <Chip
                            key={tagName}
                            label={tagName}
                            variant="outlined"
                            color={ChipColor(tagName)}
                        />
                    })}
                </Stack>
            </Box>
        </Box>
    );
}