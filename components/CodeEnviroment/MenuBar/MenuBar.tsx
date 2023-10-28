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
import ChallengeSelector from './ChallengeSelector';
import CompressSettings from './compressSettings';

import Challenges from '../../../data/challenges.json';
import LanguageMenu from './LanguageMenu';
import FontSize from './FontSize';
import Theme from './Theme';
import { DataContext } from '../../../context/dataContext';
import { DataContextType } from '../../../context/@types.data';

const MenuBar = () => {
    const { data } = React.useContext(DataContext) as DataContextType;
    const [fontSize, setFontSize] = React.useState(100);
    const router = useRouter();
    const currentTheme = data.currentTheme;
    const currentProblem = data.currentProblem;
    const widthRef = React.useRef(1270);
    const [displayCompressSettings, setDisplayCompressSettings] = React.useState(false);

    React.useEffect(() => {
        const resizeHandler = () => {
            const windowWidth = window.innerWidth;
            windowWidth < widthRef.current ? setDisplayCompressSettings(true) : setDisplayCompressSettings(false);
        };
        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    const calculateWidth = (isZoomIn: boolean) => {
        const windowWidth = window.innerWidth;
        if (isZoomIn) {
            const newVal = widthRef.current * 0.06 + widthRef.current;
            widthRef.current = newVal;
            windowWidth < newVal ? setDisplayCompressSettings(true) : setDisplayCompressSettings(false);
        } else {
            const newVal = widthRef.current - widthRef.current * 0.06;
            widthRef.current = newVal;
            windowWidth < newVal ? setDisplayCompressSettings(true) : setDisplayCompressSettings(false);
        }
    };

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
        calculateWidth(false);
    };

    const zoomIn = () => {
        const size = fontSize + 10;
        document.documentElement.style.setProperty('--main-fontSize', size + '%');
        setFontSize(fontSize => fontSize + 10);
        calculateWidth(true);
    };

    return (
        <AppBar position="static" style={{ flexBasis: '3.5rem', minHeight: '3.5rem', marginTop: '0.25rem' }}>
            <Toolbar style={{ flexBasis: '3.5rem', minHeight: '3.5rem' }}>
                <Button size="large" startIcon={<FormatListBulletedIcon />}>
                    <Link href="/" style={{ color: currentTheme.color, textDecoration: 'none' }}>
                        Challenge List
                    </Link>
                </Button>
                {displayCompressSettings ? (
                    <Stack spacing={2} direction="row" sx={{ position: 'absolute', right: '20px' }}>
                        <ChallengeSelector />
                        <CompressSettings zoomIn={zoomIn} zoomOut={zoomOut} />
                    </Stack>
                ) : (
                    <Stack spacing={2} direction="row" sx={{ position: 'absolute', right: '20px' }}>
                        <ChallengeSelector />
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
                )}
            </Toolbar>
        </AppBar>
    );
};

export default MenuBar;
