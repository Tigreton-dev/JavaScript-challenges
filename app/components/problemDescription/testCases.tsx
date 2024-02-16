import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { CheckIcon, ErrorIcon } from "../../helpers/Icons"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darkTheme, lightTheme } from "../../helpers/themesHighlighter"
import { DataContext } from '../../context/dataContext';
import beautify from 'js-beautify';

export default function TestCases() {
	const { data } = React.useContext(DataContext);
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