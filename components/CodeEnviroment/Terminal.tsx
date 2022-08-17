import * as React from 'react'
import beautify from 'js-beautify';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';


import { lightTheme, darkTheme } from "../../helpers/CodeEditorTheme";
import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

const Terminal = () => {
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const examples = data.currentProblem.examples;
    const currentTheme = data.currentTheme;
    const [values, setValues] = React.useState([])
    let placeholder = [1, 2, 3]
    const editorTheme = currentTheme.isDarkTheme ? darkTheme(currentTheme.secondary) : lightTheme(currentTheme.secondary);



    if (console.everything === undefined) {
        console.everything = [];

        console.defaultLog = console.log.bind(console);
        console.log = function () {
            console.everything.push({ "type": "log", "datetime": Date().toLocaleString(), "value": Array.from(arguments) });
            console.defaultLog.apply(console, arguments);
        }
        console.defaultError = console.error.bind(console);
        console.error = function () {
            console.everything.push({ "type": "error", "datetime": Date().toLocaleString(), "value": Array.from(arguments) });
            console.defaultError.apply(console, arguments);
        }
        console.defaultWarn = console.warn.bind(console);
        console.warn = function () {
            console.everything.push({ "type": "warn", "datetime": Date().toLocaleString(), "value": Array.from(arguments) });
            console.defaultWarn.apply(console, arguments);
        }
        console.defaultDebug = console.debug.bind(console);
        console.debug = function () {
            console.everything.push({ "type": "debug", "datetime": Date().toLocaleString(), "value": Array.from(arguments) });
            console.defaultDebug.apply(console, arguments);
        }
    }

    React.useEffect(() => {
        setValues(console.everything)
    }, [console.everything])

    const a = {
        a: "sdsd",
        b: 23,
        c: [1, 2, 3]
    }

    React.useEffect(() => {
        if (data.deleteLogs) {
            console.everything = [];
            setValues([])
            updateData({ deleteLogs: false })
        }

    }, [data.deleteLogs]);


    return (
        <div id="tree" style={{
            height: 'calc(100vh - 150px)',
            overflow: 'scroll',
            textAlign: "initial",
            fontWeight: "500",
            position: "relative"
        }}>
            {values.map((val) => {
                let color = currentTheme.color;
                if (val.type === "error") color = "#f54545";
                if (val.type === "warn") color = "orange";
                return val.value.map((e, index) => {
                    if (typeof e === "string") {
                        return <p key={index} style={{ margin: "0px", padding: "5px 20px", color: color, borderBottom: `1px solid ${currentTheme.color}15` }}>{e}</p>
                    } else {
                        return <CodeMirror
                            key={index}
                            style={{ borderBottom: `1px solid ${currentTheme.color}15` }}
                            value={beautify(JSON.stringify(e), { indent_size: 2, space_in_empty_paren: true })}
                            className="codeMirror_editor"
                            editable={false}
                            height={"auto"}
                            theme={editorTheme}
                            extensions={[javascript({ jsx: true })]}
                            basicSetup={{
                                lineNumbers: false,
                                highlightActiveLineGutter: false,
                                highlightSpecialChars: false,
                                highlightActiveLine: false,
                            }}
                        />
                    }
                })

            }
            )}
        </div>
    )
}

export default Terminal;