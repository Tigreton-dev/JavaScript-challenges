import * as React from 'react';
import { DataContextType, IData } from './@types.data';
import { IcurrentProblem } from './@types.data'

export const DataContext = React.createContext<DataContextType | null>(null);
const defaultProblem:IcurrentProblem = {
    refName: "uniqueChar",
    refNumber: 3,
    category: "String",
    difficulty: "Easy",
    title: "Unique Char",
    tags: [
      "Easy",
      "String"
    ],
    description: "<p>Given a string, determine if the string has all unique characters.</p><p>What if you cannot use additional data structures?</p>",
    examples: {
      example1: {
        input: "'abcd'",
        output: "true"
      },
      example2: {
        input: "'aabcd'",
        output: "false"
      }
    },
    hints: {
      hint_1: "...",
      hint_2: "...",
      hint_3: "...",
      Optimal_Space__Time_Complexity: "..."
    },
    startedCode: {
      javaScript: "function uniqueChar(str) {\n    // Write your solution...\n    return true;\n"
    },
    solutionCode: {
      javaScript: [
        "// Solution 1\nfunction uniqueChar(str) {\n    const list = new Set();\n    for (const letter of str) {\n        if (!list.has(letter)) {\n            list.add(letter);\n        } else {\n            return false\n        }\n    }\n    return true;\n}\n/*\n * IMPORTANT: you cannot use additional data structures!\n * \n * SOLUTION: Compare every character of the string to every other character of \n * the string. This will take 0( n^2) time and 0(1) space.\n */\n/*\n * If we are allowed to modify the input string, we could sort the string in \n * O(n log(n)) time and then linearly check the string for neighboring characters \n * that are identical. Careful, though: many sorting algorithms take up extra space.\n */\nfunction uniqueChar(str) {\n    for (const letter of str) {\n        if (str.indexOf(letter) !== str.lastIndexOf(letter)) {\n            return false;\n        }\n    }\n    return true;\n"
      ]
    },
    submittedCode: {
      javaScript: ""
    },
    testCases: {
      Test_1: {
        test_input: [
          "abcd"
        ],
        test_expected: true,
        code_output: null,
        passed_test: false
      },
      Test_2: {
        test_input: [
          "table"
        ],
        test_expected: true,
        code_output: null,
        passed_test: false
      },
      Test_3: {
        test_input: [
          "superman"
        ],
        test_expected: true,
        code_output: null,
        passed_test: false
      },
      Test_4: {
        test_input: [
          "aaaa"
        ],
        test_expected: false,
        code_output: null,
        passed_test: false
      },
      Test_5: {
        test_input: [
          "supermarket"
        ],
        test_expected: false,
        code_output: null,
        passed_test: false
      },
      Test_6: {
        test_input: [
          "fgjeW_fug"
        ],
        test_expected: false,
        code_output: null,
        passed_test: false
      }
    }
  }

const defaultState: IData = {
    beautifyCode: false,
    deleteLogs: false,
    isSolutionCorrect: false,
    currentProblem: defaultProblem,
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