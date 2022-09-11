import * as React from 'react';
import { DataContextType, IData } from './@types.data';

export const DataContext = React.createContext<DataContextType | null>(null);

const defaultState: IData = {
    beautifyCode: false,
    deleteLogs: false,
    isSolutionCorrect: false,
    currentProblem: {},
    problemsList: [],
    currentLanguage: "javaScript",
    displayBadge: false,
    runCode: false,
    codeValue: "",
    resultCode: "",
    isFullScreen: false,
    isFullEditor: false,
    displaySettings: false,
    displayProblems: false,
    displayCodeResultModal: false,
    SyntaxHighlighting: true,
    testData: {},
    resetCode: false,
    isDarkTheme: true,
    fontSize: "18px",
    currentTheme: {
        primary: "#ffff",
        secondary: "#f8fcff",
        tertiary: "#f5f5f5",
        color: "#6d6e6d",
        button_color: "#255461",
        secondary_color: "#028ebd",
        invertLogo: 0,
        isDarkTheme: false,
        borderShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    },
    darkTheme: {
        tertiary: "#001E26",
        secondary: "#012A35",
        primary: "#003543",
        button_color: "#255461",
        color: "#999999",
        secondary_color: "#028ebd",
        invertLogo: 1,
        isDarkTheme: true,
        borderShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    },
    lightTheme: {
        primary: "#ffff",
        secondary: "#f8fcff",
        tertiary: "#f5f5f5",
        color: "#6d6e6d",
        secondary_color: "#028ebd",
        button_color: "#255461",
        invertLogo: 0,
        isDarkTheme: false,
        borderShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    }
}

interface Props {
    children: React.ReactNode;
}


const DataProvider2: React.FC<Props> = ({ children }) => {
    const [data, setData] = React.useState<IData>(defaultState);

    function updateData(payload: object) {
        setData(data => {
            return {
                ...data,
                ...payload,
            }
        })
    }

    return <DataContext.Provider value={{ data, updateData }}>{children}</DataContext.Provider>;
};

export default DataProvider2;