import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import Container from './Container';
import MenuBar from './MenuBar/MenuBar';
import SolutionCodeModal from './SolutionCodeModal';
import { muiTheme } from '../../helpers/MuiTheme';
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

interface ItestCases {
    [key: string]: any;
}

export default function CodeEnviroment() {
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const currentProblem = data.currentProblem;
    const displayCodeResultModal = data.displayCodeResultModal;
    const isSolutionCorrect = data.isSolutionCorrect;
    const currentTheme = data.currentTheme;
    const codeValue = data.codeValue;
    const [windowDimensions, setWindowDimensions] = React.useState(window.innerWidth);
    const muiThemeProps = {
        color: currentTheme.color,
        primary: currentTheme.primary,
        secondary_color: currentTheme.secondary_color,
        tertiary: currentTheme.tertiary
    };

    React.useEffect(() => {
        const setWidth = () => {
            setWindowDimensions(window.innerWidth);
        };
        window.addEventListener('resize', setWidth);

        return () => window.removeEventListener('resize', setWidth);
    }, []);

    React.useEffect(() => {
        if (codeValue.length > 0) run_tests();
    }, [codeValue]);

    const createScript = () => {
        const scriptElement = document.getElementById('debugScript');
        if (scriptElement !== null) document.body.removeChild(scriptElement);
        const js = codeValue;
        const oScript = document.createElement('script');
        const oScriptText = document.createTextNode(js);
        oScript.id = 'debugScript';
        oScript.appendChild(oScriptText);
        document.body.appendChild(oScript);
    };

    const createTestScript = (value: string) => {
        const scriptElement = document.getElementById('testScript');
        if (scriptElement !== null) document.body.removeChild(scriptElement);
        const oScript = document.createElement('script');
        const oScriptText = document.createTextNode(value);
        oScript.id = 'testScript';
        oScript.appendChild(oScriptText);
        document.body.appendChild(oScript);
    };

    const run_tests = () => {
        createScript();
        const testCases: ItestCases = currentProblem.testCases;
        const functionName = currentProblem.refName;
        const updateCurrentProblem = JSON.parse(JSON.stringify(currentProblem));
        for (let testCase in testCases) {
            console.log('---------- Test Case ' + testCase + ' ----------');
            if (updateCurrentProblem.testCases[testCase].functionTest) {
                createTestScript(updateCurrentProblem.testCases[testCase].test_input);
                // @ts-ignore
                updateCurrentProblem.testCases[testCase].code_output = window.test_input();
            } else {
                const parameters = JSON.parse(JSON.stringify(testCases[testCase].test_input));
                try {
                    // @ts-ignore
                    if (window[functionName] !== undefined) {
                        // @ts-ignore
                        updateCurrentProblem.testCases[testCase].code_output = window[functionName](...parameters);
                    } else {
                        console.error(`TypeError: window.${functionName} is undefined`);
                    }
                } catch (err) {
                    console.error(err);
                }
            }

            JSON.stringify(testCases[testCase].test_expected) ===
            JSON.stringify(updateCurrentProblem.testCases[testCase].code_output)
                ? (updateCurrentProblem.testCases[testCase].passed_test = true)
                : (updateCurrentProblem.testCases[testCase].passed_test = false);
        }
        let solutionCorrect = true;
        for (let testCase in updateCurrentProblem.testCases) {
            if (!updateCurrentProblem.testCases[testCase].passed_test) solutionCorrect = false;
        }

        if (solutionCorrect) localStorage.setItem(updateCurrentProblem.refName, codeValue);
        updateData({
            runCode: false,
            displayCodeResultModal: true,
            isSolutionCorrect: solutionCorrect,
            currentProblem: updateCurrentProblem,
            displayBadge: true
        });
    };

    const closeModal = () => {
        updateData({
            displayCodeResultModal: false
        });
    };

    return (
        <>
            {windowDimensions < 1080 ? (
                <p>Not supported</p>
            ) : (
                <ThemeProvider theme={muiTheme(muiThemeProps)}>
                    <MenuBar />
                    <Container />
                    <SolutionCodeModal
                        open={displayCodeResultModal}
                        setClose={() => closeModal()}
                        isSolutionCorrect={isSolutionCorrect}
                    />
                </ThemeProvider>
            )}
        </>
    );
}
