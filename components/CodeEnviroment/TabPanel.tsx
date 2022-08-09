import * as React from 'react'
import SwipeableViews from 'react-swipeable-views'
import Box from '@mui/material/Box'

import SolutionCode from './SolutionCode'
import CodeMirrorEditor from './CodeMirrorEditor'
import ChallengeDescription from './ChallengeDescription/ChallengeDescription'
import TestCases from './TestCases'
import NewChallengeForm from './NewChallengeForm'
import TabPanelBar from "./TabPanelBar"
import Terminal from "./Terminal";

import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

interface propsInterface {
    isCodeEditor: boolean; 
    firstTitle: string;
    secondTitle: string;
    thirdTitle: string;
    fourthTitle: string;
}

const TabPanel = (props: propsInterface) => {
    const { isCodeEditor, firstTitle, secondTitle, thirdTitle, fourthTitle } = props
    const { data } = React.useContext(DataContext) as DataContextType;
    const currentTheme = data.currentTheme;

    const [value, setValue] = React.useState(0);

    const menuBarProps = {
        isCodeEditor, 
        firstTitle, 
        secondTitle, 
        thirdTitle, 
        fourthTitle,
        value
    }

    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100%',
                backgroundColor: currentTheme.secondary,
            }}
        >
            <TabPanelBar values={menuBarProps} setValue={(newValue: number) => setValue(newValue)} />
            {isCodeEditor ? (
                <SwipeableViews
                    key="1"
                    index={value}
                    onChangeIndex={(index: number) => setValue(index)}
                >
                    <CodeMirrorEditor isSubmittedCodeEditor={false} />
                    <CodeMirrorEditor isSubmittedCodeEditor={true} />
                </SwipeableViews>
            ) : (
                <SwipeableViews
                    key="1"
                    index={value}
                    onChangeIndex={(index: number) => setValue(index)}
                >
                    <ChallengeDescription />
                    <SolutionCode />
                    <TestCases />
                    <Terminal />
                </SwipeableViews>
            )}
        </Box>
    )
}

export default TabPanel;