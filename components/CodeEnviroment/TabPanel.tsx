import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import IconButton from '@mui/material/IconButton';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import DataObjectIcon from '@mui/icons-material/DataObject';
import RefreshIcon from '@mui/icons-material/Refresh';
import CodeMirrorEditor from './CodeMirrorEditor';
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

interface propsInterface {
    handleChange: Function;
}

export default function TabPanel2() {
    const [value, setValue] = React.useState('1');
    const { data } = React.useContext(DataContext) as DataContextType;
    const currentTheme = data.currentTheme;

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ position: 'relative', minHeight: '100%', backgroundColor: currentTheme.secondary }}>
            <TabContext value={value}>
                <TabHeader
                    handleChange={(event: React.SyntheticEvent, newValue: string) => handleChange(event, newValue)}
                />
                <TabPanels />
            </TabContext>
        </Box>
    );
}

const TabHeader = (props: propsInterface) => {
    const { handleChange } = props;
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const currentTheme = data.currentTheme;
    const isFullScreen = data.isFullScreen;

    return (
        <Box sx={{ borderColor: 'divider', height: '3rem' }}>
            <TabList
                sx={{ borderColor: 'divider', height: '3rem' }}
                onChange={(e, val) => handleChange(e, val)}
                aria-label="lab API tabs example"
            >
                <Tab label="Your Solution" sx={{ fontSize: '1rem', padding: '0.8rem' }} value="1" />
                <Tab label="Submitted Solution" sx={{ fontSize: '1rem', padding: '0.8rem' }} value="2" />
            </TabList>

            <Box sx={{ flexGrow: 1 }} style={{ position: 'absolute', top: '0px', right: '5px' }}>
                <IconButton size="large" onClick={() => updateData({ beautifyCode: true })}>
                    <DataObjectIcon style={{ color: currentTheme.color }} />
                </IconButton>
                <>
                    <IconButton size="large" onClick={() => updateData({ resetCode: true })}>
                        <RefreshIcon style={{ color: currentTheme.color }} />
                    </IconButton>
                    <IconButton size="large" onClick={() => updateData({ isFullScreen: !isFullScreen })}>
                        <FullscreenIcon style={{ color: currentTheme.color }} />
                    </IconButton>
                </>
            </Box>
        </Box>
    );
};

const TabPanels = () => {
    return (
        <>
            <TabPanel value="1" sx={{ padding: 0 }}>
                <CodeMirrorEditor isSumittedPage={false} />
            </TabPanel>
            <TabPanel value="2" sx={{ padding: 0 }}>
                <CodeMirrorEditor isSumittedPage={true} />
            </TabPanel>
        </>
    );
};
