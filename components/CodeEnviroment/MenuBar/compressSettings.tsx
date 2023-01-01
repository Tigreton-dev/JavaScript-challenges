import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import SettingsIcon from '@mui/icons-material/Settings';

import LanguageMenu from './LanguageMenu';
import FontSize from './FontSize';
import Theme from './Theme';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { DataContext } from '../../../context/dataContext';
import { DataContextType } from '../../../context/@types.data';
import Challenges from '../../../data/challenges.json';

interface Iprops {
    zoomIn: Function;
    zoomOut: Function;
}

const CompressSettings = (props: Iprops) => {
    const { zoomIn, zoomOut } = props;
    const { updateData } = React.useContext(DataContext) as DataContextType;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const { data } = React.useContext(DataContext) as DataContextType;
    const [fontSize, setFontSize] = React.useState(100);
    const router = useRouter();
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

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (font: number) => {
        if (font !== 0) updateData({ fontSize: font });
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                size="large"
                style={{ boxShadow: data.currentTheme.borderShadow }}
            >
                <SettingsIcon />
            </Button>
            <Menu sx={{ mt: '5px', paper: 'red' }} anchorEl={anchorEl} open={open} onClose={() => handleClose(0)}>
                <div style={{ margin: '8px', display: 'flex', justifyContent: 'center' }}>
                    <Theme />
                </div>
                <div style={{ margin: '8px', display: 'flex', justifyContent: 'center' }}>
                    <LanguageMenu />
                </div>
                <div style={{ margin: '8px', display: 'flex', justifyContent: 'center' }}>
                    <FontSize />
                </div>

                <div style={{ width: '200px' }}>
                    <Tooltip TransitionComponent={Zoom} title="Previous Challenge" arrow>
                        <Button size="small" onClick={prevChallenge} sx={{ margin: '5px' }}>
                            <ArrowBackIcon />
                        </Button>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title="Next Challenge" arrow>
                        <Button size="small" onClick={nextChallenge} sx={{ margin: '5px' }}>
                            <ArrowForwardIcon />
                        </Button>
                    </Tooltip>
                </div>

                <Tooltip TransitionComponent={Zoom} title="Zoom Out" arrow>
                    <Button size="small" onClick={() => zoomOut()} sx={{ margin: '5px' }}>
                        <RemoveIcon />
                    </Button>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="Zoom In" arrow>
                    <Button size="small" onClick={() => zoomIn()} sx={{ margin: '5px' }}>
                        <AddIcon />
                    </Button>
                </Tooltip>
            </Menu>
        </div>
    );
};

export default CompressSettings;
