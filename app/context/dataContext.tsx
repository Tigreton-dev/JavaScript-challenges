"use client";
import * as React from 'react';

interface DefaultStateType {
    currentProblem: Record<string, any>;
    currentProblemList: Record<string, any>;
    fontSize: number;
    isFullScreen: boolean;
    passesAllTests: boolean;
    appSize: number;
    isDarkTheme: boolean;
    consoleLogs: string[];
    consoleWarns: string[];
}

export interface DataContextType {
    data: DefaultStateType;
    updateData: (payload: object) => void;
};

const defaultState: DefaultStateType = {
    currentProblem: {},
    currentProblemList: {},
    fontSize: 14,
    tabSize: 3,
    highlights: true,
    isFullScreen: false,
    passesAllTests: null,
    appSize: 16,
    isDarkTheme: true,
    consoleLogs: [],
    consoleWarns: []
};

interface Props {
    children: React.ReactNode;
}

export const DataContext = React.createContext<DataContextType | null>(null);

const DataProvider: React.FC<Props> = ({ children }) => {
    const [data, setData] = React.useState(defaultState);

    function updateData(payload: object) {
        setData(data => {
            const newState = typeof payload === 'function' ? payload(data) : payload;
            return {
                ...data,
                ...newState
            };
        });
    }

    return <DataContext.Provider value={{ data, updateData }}>{children}</DataContext.Provider>;
};

export default DataProvider;
