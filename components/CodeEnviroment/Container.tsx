import * as React from 'react';
import Split from 'react-split';
import Paper from '@mui/material/Paper';

import TabPanel2 from './TabPanel2';
import TabPanel from './TabPanel';
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

const Container = () => {
    const { data } = React.useContext(DataContext) as DataContextType;
    const isFullScreen = data.isFullScreen;
    const currentTheme = data.currentTheme;

    const colors = {
        color: currentTheme.tertiary,
        hover: currentTheme.tertiary,
        drag: currentTheme.tertiary
    };

    const styles = {
        margin: '0px 25px',
        height: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
        padding: 0,
        position: 'relative',
        boxShadow: currentTheme.borderShadow,
        background: currentTheme.secondary
    };

    return (
        <div
            style={{
                width: '100%',
                boxSizing: 'border-box',
                flexBasis: '100%',
                overflow: 'hidden',
                backgroundColor: currentTheme.tertiary
            }}
        >
            <Split
                className="split"
                sizes={[40, 60]}
                minSize={0}
                expandToMin={false}
                gutterSize={10}
                gutterAlign="center"
                snapOffset={30}
                dragInterval={1}
                direction="horizontal"
                cursor="col-resize"
            >
                <Paper sx={{ ...styles, top: '5px', left: '-5px', marginRight: '0' }}>
                    <TabPanel2 />
                </Paper>

                <Paper sx={{ ...styles, top: '5px', left: '5px', marginLeft: '0' }}>
                    <TabPanel />
                </Paper>
            </Split>
        </div>
    );
};

export default Container;
