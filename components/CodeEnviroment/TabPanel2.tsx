import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ChallengeDescription from './ChallengeDescription/ChallengeDescription';
import TestCases from './TestCases';
import SolutionCode from './SolutionCode';
import Terminal from './Terminal';
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

interface propsInterface {
    handleChange: Function;
    value: string;
}

export default function TabPanel2() {
    const [value, setValue] = React.useState('1');
    const { data } = React.useContext(DataContext) as DataContextType;
    const currentTheme = data.currentTheme;
    const displayCodeResultModal = data.displayCodeResultModal;

    React.useEffect(() => {
        if (displayCodeResultModal) setValue('3');
    }, [displayCodeResultModal]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ position: 'relative', minHeight: '100%', backgroundColor: currentTheme.secondary }}>
            <TabContext value={value}>
                <TabHeader
                    value={value}
                    handleChange={(event: React.SyntheticEvent, newValue: string) => handleChange(event, newValue)}
                />
                <TabPanels />
            </TabContext>
        </Box>
    );
}

const TabHeader = (props: propsInterface) => {
    const { value, handleChange } = props;
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const currentTheme = data.currentTheme;
    const currentProblem = data.currentProblem;
    const numOfTests = Object.keys(currentProblem.testCases).length;
    const displayBadge = data.displayBadge;

    return (
        <Box sx={{ borderColor: 'divider', height: '3rem' }}>
            <TabList
                sx={{ borderColor: 'divider', height: '3rem' }}
                onChange={(e, val) => handleChange(e, val)}
                aria-label="lab API tabs example"
            >
                <Tab label="Description" sx={{ fontSize: '1rem', padding: '0.8rem' }} value="1" />
                <Tab label="Solution" sx={{ fontSize: '1rem', padding: '0.8rem' }} value="2" />
                <Tab
                    label="Test Cases"
                    sx={{ fontSize: '1rem', padding: '0.8rem' }}
                    onClick={() => updateData({ displayBadge: false })}
                    value="3"
                />
                <Tab label="Terminal" sx={{ fontSize: '1rem', padding: '0.8rem' }} value="4" />
            </TabList>

            {value === '4' && (
                <Box sx={{ flexGrow: 1 }} style={{ position: 'absolute', top: '0px', right: '5px' }}>
                    <IconButton size="large" onClick={() => updateData({ deleteLogs: true })}>
                        <DeleteIcon style={{ color: currentTheme.color }} />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
};

const TabPanels = () => {
    return (
        <>
            <TabPanel value="1" sx={{ padding: 0 }}>
                <ChallengeDescription />
            </TabPanel>
            <TabPanel value="2" sx={{ padding: 0 }}>
                <SolutionCode />
            </TabPanel>
            <TabPanel value="3" sx={{ padding: 0 }}>
                <TestCases />
            </TabPanel>
            <TabPanel value="4" sx={{ padding: 0 }}>
                <Terminal />
            </TabPanel>
        </>
    );
};
