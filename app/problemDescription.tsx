import React, { useEffect, useState, useRef } from "react";
import TabComponent from "../app/tabs"
import { Button, Chip, Accordion, AccordionItem } from "@nextui-org/react";
import { CheckedIcon, CheckIcon, ErrorIcon, CopyIcon } from "./helpers/Icons"
import Highlight from 'react-highlight';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { darkTheme, lightTheme } from "./themesHighlighter"
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { monacoDarkTheme } from "./monacoThemes";
import parse from 'html-react-parser';
import { MackOsTitleBar } from "./helpers";
import { DataContext } from './context/dataContext';
import beautify from 'js-beautify';

export default function ProblemDescription() {
	const [index, setIndex] = useState<number>(0);

	return (
		<div className="border border-default-300 dark:border-default-100 overflow-hidden rounded-lg">
			<MackOsTitleBar />
			<div className="overflow-scroll h-[100%] pb-12 relative">
				<TabComponent onTabChange={(i: number) => setIndex(i)} />
				{index === 0 && <Description />}
				{index === 1 && <SolutionCode />}
				{index === 2 && <TestCases />}
			</div>
		</div>
	);
}

function Description() {
	const { data, updateData } = React.useContext(DataContext);
	const currentProblem = data.currentProblem;

	const ChipColor = (tagName: string) => {
		let color = '#1976d2';
		if (tagName === 'Easy') color = 'success';
		if (tagName === 'Medium') color = 'warning';
		if (tagName === 'Hard') color = 'danger';
		if (tagName === 'Extreme Hard') color = 'default';
		return color;
	};

	return (
		<div className="px-4">
			<header className="flex items-center">
				<CheckedIcon size={"2rem"} />
				<h1 className="text-4xl p-4 dark:text-neutral-300 font-light">{currentProblem.title}</h1>
			</header>
			<Chip color={ChipColor(currentProblem.tags[0])} variant="bordered" className="mr-2" classNames={{ base: "border", content: "font-extralight" }}>{currentProblem.tags[0]}</Chip>
			<Chip color="primary" variant="bordered" classNames={{ base: "border border-cyan-400", content: "text-cyan-400 font-extralight" }}>{currentProblem.tags[1]}</Chip>
			<div className="dark:text-neutral-400 font-extralight">
				{parse(currentProblem.description)}
				<h3>Example</h3>
			</div>
			<div className="border border-default-300 dark:border-default-100 overflow-hidden mb-4 rounded-lg text-sm">
				<MackOsTitleBar />
				<SyntaxHighlighter showLineNumbers={false} language="javascript" style={data.isDarkTheme ? darkTheme : lightTheme}>
					{beautify(currentProblem.examples.example1.input, { indent_size: 3, space_in_empty_paren: true })}
				</SyntaxHighlighter>
			</div>
			<div className="border border-default-300 dark:border-default-100 overflow-hidden rounded-lg text-sm">
				<MackOsTitleBar />
				<SyntaxHighlighter showLineNumbers={false} language="javascript" style={data.isDarkTheme ? darkTheme : lightTheme}>
					{beautify(currentProblem.examples.example1.output, { indent_size: 3, space_in_empty_paren: true })}
				</SyntaxHighlighter>
			</div>
			<section>
				<h3>Hints</h3>
				<AccordionComponent hints={currentProblem.hints} />
			</section>
		</div>
	)
}

function AccordionComponent({ hints }) {
	const defaultContent =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

	return (
		<Accordion variant="splitted" selectionMode="multiple" className="px-0">
			<AccordionItem key="1" aria-label="Hint 1" title="Hint 1">
				{hints.hint_1}
			</AccordionItem>
			<AccordionItem key="2" aria-label="Hint 2" title="Hint 2">
				{hints.hint_2}
			</AccordionItem>
			<AccordionItem key="3" aria-label="Hint 3" title="Hint 3">
				{hints.hint_3}
			</AccordionItem>
			<AccordionItem key="4" aria-label="Optimal Space & Time Complexity" title="Optimal Space & Time Complexity">
				{defaultContent}
			</AccordionItem>
			<AccordionItem key="5" aria-label="Data Structure info" title="Data Structure info">
				{defaultContent}
			</AccordionItem>
			<AccordionItem key="6" aria-label="Algorithm Patterns info" title="Algorithm Patterns info">
				{defaultContent}
			</AccordionItem>
		</Accordion>
	);
}

function SolutionCode() {
	const { data, updateData } = React.useContext(DataContext);
	const solutionCode = data.currentProblem.solutionCode.javaScript;
	const monaco = useMonaco();
	const editorRef = useRef(null)

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

	const clickHandler = async () => {
		const getCodeValue = editorRef?.current?.getValue();
        try {
            await navigator.clipboard.writeText(getCodeValue);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
	}

	return (
		<>
			<Editor
				className="px-0"
				height="calc(100% - 65px)"
				defaultLanguage="javascript"
				defaultValue={solutionCode[0]}
				// value={codeSolutionOnStorage !== null && isSumittedPage ? codeSolutionOnStorage : code.current}
				beforeMount={handleEditorWillMount}
				onMount={handleEditorDidMount}
				theme={data.isDarkTheme ? "darkTheme" : "lightTheme"}
				// onChange={(value: string | undefined) => onChange(value)}
				options={{
					minimap: { enabled: false },
					scrollbar: { vertical: 'hidden' },
					fontSize: 14,
					codeLens: false,
					readOnly: true,
					inlineSuggest: { enabled: false },
				}}
			/>
			<Button onClick={clickHandler} isIconOnly variant="bordered" aria-label="Take a photo" size="sm" radius="sm" className="absolute top-[0.5rem] right-[20px] z-50 border border-default-300 dark:border-default-100">
				<CopyIcon />
			</Button>
			<Button variant="solid" aria-label="Take a photo" size="md" radius="sm" className="absolute bottom-16 left-16">
				Solution 1
			</Button>
		</>
	)
}

function TestCases() {
	const { data, updateData } = React.useContext(DataContext);
	const testCases = data.currentProblem.testCases

	return (
		<Accordion selectionMode="multiple" className="p-8">
			{Object.entries(testCases).map(([key, value], i) => {
				const { test_input, test_expected, code_output, passed_test } = value;
				const icon = passed_test ? <CheckIcon /> : <ErrorIcon size="2rem" />;
				const color = passed_test ? "#4fd71e8f" : "#ff11009b";
				return (
					<AccordionItem startContent={icon} key={i} aria-label={`Test ${i + 1}`} title={`Test ${i + 1}`}>
						<p className="m-0 mb-2">Input</p>
						<div className={`shadow-sm shadow-[${color}] border border-default-300 dark:border-default-100 overflow-hidden mb-4 rounded-lg text-sm`}>
							{test_input.map(e => {
								return (
									<SyntaxHighlighter showLineNumbers={false} language="javascript" style={data.isDarkTheme ? darkTheme : lightTheme}>
										{beautify(JSON.stringify(e), { indent_size: 3, space_in_empty_paren: true })}
									</SyntaxHighlighter>
								)
							})}
						</div>
						<p className="m-0 mb-2">Expected output</p>
						<div className={`shadow-sm shadow-[${color}] border border-default-300 dark:border-default-100 overflow-hidden mb-4 rounded-lg text-sm`}>
							<SyntaxHighlighter showLineNumbers={false} language="javascript" style={data.isDarkTheme ? darkTheme : lightTheme}>
								{JSON.stringify(test_expected)}
							</SyntaxHighlighter>
						</div>
						<p className="m-0 mb-2">Your output</p>
						<div className={`shadow-sm shadow-[${color}] border border-default-300 dark:border-default-100 overflow-hidden mb-4 rounded-lg text-sm`}>
							<SyntaxHighlighter showLineNumbers={false} language="javascript" style={data.isDarkTheme ? darkTheme : lightTheme}>
								{JSON.stringify(code_output)}
							</SyntaxHighlighter>
						</div>
					</AccordionItem>
				)
			})}
		</Accordion >
	);
}
