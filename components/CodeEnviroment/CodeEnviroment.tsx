import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import Container from './Container';
import MenuBar from './MenuBar/MenuBar';
import SolutionCodeModal from './SolutionCodeModal';
import { muiTheme } from '../../helpers/MuiTheme';
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';
import { run_tests } from '../../helpers/testScript';
import DescriptionDialog from './DescriptionDialog';

export default function CodeEnviroment() {
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const currentProblem = data.currentProblem;
    const displayCodeResultModal = data.displayCodeResultModal;
    const isSolutionCorrect = data.isSolutionCorrect;
    const currentTheme = data.currentTheme;
    const codeValue = data.codeValue;
    const muiThemeProps = {
        color: currentTheme.color,
        primary: currentTheme.primary,
        secondary_color: currentTheme.secondary_color,
        tertiary: currentTheme.tertiary
    };

    // Run Code
    React.useEffect(() => {
        if (codeValue.length > 0) {
            const result = run_tests(currentProblem, codeValue);
            updateData({
                runCode: false,
                displayCodeResultModal: true,
                isSolutionCorrect: result.solutionCorrect,
                currentProblem: result.problem,
                displayBadge: true
            });
        }
    }, [codeValue]);

    const closeModal = () => {
        updateData({ displayCodeResultModal: false });
    };

    return (
        <ThemeProvider theme={muiTheme(muiThemeProps)}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: muiThemeProps.tertiary
                }}
            >
                <MenuBar />
                <Container />
                <SolutionCodeModal
                    open={displayCodeResultModal}
                    setClose={() => closeModal()}
                    isSolutionCorrect={isSolutionCorrect}
                />
                <DescriptionDialog />
            </div>
        </ThemeProvider>
    );
}
