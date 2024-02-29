"use client";
import React, { useEffect, useRef, useCallback, useState } from "react";
import Split from 'react-split'
import { Button, user, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import Editor, { useMonaco, loader } from '@monaco-editor/react';
import { monacoDarkTheme, monacoLightTheme } from "./monacoThemes"
import TabCodeEditorComponent from "./tabsCodeEditor"
import { PlayIcon, CheckedIcon, ErrorIcon } from "../../helpers/Icons"
import { DataContext } from '../../context/dataContext';
import beautify from 'js-beautify';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darkTheme, lightTheme } from "../../helpers/themesHighlighter"
import { Warning, ErrorConsole } from "../../helpers/Icons";

const DevelopmentEnvironment = () => {
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

export default DevelopmentEnvironment;

function CodeEditorComponent() {
    const { data, updateData } = React.useContext(DataContext);
    const editorRef = useRef(null)
    const fontSize = data.fontSize;
    const tabSize = data.tabSize;
    const SyntaxHighlighter = data.SyntaxHighlighter
    const startedCode = useRef(beautify(data.currentProblem.startedCode.javaScript, { indent_size: tabSize, space_in_empty_paren: true }))
    const testCases = data.currentProblem.testCases;
    const monaco = useMonaco();
    const [monacoEditor, setMonacoEditor] = useState(null);
    const workerRef = useRef()
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [loadingButton, setLoadingButton] = useState(false)
    const [passesAllTests, setPassesAllTests] = useState(false)
    const [isClipBoardClicked, setIsClipBoardClicked] = useState(false)

    useEffect(() => {
        if (monacoEditor === null) return
        const theme = data.isDarkTheme ? monacoDarkTheme() : monacoLightTheme()
        monacoEditor.editor.defineTheme('my-theme', theme);
    }, [data.isDarkTheme])

    useEffect(() =>{
        prettifyCode()
    }, [tabSize])

    useEffect(() =>{
        if (editorRef.current !== null) editorRef.current.getModel().updateOptions({ defaultLanguage: "" })
    }, [SyntaxHighlighter])


    function handleEditorWillMount(monaco: any) {
        // here is the monaco instance do something before editor is mounted

        setMonacoEditor(monaco)
        const darkTheme = monacoDarkTheme()
        const lightTheme = monacoLightTheme()
        monaco.editor.defineTheme('lightTheme', lightTheme);
        monaco.editor.defineTheme('darkTheme', darkTheme);
        monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    }

    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
        editor.getModel().updateOptions({ tabSize: tabSize, indentSize: tabSize })
        console.log(editor.getModel())
    }

    const prettifyCode = () => {
        // editorRef?.current?.getAction('editor.action.formatDocument').run();
        if (editorRef.current !== null) editorRef.current.getModel().updateOptions({ tabSize: tabSize, indentSize: tabSize })
        const getCodeValue = editorRef?.current?.getValue()
        const prettifyCode = beautify(getCodeValue, { indent_size: tabSize, space_in_empty_paren: true })
        editorRef?.current?.setValue(prettifyCode)
    }

    const resetCode = () => {
        const pretifyCode = beautify(startedCode.current, { indent_size: tabSize, space_in_empty_paren: true })
        editorRef?.current?.setValue(pretifyCode)
    }

    const copyCode = async () => {
        const getCodeValue = beautify(editorRef?.current?.getValue(), { indent_size: tabSize, space_in_empty_paren: true });

        try {
            await navigator.clipboard.writeText(getCodeValue);
            setIsClipBoardClicked(true)
			setTimeout(() => {
				setIsClipBoardClicked(false)
			}, 4000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }

    }

    const setFullScreen = () => {
        const isFullScreen = data.isFullScreen;
        updateData({ isFullScreen: !isFullScreen })
    }

    useEffect(() => {
        workerRef.current = new Worker(new URL('../../helpers/worker.js', import.meta.url))
        workerRef.current.onmessage = (event) => {
            if (event.data?.type === "log" || event.data?.type === "warn" || event.data?.type === "error") {
                if(event.data.content[0] instanceof InternalError ) {
                    updateData(prevData => {
                        return { consoleLogs: [...prevData.consoleLogs, {type: "error", content: [`InternalError: ${event.data.content[0].message}`]}] }
                    })
                }
                else if(event.data.content[0] instanceof RangeError ) {
                    updateData(prevData => {
                        return { consoleLogs: [...prevData.consoleLogs, {type: "error", content: [`RangeError: ${event.data.content[0].message}`]}] }
                    })
                }
                else if(event.data.content[0] instanceof ReferenceError ) {
                    updateData(prevData => {
                        return { consoleLogs: [...prevData.consoleLogs, {type: "error", content: [`ReferenceError: ${event.data.content[0].message}`]}] }
                    })
                }
                else if(event.data.content[0] instanceof TypeError ) {
                    updateData(prevData => {
                        return { consoleLogs: [...prevData.consoleLogs, {type: "error", content: [`TypeError: ${event.data.content[0].message}`]}] }
                    })
                }
                else if(event.data.content[0] instanceof SyntaxError ) {
                    updateData(prevData => {
                        return { consoleLogs: [...prevData.consoleLogs, {type: "error", content: [`SyntaxError: ${event.data.content[0].message}`]}] }
                    })
                }
                else if(event.data.content[0] instanceof URIError ) {
                    updateData(prevData => {
                        return { consoleLogs: [...prevData.consoleLogs, {type: "error", content: [`URIError: ${event.data.content[0].message}`]}] }
                    })
                }else {
                    updateData(prevData => {
                        return { consoleLogs: [...prevData.consoleLogs, event.data] }
                    })
                }
               
                setTimeout(() => {setLoadingButton(false)}, 1000);
            } else {
                setTimeout(() => {
                    updateData(prevData => {
                        if (event.data.passedAllTests) {
                            setPassesAllTests(true)
                            onOpen()
                            return { problemPassesAllTests: true, currentProblem: { ...prevData.currentProblem, testCases: event.data.testCases } }
                        } else {
                            setPassesAllTests(false)
                            onOpen()
                            return { currentProblem: { ...prevData.currentProblem, testCases: event.data.testCases } }
                        }
                    })

                    setLoadingButton(false)
                }, 1000);
            }



        }
        return () => {
            workerRef.current?.terminate()
        }
    }, [])

    const handleWork = async () => {
        setLoadingButton(true)
        const fun = editorRef?.current?.getValue();
        const payload = { fun, currentProblem: data.currentProblem }
        workerRef.current?.postMessage(payload)
    }

    return (
        <div className="border border-default-300 dark:border-default-100 overflow-hidden rounded-lg">
            <div className="flex items-center sticky top-0 left-0 px-4 z-10 justify-between h-8 bg-code-background w-full bg-default-100 dark:bg-default-50"><div className="flex items-center gap-2 basis-1/3"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div><div className="flex basis-1/3 h-full justify-center items-center"></div><div className="flex basis-1/3"></div></div>
            <TabCodeEditorComponent isClipBoardClicked={isClipBoardClicked} setFullScreen={setFullScreen} copyCode={copyCode} resetCode={resetCode} prettifyCode={() => prettifyCode()} onTabChange={(val) => console.log(val)} />
            <Editor
                className="px-0 pt-5 bg-white dark:bg-black"
                height="calc(100% - 80px)"
                defaultLanguage={"javascript"}
                // defaultValue={startedCode}
                value={startedCode.current !== null ? startedCode.current : "aa"}
                beforeMount={handleEditorWillMount}
                onMount={handleEditorDidMount}
                theme={data.isDarkTheme ? "darkTheme" : "lightTheme"}
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
            {loadingButton ? (
                <Button isLoading variant="bordered" color="primary" aria-label="Take a photo" size="md" radius="sm" className="relative bottom-[4rem] left-[calc(100%-9rem)] border border-cyan-400 text-cyan-400 bg-[white] dark:bg-[rgb(0,0,0)]" onClick={handleWork}>
                    Run code
                </Button>
            ) : (
                <Button variant="bordered" color="primary" aria-label="Take a photo" size="md" radius="sm" className="relative bottom-[4rem] left-[calc(100%-9rem)] border border-cyan-400 text-cyan-400 bg-[white] dark:bg-[black]" onClick={handleWork}>
                    <PlayIcon /> Run code
                </Button>
            )}
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                hideCloseButton={true}
                placement="top"
                backdrop="transparent"
                size="sm"
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeIn",
                            },
                        },
                    }
                }}
            >
                {passesAllTests ? (
                    <ModalContent className="bg-[white] dark:bg-[black] border border-default-300 dark:border-default-100 shadow-[0px_0px_8px_0px_rgba(34,197,94,0.5)]">
                        {(onClose) => (
                            <>
                                <ModalBody className="items-center p-6">
                                    <CheckedIcon size="4rem" />
                                    <p className="text-xl text-center">
                                        Well done!<br />Your code passes all tests
                                    </p>
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>)
                    :
                    (<ModalContent className="bg-[white] dark:bg-[black] border border-default-300 dark:border-default-100 shadow-[0px_0px_8px_0px_rgba(243,18,97,0.5)]">
                        {(onClose) => (
                            <>
                                <ModalBody className="items-center p-6">
                                    <ErrorIcon size="4rem" />
                                    <p className="text-xl text-center">
                                        Hoops!<br />Your code fail at last one of the tests
                                    </p>
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>)}
            </Modal>
        </div>
    )
}


function ConsoleComponent() {
    const { data, updateData } = React.useContext(DataContext);

    const logComponent = (content) => {
        return (
            <div className="border-b border-default-300 dark:border-default-100 m-0 pb-4 pt-2 px-4 text-xs font-normal">
                {content.map(logContent => {
                    if (typeof logContent !== "string") {
                        return <SyntaxHighlighter showLineNumbers={false} language="javascript" style={data.isDarkTheme ? darkTheme : lightTheme}>
                            {beautify(JSON.stringify(logContent.message), { indent_size: 3, space_in_empty_paren: true })}
                        </SyntaxHighlighter>
                    }
                    return <p className="inline">{logContent} </p>
                })}
            </div>
        )
    }

    const warnComponent = (content) => {
        return (
            <div className="flex align-middle mx-2 m-0 my-2 py-2 px-4 text-xs font-normal bg-[rgba(250,204,21,0.6)] dark:bg-[rgba(250,204,21,0.2)] rounded-md text-[rgba(136,119,33,0.9)] dark:text-[rgba(253,224,71,0.9)]">
                <Warning />
                {content.map(logContent => {
                    if (typeof logContent !== "string") {
                        return <SyntaxHighlighter showLineNumbers={false} language="javascript" style={data.isDarkTheme ? darkTheme : lightTheme}>
                            {beautify(JSON.stringify(logContent.message), { indent_size: 3, space_in_empty_paren: true })}
                        </SyntaxHighlighter>
                    }
                    return <p className="inline m-0 ml-2">{logContent} </p>
                })
                }
            </div>
        )
    }

    const errorComponent = (content) => {
        return (
            <div className="flex align-middle mx-2 m-0 my-2 py-2 px-4 text-xs font-normal bg-[rgba(239,68,68,0.6)] dark:bg-[rgba(239,68,68,0.2)] rounded-md text-[rgba(185,28,28,1)] dark:text-[rgba(252,165,165,1)]">
                <ErrorConsole />
                {content.map(logContent => {
                    if (typeof logContent !== "string") {
                        return <SyntaxHighlighter showLineNumbers={false} language="javascript" style={data.isDarkTheme ? darkTheme : lightTheme}>
                            {beautify(JSON.stringify(logContent), { indent_size: 3, space_in_empty_paren: true })}
                        </SyntaxHighlighter>
                    }
                    return <p className="inline m-0 ml-2">{logContent} </p>
                })
                }
            </div>
        )
    }

    return (
        <div className="border border-default-300 dark:border-default-100 overflow-hidden rounded-lg bg-gradient-to-br from-white to-default-0 dark:from-black dark:to-default-50 overflow-scroll">
            <div className="flex items-center sticky top-0 left-0 px-4 z-10 justify-between h-8 bg-code-background w-full bg-default-100 dark:bg-default-50"><div className="flex items-center gap-2 basis-1/3"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div><div className="flex basis-1/3 h-full justify-center items-center"></div><div className="flex basis-1/3"></div>Console</div>
            {data.consoleLogs.map(log => {
                if (log.type === "log") {
                    return logComponent(log.content)
                } else if (log.type === "warn") {
                    return warnComponent(log.content)
                } else if (log.type === "error") {
                    return errorComponent(log.content)
                }
            })}
        </div>
    )
}