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
    const { isChallengeSubmitted, title, tags, refName, index } = props;
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

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "auto",
                padding: "15px",
                borderRadius: "5px",
                backgroundColor: currentTheme.secondary,
                boxShadow: currentTheme.borderShadow,
                marginBottom: "15px",
                boxSizing:"border-box",
                borderRight: "20px solid green",
            }}
        >
            <Box style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                position:"relative"
            }}>
                {icon}
                <Typography variant="h7" component="h7" style={{ marginLeft: "10px", width: "250px", fontSize: "18px", fontWeight:"bold" }}>
                    <Link href={`/challenges/${refName}`}>
                        <a style={{ textDecoration: "none", color: currentTheme.color }}>{title}</a>
                    </Link>
                </Typography>
                <Stack direction="row" spacing={1} style={{position:"absolute", right:"0"}}>
                    {tags.map((tagName: string) => {
                        return <Chip
                            key={tagName}
                            label={tagName}
                            variant="outlined"
                            sx={{ ontWeight: "bold" }}
                            color={ChipColor(tagName)}
                        />
                    })}
                </Stack>
            </Box>
        </Box>
    );
}