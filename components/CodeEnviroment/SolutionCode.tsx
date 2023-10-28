import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
// @ts-ignore
import beautify from 'js-beautify';

import { lightTheme, darkTheme } from '../../helpers/CodeEditorTheme';
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';
import { Button } from '@mui/material';

const SolutionCode = () => {
    const { data } = React.useContext(DataContext) as DataContextType;
    const currentProblem: any = data.currentProblem;
    const fontSize = data.fontSize;
    const [codeValue, setCodeValue] = React.useState('');
    const currentLanguage = data.currentLanguage;
    const currentTheme = data.currentTheme;
    const editorTheme = currentTheme.isDarkTheme
        ? darkTheme(currentTheme.secondary)
        : lightTheme(currentTheme.secondary);

    React.useEffect(() => {
        setCodeValue(currentProblem.solutionCode[currentLanguage][0]);
    }, [currentProblem.solutionCode[currentLanguage]]);

    const clickHandler = (value: number) => {
        setCodeValue(currentProblem.solutionCode[currentLanguage][value]);
    };

    return (
        <div style={{ margin: '10px', textAlign: 'initial', fontSize: fontSize }}>
            {currentProblem.solutionCode[currentLanguage].map((solution: any, i: number) => (
                <Button style={{ margin: '5px' }} onClick={() => clickHandler(i)} key={i}>
                    Solution{i + 1}
                </Button>
            ))}
            <CodeMirror
                theme={editorTheme}
                value={beautify(codeValue, { indent_size: 3, space_in_empty_paren: true })}
                className="codeMirror_editor"
                height="calc(100vh - 9.6rem - 45px)"
                editable={false}
                basicSetup={{
                    highlightActiveLineGutter: false,
                    highlightSpecialChars: false,
                    highlightActiveLine: false
                }}
                extensions={[javascript({ jsx: true })]}
            />
        </div>
    );
};

export default SolutionCode;
