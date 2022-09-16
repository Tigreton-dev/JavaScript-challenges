import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';
// @ts-ignore
import beautify from 'js-beautify';

import { lightTheme, darkTheme } from '../../helpers/CodeEditorTheme';
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

const TestCases = () => {
    const { data } = React.useContext(DataContext) as DataContextType;
    const currentProblem = data.currentProblem;
    const currentTheme = data.currentTheme;
    const editorTheme = currentTheme.isDarkTheme
        ? darkTheme(currentTheme.secondary)
        : lightTheme(currentTheme.secondary);

    return (
        <div
            style={{
                padding: '20px',
                height: 'calc(100vh - 140px)',
                overflow: 'scroll'
            }}
        >
            {Object.entries(currentProblem.testCases).map(([key, value], i) => {
                const { test_input, test_expected, code_output, passed_test } = value;
                const inputData = beautify(JSON.stringify(test_input), {
                    indent_size: 2,
                    space_in_empty_paren: true
                });
                const boxShadow = passed_test ? '0px 0px 10px -1px green' : '0px 0px 10px -1px rgb(223, 3, 3)';
                const msg = passed_test ? 'Passed Correctly' : 'Fail';
                const codemirrors = [
                    {
                        data: inputData,
                        title: 'Input data:'
                    },
                    {
                        data: test_expected,
                        title: 'Expected Output:'
                    },
                    {
                        data: code_output,
                        title: 'Code Output:'
                    }
                ];
                const icon = passed_test ? (
                    <CheckCircleIcon fontSize="large" color="success" />
                ) : (
                    <CancelIcon fontSize="large" color="error" />
                );
                return (
                    <Accordion
                        style={{
                            boxShadow: boxShadow,
                            backgroundColor: currentTheme.primary
                        }}
                        key={key}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon
                                    sx={{
                                        color: currentTheme.color
                                    }}
                                />
                            }
                        >
                            <Button
                                size="large"
                                startIcon={icon}
                                sx={{
                                    boxShadow: 'none'
                                }}
                            >
                                {`Test ${i} ${msg}`}
                            </Button>
                        </AccordionSummary>
                        <AccordionDetails>
                            {codemirrors.map(element => (
                                <>
                                    <Typography variant="h6">{element.title}</Typography>
                                    <CodeMirror
                                        value={beautify(JSON.stringify(element.data), {
                                            indent_size: 2,
                                            space_in_empty_paren: true
                                        })}
                                        className="codeMirror_testCases"
                                        height={'100%'}
                                        editable={false}
                                        theme={editorTheme}
                                        style={{
                                            borderRadius: '5px',
                                            marginBottom: '15px',
                                            padding: '10px',
                                            boxShadow:
                                                '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
                                            overflow: 'scroll',
                                            backgroundColor: currentTheme.secondary
                                        }}
                                        extensions={[
                                            javascript({
                                                jsx: true
                                            })
                                        ]}
                                        basicSetup={{
                                            lineNumbers: false,
                                            highlightActiveLineGutter: false,
                                            highlightSpecialChars: false,
                                            highlightActiveLine: false
                                        }}
                                    />
                                </>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
};

export default TestCases;
