import React, { useEffect, useState, useRef } from "react";
import { Button } from "@nextui-org/react";
import { CopyIcon, CopiedTick } from "../../helpers/Icons"
import Editor from '@monaco-editor/react';
import { monacoDarkTheme } from "../codeEditor/monacoThemes";
import { DataContext } from '../../context/dataContext';
import beautify from 'js-beautify';

export default function SolutionCode() {
	const { data } = React.useContext(DataContext);
	const tabSize = data.tabSize;
	const fontSize = data.fontSize;
	const solutionCode = data.currentProblem.solutionCode.javaScript;
	const currentSolutionCode = beautify(data.currentProblem.solutionCode.javaScript[0], { indent_size: tabSize, space_in_empty_paren: true });
	const editorRef = useRef(null)
	const [currentSolution, setCurrentSolution] = useState(currentSolutionCode)
	const [isClipBoardClicked, setIsClipBoardClicked] = useState(false)

	useEffect(() => {
		setCurrentSolution(currentSolutionCode)
	}, [solutionCode])

	useEffect(()=> {
		prettifyCode()
    }, [tabSize, fontSize])

	const prettifyCode = () => {
        if (editorRef.current !== null) editorRef.current.getModel().updateOptions({ tabSize: tabSize, indentSize: tabSize })
        const getCodeValue = editorRef?.current?.getValue()
        const prettifyCode = beautify(getCodeValue, { indent_size: tabSize, space_in_empty_paren: true })
        editorRef?.current?.setValue(prettifyCode)
    }

	function handleEditorWillMount(monaco: any) {
		// here is the monaco instance
		// do something before editor is mounted
		const theme = monacoDarkTheme()
		monaco.editor.defineTheme('my-theme', theme);
		monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
	}

	function handleEditorDidMount(editor: any, monaco: any) {
		editorRef.current = editor;
	}

	const onDataStructureClicked = async () => {
		const getCodeValue = editorRef?.current?.getValue();
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

	const changeSolution = (i: number) => {
		const newSolution = solutionCode[i]
		setCurrentSolution(newSolution)
	}

	return (
		<>
			<Editor
				className="px-0 pt-5"
				height="calc(100% - 3rem)"
				defaultLanguage="javascript"
				defaultValue={currentSolution}
				value={currentSolution}
				// value={codeSolutionOnStorage !== null && isSumittedPage ? codeSolutionOnStorage : code.current}
				beforeMount={handleEditorWillMount}
				onMount={handleEditorDidMount}
				theme={data.isDarkTheme ? "darkTheme" : "lightTheme"}
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
			<Button onClick={onDataStructureClicked} isIconOnly variant="bordered" aria-label="Take a photo" size="sm" radius="sm" className="absolute top-[0.5rem] right-[20px] z-50 border border-default-300 dark:border-default-100">
				{isClipBoardClicked ? <CopiedTick /> : <CopyIcon />}
			</Button>
			<div className="ml-16 absolute bottom-0">
				{solutionCode.map((solution: string, i: number) => {
					return (
						<Button onClick={() => changeSolution(i)} variant="solid" aria-label="Take a photo" size="md" radius="sm" className="relative mr-2 bottom-4 z-10">
							Solution {i + 1}
						</Button>
					)
				})}
			</div>
		</>
	)
}