import React, { useEffect, useRef } from "react";
import Split from 'react-split'
import { Button, user } from "@nextui-org/react";
import Editor, { useMonaco, loader } from '@monaco-editor/react';
import { monacoDarkTheme } from "./monacoThemes"
import TabCodeEditorComponent from "../app/tabsCodeEditor"
import { PlayIcon } from "./helpers/Icons"
import { DataContext } from './context/dataContext';
import beautify from 'js-beautify';

const RightSide = () => {

    return (
        <div>
            <Split
                className="splitHorizontal"
                sizes={[100, 0]}
                minSize={34}
                expandToMin={false}
                gutterSize={10}
                gutterAlign="center"
                snapOffset={30}
                dragInterval={1}
                direction="vertical"
            >
                <CodeEditorComponent />
                <ConsoleComponent />
            </Split>
        </div>
    )
}

export default RightSide;

function CodeEditorComponent() {
    const { data, updateData } = React.useContext(DataContext);
    const editorRef = useRef(null)
    const fontSize = data.fontSize;
    const startedCode = data.currentProblem.startedCode.javaScript;
    const monaco = useMonaco();

    function handleEditorWillMount(monaco: any) {
        // here is the monaco instance do something before editor is mounted
        const theme = monacoDarkTheme()
        monaco.editor.defineTheme('my-theme', theme);
        monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    }

    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
        setTimeout(function () {
            editor.getAction('editor.action.formatDocument').run();
            const monacoClasses = ["monaco-editor", "overflow-guard", "monaco-scrollable-element", "monaco-editor-background", "monaco-mouse-cursor-text"]
            monacoClasses.forEach(function (value, index, array) {
                const elemento = Array.from(document.getElementsByClassName(value));
                console.log(elemento)
                elemento.forEach(element => {
                    element.style.backgroundColor = "transparent"
                });
            });
            const elemento = document.getElementsByClassName("ddd")[0];
            elemento.style.backgroundColor = "#141414"

            const elemento2 = document.getElementsByClassName("margin")[0];
            console.log(elemento2)
            elemento2.style.backgroundColor = "transparent"
        }, 300);
    }

    const prettifyCode = () => {
        editorRef?.current?.getAction('editor.action.formatDocument').run();
        const getCodeValue = editorRef?.current?.getValue()
        const pretifyCode = beautify(getCodeValue, { indent_size: 3, space_in_empty_paren: true })
        editorRef?.current?.setValue(pretifyCode)
    }

    const resetCode = () => {
        const pretifyCode = beautify(startedCode, { indent_size: 3, space_in_empty_paren: true })
        editorRef?.current?.setValue(pretifyCode)
    }

    const copyCode = async () => {
        const getCodeValue = editorRef?.current?.getValue();
        try {
            await navigator.clipboard.writeText(getCodeValue);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }

    }

    const setFullScreen = () => {
        const isFullScreen = data.isFullScreen;
        updateData({ isFullScreen: !isFullScreen })
    }

    return (
        <div className="border border-default-200 dark:border-default-100 overflow-hidden rounded-lg bg-gradient-to-br from-white to-default-0 dark:from-black dark:to-default-500">
            <div className="flex items-center sticky top-0 left-0 px-4 z-10 justify-between h-8 bg-code-background w-full bg-default-100 dark:bg-default-50"><div className="flex items-center gap-2 basis-1/3"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div><div className="flex basis-1/3 h-full justify-center items-center"></div><div className="flex basis-1/3"></div></div>
            <TabCodeEditorComponent setFullScreen={setFullScreen} copyCode={copyCode} resetCode={resetCode} prettifyCode={() => prettifyCode()} onTabChange={(val) => console.log(val)} />
            <Editor
                className="px-0 bg-gradient-to-br from-white to-default-0 dark:from-black dark:to-default-50 ddd"
                height="calc(100% - 65px)"
                defaultLanguage="javascript"
                // defaultValue={startedCode}
                value={startedCode !== null ? startedCode : "aa"}
                beforeMount={handleEditorWillMount}
                onMount={handleEditorDidMount}
                theme="my-theme"
                // onChange={(value: string | undefined) => onChange(value)}
                options={{
                    minimap: { enabled: false },
                    scrollbar: { vertical: 'hidden' },
                    fontSize: fontSize,
                    codeLens: false,
                    readOnly: false,
                    inlineSuggest: { enabled: false },
                }}
            />
            <Button variant="solid" color="primary" aria-label="Take a photo" size="md" radius="sm" className="relative bottom-[5rem] left-[calc(100%-8rem)]">
                <PlayIcon /> Run code
            </Button>
        </div>
    )
}

function ConsoleComponent() {
    return (
        <div className="border border-default-200 dark:border-default-100 overflow-hidden rounded-lg bg-gradient-to-br from-white to-default-0 dark:from-black dark:to-default-50">
            <div className="flex items-center sticky top-0 left-0 px-4 z-10 justify-between h-8 bg-code-background w-full bg-default-100 dark:bg-default-50"><div className="flex items-center gap-2 basis-1/3"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div><div className="flex basis-1/3 h-full justify-center items-center"></div><div className="flex basis-1/3"></div>Console</div>
        </div>
    )
}