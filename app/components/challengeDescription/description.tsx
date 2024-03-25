import React, {useContext} from "react";
import { Chip } from "@nextui-org/react";
import { CheckedIcon, ErrorIcon, RoundedErrorIcon } from "../../helpers/Icons"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darkTheme, lightTheme } from "../../helpers/themesHighlighter"
import parse from 'html-react-parser';
import { MackOsTitleBar } from "../../helpers";
import beautify from 'js-beautify';
import AccordionComponent from "./accordionComponent";
import { DataContext } from '../../context/dataContext';

export default function Description({currentChallenge}) {

	const {data} = useContext(DataContext)
	const isDarkTheme = data.isDarkTheme;

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
				{typeof currentChallenge.submittedCode === "string" ? <CheckedIcon size={"2rem"} /> : <RoundedErrorIcon size={"2.3rem"} />}
				<h1 className="text-4xl p-4 dark:text-neutral-300 font-light">{currentChallenge.title}</h1>
			</header>
			<Chip color={ChipColor(currentChallenge.tags[0])} variant="bordered" className="mr-2" classNames={{ base: "border", content: "font-extralight" }}>{currentChallenge.tags[0]}</Chip>
			<Chip color="primary" variant="bordered" classNames={{ base: "border border-cyan-400", content: "text-cyan-400 font-extralight" }}>{currentChallenge.tags[1]}</Chip>
			<div className="dark:text-neutral-400 font-extralight">
				{parse(currentChallenge.description)}
				<h3>Example</h3>
			</div>
			<div className="border border-default-300 dark:border-default-100 overflow-hidden mb-4 rounded-lg text-sm">
				<MackOsTitleBar />
				<SyntaxHighlighter showLineNumbers={false} language="javascript" style={data.isDarkTheme ? darkTheme : lightTheme}>
					{beautify(currentChallenge.examples.example1.input, { indent_size: 3, space_in_empty_paren: true })}
				</SyntaxHighlighter>
			</div>
			<div className="border border-default-300 dark:border-default-100 overflow-hidden rounded-lg text-sm">
				<MackOsTitleBar />
				<SyntaxHighlighter showLineNumbers={false} language="javascript" style={data.isDarkTheme ? darkTheme : lightTheme}>
					{beautify(currentChallenge.examples.example1.output, { indent_size: 3, space_in_empty_paren: true })}
				</SyntaxHighlighter>
			</div>
			<section>
				<h3>Hints</h3>
				<AccordionComponent hints={currentChallenge.hints} />
			</section>
		</div>
	)
}