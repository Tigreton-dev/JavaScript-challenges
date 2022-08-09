import * as React from 'react';
import Box from '@mui/material/Box';
import { javascript, esLint } from '@codemirror/lang-javascript';
import { json } from "@codemirror/lang-json"
import CodeMirror from '@uiw/react-codemirror';
import { linter, lintGutter } from "@codemirror/lint";
import Linter from "eslint4b-prebuilt";

import { lightTheme, darkTheme } from "../../helpers/CodeEditorTheme";

import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';
import challengeModal from "../../helpers/challengeModel.json";
import ReactJson from 'react-json-view'

export default function NewChallengeForm() {
    const { data } = React.useContext(DataContext) as DataContextType;
    const currentTheme = data.currentTheme;
    const editorTheme = currentTheme.isDarkTheme ?
        darkTheme(currentTheme.secondary) : lightTheme(currentTheme.secondary);
    const fontSize = data.fontSize;


    return (
        <Box  style={{margin: '10px', textAlign: 'initial', fontSize: fontSize, overflow:"scroll" }}>
            <ReactJson src={challengeModal} style={{height: "calc(100vh - 155px)"}} />
        </Box>
    );
}