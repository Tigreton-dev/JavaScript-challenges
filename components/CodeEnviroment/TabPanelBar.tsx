import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import IconButton from '@mui/material/IconButton'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import RefreshIcon from '@mui/icons-material/Refresh'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import DeleteIcon from '@mui/icons-material/Delete';
import DataObjectIcon from '@mui/icons-material/DataObject';

import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

interface valuesInterface {
    isCodeEditor: boolean;
    firstTitle: string;
    secondTitle: string;
    thirdTitle: string;
    fourthTitle: string;
    value: number;
}

interface propsInterface {
    values: valuesInterface;
    setValue: any;
}

const TabPanelBar = (props: propsInterface) => {
    const { values, setValue } = props;
    const {
        isCodeEditor,
        firstTitle,
        secondTitle,
        thirdTitle,
        fourthTitle,
        value,
    } = values;

    const { data, updateData } = React.useContext(DataContext) as DataContextType;

    const currentProblem = data.currentProblem
    const isFullScreen = data.isFullScreen;
    const displayBadge = data.displayBadge;
    const currentTheme = data.currentTheme;
    const numOfTests = Object.keys(currentProblem.testCases).length;

    return (
        <AppBar position="static" color="default" style={{ backgroundColor: currentTheme.secondary }}>
            {!isCodeEditor && displayBadge && (
                    <Badge
                        badgeContent={numOfTests}
                        color="primary"
                        style={{ position:"absolute", top: '15px', left: '365px' }}
                    />

                )}
            <Tabs
                value={value}
                onChange={(event: unknown, newValue: number) => setValue(newValue)}
                aria-label="action tabs example"
                style={{ boxShadow: 'none' }}
            >
                <Tab label={firstTitle} id="tab-0" sx={{fontSize:"16px"}} />
                <Tab label={secondTitle} id="tab-1" sx={{fontSize:"16px"}} />
                {!isCodeEditor &&
                    <Tab
                        label={thirdTitle}
                        id="tab-2"
                        sx={{fontSize:"16px"}}
                        onClick={() => updateData({ displayBadge: false })}
                    />
                }
                
                {!isCodeEditor && <Tab label={fourthTitle} id="tab-3" sx={{fontSize:"16px"}} />}
                

                {!isCodeEditor && value === 3 && (
                    <Box sx={{ flexGrow: 1 }} style={{ textAlign: 'right' }}>
                        <IconButton
                            size="large"
                            onClick={() => updateData({ resetCode: true, deleteLogs: true })}
                        >
                            <DeleteIcon style={{ color: currentTheme.color }} />
                        </IconButton>
                    </Box>
                )}


                {isCodeEditor && (
                    <Box sx={{ flexGrow: 1 }} style={{ textAlign: 'right' }}>
                        <IconButton
                                size="large"
                                onClick={() => updateData({ beautifyCode: true })}
                            >
                                <DataObjectIcon style={{ color: currentTheme.color }} />
                            </IconButton>
                        <>
                            <IconButton
                                size="large"
                                onClick={() => updateData({ resetCode: true })}
                            >
                                <RefreshIcon style={{ color: currentTheme.color }} />
                            </IconButton>
                            <IconButton
                                size="large"
                                onClick={() => updateData({ isFullScreen: !isFullScreen })}
                            >
                                <FullscreenIcon style={{ color: currentTheme.color }} />
                            </IconButton>
                        </>
                    </Box>
                )}
            </Tabs>
        </AppBar>
    )
}

export default TabPanelBar;