import * as React from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import { lightTheme, darkTheme, monacoDarkTheme, monacoLightTheme } from '../../helpers/CodeEditorTheme';
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

interface Iprops {
    isSumittedPage: boolean;
}

const CodeMirrorEditor = (props: Iprops) => {
    const { isSumittedPage } = props;
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const currentProblem: any = data.currentProblem;
    const currentLanguage = data.currentLanguage;
    const fontSize = data.fontSize;
    const startedCode = currentProblem.startedCode[currentLanguage];
    const currentTheme = data.currentTheme;
    const code = React.useRef('');
    const resetCode = data.resetCode;
    const editorTheme = currentTheme.isDarkTheme
        ? monacoDarkTheme(currentTheme.secondary)
        : monacoLightTheme(currentTheme.secondary);
    const codeSolutionOnStorage = localStorage.getItem(currentProblem.refName);

    const monaco = useMonaco();
    const editorRef = React.useRef<any>(null);

    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
        setTimeout(function () {
            editor.getAction('editor.action.formatDocument').run();
        }, 300);
    }

    function handleEditorWillMount(monaco: any) {
        // here is the monaco instance
        // do something before editor is mounted
        monaco.editor.defineTheme('my-theme', editorTheme);
        monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    }

    React.useEffect(() => {
        code.current = currentProblem.startedCode[currentLanguage];
    }, [startedCode, resetCode]);

    React.useEffect(() => {
        if (resetCode) code.current = currentProblem.startedCode[currentLanguage];
        updateData({ resetCode: false });
    }, [resetCode]);

    React.useEffect(() => {
        if (data.beautifyCode) {
            editorRef?.current?.getAction('editor.action.formatDocument').run();
            updateData({ beautifyCode: false });
        }
    }, [data.beautifyCode]);

    React.useEffect(() => {
        // @ts-ignore
        if (monaco) monaco.editor.defineTheme('my-theme', editorTheme);
    }, [currentTheme.isDarkTheme]);

    const onChange = React.useCallback((value: string | undefined) => {
        if (value !== undefined) code.current = value;
    }, []);

    const sendCodeHandler = () => {
        updateData({ codeValue: code.current });
    };

    return (
        <div style={{ margin: '10px', marginLeft: '-15px', textAlign: 'initial', fontSize: fontSize }}>
            <Editor
                height="calc(100vh - 6.5rem - 45px)"
                defaultLanguage="javascript"
                value={codeSolutionOnStorage !== null && isSumittedPage ? codeSolutionOnStorage : code.current}
                beforeMount={handleEditorWillMount}
                onMount={handleEditorDidMount}
                theme="my-theme"
                onChange={(value: string | undefined) => onChange(value)}
                options={{
                    minimap: { enabled: false },
                    scrollbar: { vertical: 'hidden' },
                    fontSize: fontSize,
                    readOnly: isSumittedPage ? true : false
                }}
            />
            {!isSumittedPage && (
                <Button
                    onClick={sendCodeHandler}
                    variant="contained"
                    size="small"
                    endIcon={<SendIcon />}
                    style={{
                        boxShadow: currentTheme.borderShadow,
                        bottom: '40px',
                        right: '40px',
                        position: 'fixed',
                        color: 'white',
                        backgroundColor: currentTheme.secondary_color
                    }}
                >
                    Run Code
                </Button>
            )}
        </div>
    );
};

export default CodeMirrorEditor;
