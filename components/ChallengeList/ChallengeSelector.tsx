import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';
import FormControlLabel from '@mui/material/FormControlLabel';
import { StatusCodes } from "../../helpers/dataStructures"
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import FormGroup from '@mui/material/FormGroup';
import DoneIcon from '@mui/icons-material/Done';
import SellIcon from '@mui/icons-material/Sell';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AddIcon from '@mui/icons-material/Add';

export default function ChallengeSelector() {

    const { data } = React.useContext(DataContext) as DataContextType;
    const currentTheme = data.currentTheme;

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: currentTheme.primary,
        boxShadow: '0px 0px 4px 0px rgba(0,0,0,0.2)',
        marginLeft: 0,
        width: '100%',
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    return (
        <Box style={{
            marginTop: "20px", backgroundColor: currentTheme.secondary,
            boxShadow: currentTheme.borderShadow,
            margin: "0px",
            width: "300px",
            padding: "10px",
            borderRadius: "5px",
            height: "auto",
            padding: "20px"
        }}>
            <Search>
                <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
                <StyledInputBase placeholder="Search…" />
            </Search>
            <p><EqualizerIcon />Filter By Dificulty:</p>
            <div>
                <Chip color="primary" label="Easy" deleteIcon={<DoneIcon />} onDelete={() => console.log("dfdf")} sx={{ ontWeight: "bold", margin: "3px" }} />
                <Chip color="primary" label="Medium" deleteIcon={<DoneIcon />} onDelete={() => console.log("dfdf")} sx={{ ontWeight: "bold", margin: "3px" }} />
                <Chip color="primary" label="Hard" deleteIcon={<DoneIcon />} onDelete={() => console.log("dfdf")} sx={{ ontWeight: "bold", margin: "3px" }} />
            </div>
            <p><ThumbUpAltIcon />Filter By Completed:</p>
            <div>
                <Chip color="primary" label="Completed" deleteIcon={<AddIcon />} onDelete={() => console.log("dfdf")} sx={{ ontWeight: "bold", margin: "3px" }} />
                <Chip color="primary" label="Un-completed" onDelete={() => console.log("dfdf")} sx={{ ontWeight: "bold", margin: "3px" }} />
            </div>
            <p><SellIcon />Filter by Tags:</p>

            {
                Object.keys(StatusCodes).map((element, index) => {
                    return <Chip key={index} variant="outlined" color="primary" label={element} deleteIcon={<AddIcon />} onDelete={() => console.log("dfdf")} sx={{ ontWeight: "bold", margin: "5px 3px" }} />
                })
            }
        </Box>
    );
}
