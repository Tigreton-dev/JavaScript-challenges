import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// @ts-ignore
import beautify from 'js-beautify';

import { lightTheme, darkTheme } from '../../helpers/CodeEditorTheme';
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

const CodeMirrorEditor = () => {
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const currentProblem: any = data.currentProblem;
    const currentLanguage = data.currentLanguage;
    const fontSize = data.fontSize;
    const startedCode = currentProblem.startedCode[currentLanguage];
    const currentTheme = data.currentTheme;
    const [code, setCode] = React.useState('');
    const resetCode = data.resetCode;
    const editorTheme = currentTheme.isDarkTheme
        ? darkTheme(currentTheme.secondary)
        : lightTheme(currentTheme.secondary);
    const codeSolutionOnStorage = localStorage.getItem(currentProblem.refName);

    React.useEffect(() => {
        if (data.beautifyCode) {
            const val = beautify(code, {
                indent_size: 3,
                space_in_empty_paren: true
            });
            setCode(val);
            updateData({
                beautifyCode: false
            });
        }
    }, [data.beautifyCode]);

    React.useEffect(() => {
        setCode(currentProblem.startedCode[currentLanguage]);
    }, [startedCode, resetCode]);

    React.useEffect(() => {
        if (resetCode) setCode(currentProblem.startedCode[currentLanguage]);
        updateData({ resetCode: false });
    }, [resetCode]);

    const onChange = React.useCallback((value: string) => {
        setCode(value);
    }, []);

    const sendCodeHandler = () => {
        updateData({ codeValue: code });
    };

    return (
        <div
            style={{
                margin: '10px',
                textAlign: 'initial',
                fontSize: fontSize
            }}
        >
            <CodeMirror
                theme={editorTheme}
                value={codeSolutionOnStorage !== null ? codeSolutionOnStorage : code}
                className="codeMirror_editor"
                height="calc(100vh - 155px)"
                autoFocus={false}
                basicSetup={{
                    lineNumbers: true,
                    highlightActiveLineGutter: false,
                    highlightSpecialChars: false,
                    history: false,
                    foldGutter: false,
                    drawSelection: false,
                    dropCursor: false,
                    allowMultipleSelections: false,
                    indentOnInput: false,
                    syntaxHighlighting: true,
                    bracketMatching: false,
                    closeBrackets: false,
                    autocompletion: false,
                    rectangularSelection: false,
                    crosshairCursor: false,
                    highlightActiveLine: false,
                    highlightSelectionMatches: false,
                    closeBracketsKeymap: false,
                    defaultKeymap: false,
                    searchKeymap: false,
                    historyKeymap: false,
                    foldKeymap: false,
                    completionKeymap: false,
                    lintKeymap: false
                }}
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => onChange(value)}
            />
            <Button
                onClick={sendCodeHandler}
                variant="contained"
                size="small"
                endIcon={<SendIcon />}
                style={{
                    boxShadow: currentTheme.borderShadow,
                    bottom: 40,
                    left: 'calc(100% - 80px)',
                    position: 'relative',
                    color: 'white',
                    backgroundColor: currentTheme.secondary_color
                }}
            >
                Run
            </Button>
        </div>
    );
};

export default CodeMirrorEditor;
