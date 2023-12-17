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
import DataStructureModal from "./dataStructureModal"
import AlgorithmsModel from "./AlgorithmsModel"

export default function ProblemDescription() {
	const [index, setIndex] = useState<number>(0);

	return (
		<div className="border border-default-300 dark:border-default-100 overflow-hidden rounded-lg">
			<MackOsTitleBar />
			<div className="overflow-scroll h-[calc(100%-2rem)] relative">
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
	const [currentDataStructure, setDataStructure] = useState("");
	const [currentAlgorithm, setAlgorithm] = useState("");
	const defaultContent =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

	const onDataStructureClicked = (type) => {
		setDataStructure(type)
	}

	const onAlgorithmClicked = (type) => {
		setAlgorithm(type)
	}

	return (
		<div>
			<DataStructureModal currentDataStructure={currentDataStructure} />
			<AlgorithmsModel currentAlgorithm={currentAlgorithm} />
			<Accordion variant="splitted" selectionMode="multiple" className="px-0 mb-2">
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
					<Button onClick={() => onDataStructureClicked('BigONotation')}>BigONotation</Button>
					<Button onClick={() => onDataStructureClicked('ComplexityAnalysis')}>ComplexityAnalysis</Button>
					<Button onClick={() => onDataStructureClicked('Array')}>Array</Button>
					<Button onClick={() => onDataStructureClicked('LinkedList')}>LinkedList</Button>
					<Button onClick={() => onDataStructureClicked('Queue')}>Queue</Button>
					<Button onClick={() => onDataStructureClicked('Stack')}>Stack</Button>
					<Button onClick={() => onDataStructureClicked('HashTable')}>HashTable</Button>
					<Button onClick={() => onDataStructureClicked('Graphs')}>Graphs</Button>
					<Button onClick={() => onDataStructureClicked('Tree')}>Tree</Button>
					<Button onClick={() => onDataStructureClicked('BinarySearch')}>BinarySearch</Button>
				</AccordionItem>
				<AccordionItem key="6" aria-label="Algorithm Patterns info" title="Algorithm Patterns info">
					<Button onClick={() => onAlgorithmClicked('SlidingWindow')}>Sliding Window</Button>
					<Button onClick={() => onAlgorithmClicked('TwoPointers')}>Two Pointers</Button>
					<Button onClick={() => onAlgorithmClicked('FastSlowPointers')}>Fast and Slow pointers</Button>
					<Button onClick={() => onAlgorithmClicked('MergeIntervals')}>Merge Intervals</Button>
					<Button onClick={() => onAlgorithmClicked('CyclicSort')}>Cyclic sort</Button>
					<Button onClick={() => onAlgorithmClicked('InPlaceReversalOfLinkedList')}>In-place reversal of linked list</Button>
					<Button onClick={() => onAlgorithmClicked('BFS')}>Tree BFS</Button>
					<Button onClick={() => onAlgorithmClicked('DFS')}>Tree DFS</Button>
					<Button onClick={() => onAlgorithmClicked('TwoHeaps')}>Two heaps</Button>
					<Button onClick={() => onAlgorithmClicked('Subsets')}>Subsets</Button>
					<Button onClick={() => onAlgorithmClicked('ModifiedBinarySearch')}>Modified binary search</Button>
					<Button onClick={() => onAlgorithmClicked('TopKElements')}>Top K elements</Button>
					<Button onClick={() => onAlgorithmClicked('KwayMerge')}>K-way Merge</Button>
					<Button onClick={() => onAlgorithmClicked('TopologicalSort')}>Topological sort</Button>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

function SolutionCode() {
	const { data, updateData } = React.useContext(DataContext);
	const solutionCode = data.currentProblem.solutionCode.javaScript;
	const monaco = useMonaco();
	const editorRef = useRef(null)
	const [currentSolution, setCurrentSolution] = useState(solutionCode[0])

	useEffect(() => {
		setCurrentSolution(solutionCode[0])
	}, [solutionCode])

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
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	}

	const changeSolution = (i) => {
		const newSolution = solutionCode[i]
		console.log(newSolution)
		setCurrentSolution(newSolution)
	}

	return (
		<>
			<Editor
				className="px-0"
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
					fontSize: 14,
					codeLens: false,
					readOnly: true,
					inlineSuggest: { enabled: false },
				}}
			/>
			<Button onClick={onDataStructureClicked} isIconOnly variant="bordered" aria-label="Take a photo" size="sm" radius="sm" className="absolute top-[0.5rem] right-[20px] z-50 border border-default-300 dark:border-default-100">
				<CopyIcon />
			</Button>
			<div className="ml-16 absolute bottom-0">
				{solutionCode.map((solution, i) => {
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
