import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { useRouter } from 'next/router';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Stack from '@mui/material/Stack';
import Zoom from '@mui/material/Zoom';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Link from 'next/link';

import Challenges from '../../../data/challenges.json';
import LanguageMenu from './LanguageMenu';
import FontSize from './FontSize';
import Theme from './Theme';
import { DataContext } from '../../../context/dataContext';
import { DataContextType } from '../../../context/@types.data';

const MenuBar = () => {
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const [fontSize, setFontSize] = React.useState(100);
    const router = useRouter();
    const currentTheme = data.currentTheme;
    const currentProblem = data.currentProblem;

    const prevChallenge = async () => {
        let currentProblemNumber = currentProblem.refNumber - 1;
        if (currentProblemNumber === 1) currentProblemNumber = 2;
        const newProblemName = Object.values(Challenges)[currentProblemNumber].refName;
        router.push(`./${newProblemName}`);
    };

    const nextChallenge = async () => {
        const currentProblemNumber = currentProblem.refNumber + 1;
        const newProblemName = Object.values(Challenges)[currentProblemNumber].refName;
        router.push(`./${newProblemName}`);
    };

    const zoomOut = () => {
        const size = fontSize - 10;
        document.documentElement.style.setProperty('--main-fontSize', size + '%');
        setFontSize(fontSize => fontSize - 10);
    };

    const zoomIn = () => {
        const size = fontSize + 10;
        document.documentElement.style.setProperty('--main-fontSize', size + '%');
        setFontSize(fontSize => fontSize + 10);
    };

    return (
        <AppBar position="static" style={{ flexBasis: '3.5rem', minHeight: '3.5rem' }}>
            <Toolbar style={{ flexBasis: '3.5rem', minHeight: '3.5rem' }}>
                <Stack spacing={2} direction="row">
                    <Tooltip TransitionComponent={Zoom} title="Select Challenge" arrow>
                        <Button size="large" startIcon={<FormatListBulletedIcon />}>
                            <Link href="/">
                                <a
                                    style={{
                                        color: currentTheme.color,
                                        textDecoration: 'none'
                                    }}
                                >
                                    Challenge List
                                </a>
                            </Link>
                        </Button>
                    </Tooltip>
                </Stack>

                <Stack
                    spacing={2}
                    direction="row"
                    sx={{
                        position: 'absolute',
                        right: '20px'
                    }}
                >
                    <Tooltip TransitionComponent={Zoom} title="Previous Challenge" arrow>
                        <Button size="small" onClick={prevChallenge}>
                            <ArrowBackIcon />
                        </Button>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title="Next Challenge" arrow>
                        <Button size="small" onClick={nextChallenge}>
                            <ArrowForwardIcon />
                        </Button>
                    </Tooltip>

                    <Tooltip TransitionComponent={Zoom} title="Zoom Out" arrow>
                        <Button size="small" onClick={zoomOut}>
                            <RemoveIcon />
                        </Button>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title="Zoom In" arrow>
                        <Button size="small" onClick={zoomIn}>
                            <AddIcon />
                        </Button>
                    </Tooltip>

                    <Theme />
                    <LanguageMenu />
                    <FontSize />
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default MenuBar;
