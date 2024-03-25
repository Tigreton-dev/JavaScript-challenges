import React, { useContext, useRef, useState, useEffect } from 'react';
import { DataContext } from '../../context/dataContext';
import TabsCodeEditor from './tabsCodeEditor';
import { Button } from '@nextui-org/react';
import { PlayIcon } from '../../helpers/Icons';
import Editor, { useMonaco, loader } from '@monaco-editor/react';
import { monacoDarkTheme, monacoLightTheme } from './monacoThemes';
import beautify from 'js-beautify';
import serviceWorker from '../../helpers/workerService';
import { useRouter } from 'next/navigation';
import { encode, decode } from 'js-base64';
import { useSearchParams } from 'next/navigation';

import { getHighlighter } from 'shiki';
import { shikiToMonaco } from '@shikijs/monaco';

export default function CodeEditor({ startedCode, refName, testCases, submittedCode }) {
    const { data, updateData } = useContext(DataContext);
    const { tabSize, fontSize, highlights, isDarkTheme } = data;
    const monaco = useMonaco();
    const monacoEditor = useRef(null);
    const editorRef = useRef(null);
    const [loadingButton, setLoadingButton] = useState(false);
    const [isClipBoardClicked, setIsClipBoardClicked] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const getParam = searchParams.get('code');
    const decodedCode = getParam !== null && decode(getParam);
    const [currentCode, setCurrentCode] = useState(() => {
        return getParam !== null ? decode(getParam) : startedCode;
    });
    const tabIndex = useRef(0);
    const [currentTheme, setCurrentTheme] = useState('vs-dark');

    const handleEditorWillMount = async (monaco: any) => {
        monacoEditor.current = monaco;
        // const darkTheme = monacoDarkTheme();
        // const lightTheme = monacoLightTheme();
        // monaco.editor.defineTheme('lightTheme', lightTheme);
        // monaco.editor.defineTheme('darkTheme', darkTheme);
        monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
        monaco.languages.register({ id: 'javascript' });

        const highlighter = await getHighlighter({
            themes: ['dark-plus', 'light-plus'],
            langs: ['javascript']
        });
        shikiToMonaco(highlighter, monaco);
        const theme = isDarkTheme ? 'dark-plus' : 'light-plus';
        setCurrentTheme(theme);
    };

    const handleEditorDidMount = (editor: any, monaco: any) => {
        editorRef.current = editor;
        prettifyCode();
    };

    useEffect(() => {
        if (currentTheme === 'vs-dark') return;
        const theme = isDarkTheme ? 'dark-plus' : 'light-plus';
        setCurrentTheme(theme);
    }, [isDarkTheme]);

    // WORKER
    useEffect(() => {
        serviceWorker.evento = payload => {
            setTimeout(() => {
                setLoadingButton(false);
                if (payload.type === 'test')
                    updateData({ passesAllTests: payload.passesAllTests, testCases: payload.testCases });
                updateData(prevData => {
                    return { consoleLogs: [...prevData.consoleLogs, payload] };
                });
            }, 500);
        };
    }, []);

    useEffect(() => {
        setSyntaxHighlights();
    }, [highlights]);

    useEffect(() => {
        prettifyCode();
    }, [fontSize, tabSize]);

    const prettifyCode = () => {
        if (editorRef.current !== null)
            editorRef.current.getModel().updateOptions({ tabSize: tabSize, indentSize: tabSize });
        const getCodeValue = editorRef?.current?.getValue();
        const prettifyCode = beautify(getCodeValue, { indent_size: tabSize, space_in_empty_paren: true });
        editorRef?.current?.setValue(prettifyCode);
    };

    const resetCode = () => {
        const pretifyCode = beautify(startedCode, { indent_size: tabSize, space_in_empty_paren: true });
        editorRef?.current?.setValue(pretifyCode);
    };

    const setFullScreen = () => {
        const isFullScreen = data.isFullScreen;
        updateData({ isFullScreen: !isFullScreen });
    };

    const copyCode = async () => {
        const getCodeValue = beautify(editorRef?.current?.getValue(), {
            indent_size: tabSize,
            space_in_empty_paren: true
        });

        try {
            await navigator.clipboard.writeText(getCodeValue);
            setIsClipBoardClicked(true);
            setTimeout(() => {
                setIsClipBoardClicked(false);
            }, 4000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const setSyntaxHighlights = () => {
        if (editorRef.current === null) return;
        const model = editorRef.current.getModel();
        if (highlights) {
            if (monacoEditor.current !== null) monacoEditor.current.editor.setModelLanguage(model, 'javascript');
        } else {
            if (editorRef.current !== null) monacoEditor.current.editor.setModelLanguage(model, '');
        }
    };

    const runCode = async () => {
        setLoadingButton(true);
        const fun = editorRef?.current?.getValue();
        const payload = { fun, refName, testCases };
        serviceWorker.executeWorker(payload);
    };

    function updateHashedCode(code) {
        if (tabIndex.current === 1) return;
        const hashedCode = `${encode(code)}`;
        router.push(`?code=${hashedCode}`);
    }

    const tabChangeHandler = index => {
        if (index === 1) {
            tabIndex.current = 1;
            const removeChars = submittedCode.replace(/\\n/g, '');
            const pretifyCode = beautify(removeChars, { indent_size: tabSize, space_in_empty_paren: true });
            editorRef?.current?.setValue(pretifyCode);
        } else {
            tabIndex.current = 0;
            const getParam = searchParams.get('code');
            const decodedCode = getParam === null ? startedCode : decode(getParam);
            const pretifyCode = beautify(currentCode, { indent_size: tabSize, space_in_empty_paren: true });
            editorRef?.current?.setValue(pretifyCode);
        }
    };

    return (
        <>
            <Button
                isLoading={loadingButton ? true : false}
                variant="bordered"
                color="primary"
                aria-label="Take a photo"
                size="md"
                radius="sm"
                className="absolute z-50 bottom-[10px] right-[10px] border border-cyan-400 text-cyan-400 bg-[white] dark:bg-[rgb(0,0,0)]"
                onClick={() => runCode()}
            >
                Run code
            </Button>
            <TabsCodeEditor
                setFullScreen={setFullScreen}
                copyCode={copyCode}
                resetCode={resetCode}
                prettifyCode={() => prettifyCode()}
                onTabChange={val => tabChangeHandler(val)}
                isClipBoardClicked={isClipBoardClicked}
                submittedCode={submittedCode}
            />
            <Editor
                className="px-0 pt-5 bg-white dark:bg-black"
                height="calc(100% - 80px)"
                defaultLanguage={'javascript'}
                language={'javascript'}
                value={currentCode}
                beforeMount={handleEditorWillMount}
                onMount={handleEditorDidMount}
                theme={currentTheme}
                onChange={(value: string | undefined) => updateHashedCode(value)}
                options={{
                    minimap: { enabled: false },
                    scrollbar: { vertical: 'hidden' },
                    fontSize: fontSize,
                    codeLens: false,
                    readOnly: false,
                    inlineSuggest: { enabled: false },
                    contextmenu: false
                }}
            />
        </>
    );
}
