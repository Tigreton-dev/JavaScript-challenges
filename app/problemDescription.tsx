import React, { useEffect, useState } from "react";
import TabComponent from "../app/tabs"
import { Button, Chip, Accordion, AccordionItem } from "@nextui-org/react";
import { CheckedIcon, CheckIcon, ErrorIcon } from "./helpers/Icons"
import Highlight from 'react-highlight';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { monacoDarkTheme } from "./monacoThemes";
import parse from 'html-react-parser';
import { MackOsTitleBar } from "./helpers";
import { DataContext } from './context/dataContext';
import beautify from 'js-beautify';

export default function ProblemDescription() {
	const [index, setIndex] = useState<number>(0);

	return (
		<div className="border border-default-200 dark:border-default-100 overflow-hidden rounded-lg bg-gradient-to-br from-white to-default-0 dark:from-black dark:to-default-50">
			<MackOsTitleBar />
			<div className="overflow-scroll h-[100%] pb-12">
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
		if (tagName === 'Medium') color = 'orange';
		if (tagName === 'Hard') color = 'red';
		if (tagName === 'Extreme Hard') color = 'black';
		return color;
	};

	return (
		<div className="px-4">
			<header className="flex items-center">
				<CheckedIcon />
				<h1 className="text-4xl p-4 text-neutral-300">{currentProblem.title}</h1>
			</header>
			<Chip color={ChipColor(currentProblem.tags[0])} variant="bordered" className="mr-2">{currentProblem.tags[0]}</Chip>
			<Chip color="primary" variant="bordered">{currentProblem.tags[1]}</Chip>
			<div className="text-neutral-400">
				{parse(currentProblem.description)}
				<h3>Example</h3>
			</div>
			<div className="border border-default-200 dark:border-default-100 overflow-hidden mb-4 rounded-lg text-sm">
				<MackOsTitleBar />
				<Highlight language="javascript">{beautify(currentProblem.examples.example1.input, { indent_size: 3, space_in_empty_paren: true })}</Highlight>
			</div>
			<div className="border border-default-200 dark:border-default-100 overflow-hidden rounded-lg text-sm">
				<MackOsTitleBar />
				<Highlight language="javascript">{beautify(currentProblem.examples.example1.output, { indent_size: 3, space_in_empty_paren: true })}</Highlight>
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

	function handleEditorWillMount(monaco: any) {
		// here is the monaco instance
		// do something before editor is mounted
		const theme = monacoDarkTheme()
		monaco.editor.defineTheme('my-theme', theme);
		monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
	}

	function handleEditorDidMount(editor: any, monaco: any) {
		// editorRef.current = editor;
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
				theme="my-theme"
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
				const icon = passed_test ? <CheckIcon /> : <ErrorIcon />;
				const color = passed_test ? "#4fd71e8f" : "#ff11009b";
				return (
					<AccordionItem startContent={icon} key={i} aria-label={`Test ${i + 1}`} title={`Test ${i + 1}`}>
						<p className="m-0 mb-2">Input</p>
						<div className={`shadow-sm shadow-[${color}] border border-default-200 dark:border-default-100 overflow-hidden mb-4 rounded-lg text-md`}>
							<Highlight language="javascript">{test_input}</Highlight>
						</div>
						<p className="m-0 mb-2">Expected output</p>
						<div className={`shadow-sm shadow-[${color}] border border-default-200 dark:border-default-100 overflow-hidden mb-4 rounded-lg text-md`}>
							<Highlight language="javascript">{test_expected}</Highlight>
						</div>
						<p className="m-0 mb-2">Your output</p>
						<div className={`shadow-sm shadow-[${color}] border border-default-200 dark:border-default-100 overflow-hidden mb-4 rounded-lg text-sm`}>
							<Highlight language="javascript">{code_output}</Highlight>
						</div>
					</AccordionItem>
				)
			})}
		</Accordion>
	);
}
