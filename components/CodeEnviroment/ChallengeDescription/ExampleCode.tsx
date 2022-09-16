import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// @ts-ignore
import beautify from 'js-beautify';

import { lightTheme, darkTheme } from '../../../helpers/CodeEditorTheme';
import { DataContext } from '../../../context/dataContext';
import { DataContextType } from '../../../context/@types.data';

const ExampleCode = () => {
    const { data } = React.useContext(DataContext) as DataContextType;
    const examples = data.currentProblem.examples;
    const currentTheme = data.currentTheme;
    const editorTheme = currentTheme.isDarkTheme ? darkTheme(currentTheme.primary) : lightTheme(currentTheme.primary);

    const spanStyles = {
        borderRadius: '5px',
        color: currentTheme.color,
        position: 'relative',
        top: '10px',
        fontSize: '1.1rem',
        background: currentTheme.primary,
        boxShadow: currentTheme.borderShadow
    };

    React.useEffect(() => {
        const codemirrorClass: Array<any> = Array.from(document.getElementsByClassName('codeMirror_examples'));
        codemirrorClass.forEach(mirror => {
            mirror.style.borderRadius = '5px';
            mirror.style.marginBottom = '15px';
            mirror.style.padding = '0.625rem';
            mirror.style.paddingTop = '1.25rem';
            mirror.style.boxShadow =
                '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)';
            mirror.style.overflow = 'scroll';
            mirror.style.backgroundColor = currentTheme.primary;
        });
    }, [currentTheme]);

    return (
        <div>
            {Object.entries(examples).map(([key, value], i) => {
                return (
                    <Box
                        key={key}
                        style={{
                            fontSize: '1rem'
                        }}
                    >
                        <Typography variant="h6">Example {i + 1}</Typography>
                        <Chip label="Input" sx={spanStyles} />
                        <CodeMirror
                            value={beautify(value.input, {
                                indent_size: 2,
                                space_in_empty_paren: true
                            })}
                            className="codeMirror_examples"
                            editable={false}
                            height={'100%'}
                            theme={editorTheme}
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
                        <Chip label="Output" sx={spanStyles} />
                        <CodeMirror
                            value={beautify(value.output, {
                                indent_size: 2,
                                space_in_empty_paren: true
                            })}
                            className="codeMirror_examples"
                            editable={false}
                            height={'100%'}
                            theme={editorTheme}
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
                    </Box>
                );
            })}
        </div>
    );
};

export default ExampleCode;
