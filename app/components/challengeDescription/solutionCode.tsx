import React, { useEffect, useState, useRef } from "react";
import { Button } from "@nextui-org/react";
import { CopyIcon, CopiedTick } from "../../helpers/Icons"
import Editor, { useMonaco, loader } from '@monaco-editor/react';
import { monacoDarkTheme, monacoLightTheme } from './monacoThemes';
import { DataContext } from '../../context/dataContext';
import beautify from 'js-beautify';

export default function SolutionCode({currentChallenge}) {
	const { data } = React.useContext(DataContext);
    const { tabSize, fontSize, highlights, isDarkTheme } = data;
	const solutionCode = currentChallenge.solutionCode.javaScript;
	const currentSolutionCode = beautify(currentChallenge.solutionCode.javaScript[0], { indent_size: tabSize, space_in_empty_paren: true });
	const editorRef = useRef(null)
	const [currentSolution, setCurrentSolution] = useState(currentSolutionCode)
	const [isClipBoardClicked, setIsClipBoardClicked] = useState(false)
    const monaco = useMonaco();
    const monacoEditor = useRef(null);

    const handleEditorWillMount = (monaco: any) => {
        monacoEditor.current = monaco;
        const darkTheme = monacoDarkTheme();
        const lightTheme = monacoLightTheme();
        monaco.editor.defineTheme('lightTheme', lightTheme);
        monaco.editor.defineTheme('darkTheme', darkTheme);
        monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    };

    const handleEditorDidMount = (editor: any, monaco: any) => {
        editorRef.current = editor;
        prettifyCode();
    };

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

	const changeSolution = (i: number) => {
		const newSolution = solutionCode[i]
		setCurrentSolution(newSolution)
	}

	return (
		<>
			<Editor
				className="px-0 pt-5 bg-white dark:bg-black"
				height="calc(100% - 3rem)"
				defaultLanguage="javascript"
				value={currentSolution}
				beforeMount={handleEditorWillMount}
				onMount={handleEditorDidMount}
				theme={isDarkTheme ? "darkTheme" : "lightTheme"}
				// onChange={(value: string | undefined) => onChange(value)}
				options={{
					minimap: { enabled: false },
					scrollbar: { vertical: 'hidden', horizontal: 'hidden' },
					fontSize: fontSize,
					codeLens: false,
					readOnly: true,
					inlineSuggest: { enabled: false },
				}}
			/>
			<Button onClick={copyCode} isIconOnly variant="bordered" aria-label="Take a photo" size="sm" radius="sm" className="absolute top-[0.5rem] right-[20px] z-50 border border-default-300 dark:border-default-100">
				{isClipBoardClicked ? <CopiedTick /> : <CopyIcon />}
			</Button>
			<div className="ml-16 absolute bottom-0">
				{solutionCode.map((solution: string, i: number) => {
					return (
						<Button key={i} onClick={() => changeSolution(i)} variant="solid" aria-label="Take a photo" size="md" radius="sm" className="relative mr-2 bottom-4 z-10">
							Solution {i + 1}
						</Button>
					)
				})}
			</div>
		</>
	)
}