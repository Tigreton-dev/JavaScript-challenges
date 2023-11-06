"use client"
import React, { useEffect } from "react";
import NavBar from "../app/NavBar"
import Split from 'react-split'
import { Button } from "@nextui-org/react";
import TabComponent from "../app/tabs"
import ProblemDescription from "./problemDescription";
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { monacoDarkTheme } from "./monacoThemes"
import TabCodeEditorComponent from "../app/tabsCodeEditor"
import { AddIcon, PlayIcon } from "../app/Icons"

export default function Home() {
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
				const elemento = document.getElementsByClassName(value);
				elemento[0].style.backgroundColor = "transparent"
			});
			const elemento = document.getElementsByClassName("ddd")[0];
			elemento.style.backgroundColor = "#141414"

			const elemento2 = document.getElementsByClassName("margin")[0];
			console.log(elemento2)
			elemento2.style.backgroundColor = "transparent"
			// const elemento = document.getElementsByClassName('monaco-mouse-cursor-text');
			// elemento[0].style.backgroundColor = "transparent"
		}, 300);
	}

	return (
		<main className="">
			<NavBar />
			<Split
				className="split"
				sizes={[45, 55]}
				minSize={100}
				expandToMin={false}
				gutterSize={10}
				gutterAlign="center"
				snapOffset={30}
				dragInterval={1}
				direction="horizontal"
				cursor="col-resize"
			>
				<ProblemDescription />
				<div className="">
					<Split
						className="splitHorizontal"
						sizes={[95, 5]}
						minSize={32}
						expandToMin={false}
						gutterSize={10}
						gutterAlign="center"
						snapOffset={30}
						dragInterval={1}
						direction="vertical"
					>
						<div className="border border-default-200 dark:border-default-100 overflow-hidden rounded-lg bg-gradient-to-br from-white to-default-0 dark:from-black dark:to-default-500">
							<div className="flex items-center sticky top-0 left-0 px-4 z-10 justify-between h-8 bg-code-background w-full bg-default-100 dark:bg-default-50"><div className="flex items-center gap-2 basis-1/3"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div><div className="flex basis-1/3 h-full justify-center items-center"></div><div className="flex basis-1/3"></div></div>
							<TabCodeEditorComponent />
							<Editor
								className="px-0 bg-gradient-to-br from-white to-default-0 dark:from-black dark:to-default-50 ddd"
								height="calc(100% - 65px)"
								defaultLanguage="javascript"
								defaultValue="// some comment"
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
									readOnly: false,
									inlineSuggest: { enabled: false },
								}}
							/>
							<Button variant="solid" color="primary" aria-label="Take a photo" size="md" radius="sm" className="relative bottom-[6rem] left-[calc(100%-9rem)]">
								<PlayIcon /> Run code
							</Button>
						</div>
						<div className="border border-default-200 dark:border-default-100 overflow-hidden rounded-lg bg-gradient-to-br from-white to-default-0 dark:from-black dark:to-default-50">
							<div className="flex items-center sticky top-0 left-0 px-4 z-10 justify-between h-8 bg-code-background w-full bg-default-100 dark:bg-default-50"><div className="flex items-center gap-2 basis-1/3"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div><div className="flex basis-1/3 h-full justify-center items-center"></div><div className="flex basis-1/3"></div>Console</div>

						</div>
					</Split>
				</div>
			</Split>
		</main>
	);
}
