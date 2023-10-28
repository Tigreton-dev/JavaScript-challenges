export interface IcurrentProblem {
    refNumber: number;
    refName: string;
    category: string;
    difficulty: string;
    title: string;
    tags: [string, string];
    description: string;
    examples: {
        example1: {
            input: string;
            output: string;
        };
        example2: {
            input: string;
            output: string;
        };
    };
    hints: {
        hint_1: string;
        hint_2: string;
        hint_3: string;
        Optimal_Space__Time_Complexity: string;
    };
    startedCode: {
        javaScript: string;
    };
    solutionCode: {
        javaScript: [string];
    };
    submittedCode: {
        javaScript: string;
    };
    testCases: object;
    platform?: string;
}

export interface IData {
    beautifyCode: boolean;
    deleteLogs: boolean;
    isSolutionCorrect: boolean;
    currentProblem: IcurrentProblem;
    problemsList: Array<String>;
    currentChallengeList: Array<IcurrentProblem>;
    currentLanguage: string;
    displayBadge: boolean;
    runCode: boolean;
    codeValue: string;
    resultCode: string;
    isFullScreen: boolean;
    isFullEditor: boolean;
    displaySettings: boolean;
    displayProblems: boolean;
    displayCodeResultModal: boolean;
    SyntaxHighlighting: boolean;
    testData: object;
    resetCode: boolean;
    isDarkTheme: boolean;
    fontSize: number;
    displayDataStructureInfo: boolean;
    dataStructureInfoSelected: string;
    currentTheme: {
        primary: string;
        secondary: string;
        tertiary: string;
        color: string;
        button_color: string;
        secondary_color: string;
        invertLogo: number;
        isDarkTheme: boolean;
        borderShadow: string;
    };
    darkTheme: {
        tertiary: string;
        secondary: string;
        primary: string;
        button_color: string;
        color: string;
        secondary_color: string;
        invertLogo: number;
        isDarkTheme: boolean;
        borderShadow: string;
    };
    lightTheme: {
        primary: string;
        secondary: string;
        tertiary: string;
        color: string;
        secondary_color: string;
        button_color: string;
        invertLogo: number;
        isDarkTheme: boolean;
        borderShadow: string;
    };
}

export type DataContextType = {
    data: IData;
    updateData: (payload: object) => void;
};
