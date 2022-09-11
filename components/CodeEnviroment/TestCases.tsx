import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import CancelIcon from '@mui/icons-material/Cancel'
import Button from '@mui/material/Button'

import { lightTheme, darkTheme } from "../../helpers/CodeEditorTheme";
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';
import beautify from 'js-beautify';

const TestCases = () => {
	const { data } = React.useContext(DataContext) as DataContextType;
	const currentProblem = data.currentProblem;
	const currentTheme = data.currentTheme;
	const editorTheme = currentTheme.isDarkTheme ?
		darkTheme(currentTheme.secondary) : lightTheme(currentTheme.secondary);

	return (
		<div
			style={{
				padding: '20px',
				height: 'calc(100vh - 180px)',
				overflow: 'scroll',
			}}
		>
			{Object.entries(currentProblem.testCases).map(([key, value], i) => {
				const { test_input, test_expected, code_output, passed_test } = value;
				const data4 = beautify(JSON.stringify(test_input), { indent_size: 2, space_in_empty_paren: true })
				const boxShadow = passed_test
					? '0px 0px 10px -1px green'
					: '0px 0px 10px -1px rgb(223, 3, 3)'
				const msg = passed_test ? 'Passed Correcly' : 'Fail'
				const icon = passed_test ? (
					<CheckCircleIcon fontSize="large" color="success" />
				) : (
					<CancelIcon fontSize="large" color="error" />
				)
				return (
					<Accordion style={{ boxShadow: boxShadow, backgroundColor: currentTheme.primary }} key={key}>
						<AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: currentTheme.color }} />}>
							<Button size="large" startIcon={icon} sx={{ boxShadow: "none" }}>
								{`Test ${i} ${msg}`}
							</Button>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant="h6">Input data:</Typography>
							<CodeMirror
								value={data4}
								className="codeMirror_testCases"
								height={'100%'}
								editable={false}
								theme={editorTheme}
								style={{
									borderRadius: "5px",
									marginBottom: "15px",
									padding: "10px",
									boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
									overflow: "scroll",
									backgroundColor: currentTheme.secondary,
								}}
								extensions={[javascript({ jsx: true })]}
								basicSetup={{
									lineNumbers: false,
									highlightActiveLineGutter: false,
									highlightSpecialChars: false,
									highlightActiveLine: false,
								}}
							/>
							<Typography variant="h6">Expected Output:</Typography>
							<CodeMirror
								value={JSON.stringify(test_expected)}
								className="codeMirror_testCases"
								height={'100%'}
								editable={false}
								theme={editorTheme}
								style={{
									borderRadius: "5px",
									marginBottom: "15px",
									padding: "10px",
									boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
									overflow: "scroll",
									backgroundColor: currentTheme.secondary,
								}}
								extensions={[javascript({ jsx: true })]}
								basicSetup={{
									lineNumbers: false,
									highlightActiveLineGutter: false,
									highlightSpecialChars: false,
									highlightActiveLine: false,
								}}
							/>
							<Typography variant="h6">Code Output:</Typography>
							<CodeMirror
								value={JSON.stringify(code_output)}
								className="codeMirror_testCases"
								height={'100%'}
								editable={false}
								theme={editorTheme}
								style={{
									borderRadius: "5px",
									marginBottom: "15px",
									padding: "10px",
									boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
									overflow: "scroll",
									backgroundColor: currentTheme.secondary,
								}}
								extensions={[javascript({ jsx: true })]}
								basicSetup={{
									lineNumbers: false,
									highlightActiveLineGutter: false,
									highlightSpecialChars: false,
									highlightActiveLine: false,
								}}
							/>
						</AccordionDetails>
					</Accordion>
				)
			})}
		</div>
	)
}

export default TestCases;
