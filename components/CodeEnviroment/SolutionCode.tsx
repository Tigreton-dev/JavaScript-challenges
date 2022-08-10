import * as React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import beautify from 'js-beautify';

import { lightTheme, darkTheme } from "../../helpers/CodeEditorTheme";
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

const SolutionCode = () => {
	const { data } = React.useContext(DataContext) as DataContextType;
	const currentProblem = data.currentProblem
	const fontSize = data.fontSize;
	const [codeValue, setCodeValue] = React.useState('')
	const currentLanguage = data.currentLanguage
	const currentTheme = data.currentTheme;
	const editorTheme = currentTheme.isDarkTheme ? darkTheme(currentTheme.secondary) : lightTheme(currentTheme.secondary);

	React.useEffect(() => {
		setCodeValue(currentProblem.solutionCode[currentLanguage][0])
	}, [currentProblem.solutionCode[currentLanguage]])

	return (
		<div style={{ margin: '10px', textAlign: 'initial', fontSize: fontSize }}>
			<CodeMirror
				theme={editorTheme}
				value={beautify(codeValue, { indent_size: 3, space_in_empty_paren: true })}
				className="codeMirror_editor"
				height="calc(100vh - 155px)"
				editable={false}
				basicSetup={{
					highlightActiveLineGutter: false,
					highlightSpecialChars: false,
					highlightActiveLine: false,
				}}
				extensions={[javascript({ jsx: true })]}
				onChange={(value, viewUpdate) => { }}
			/>
		</div>
	)
}

export default SolutionCode
