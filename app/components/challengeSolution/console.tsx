import React, { useContext } from 'react';
import { DataContext } from '../../context/dataContext';
import { Button } from '@nextui-org/react';
import { BinIcon } from '../../helpers/Icons';

export default function Console() {
    const { data, updateData } = useContext(DataContext);
    const consoleLogs = data.consoleLogs;

    const removeLogs = () => {
        updateData({ consoleLogs: [] });
    };

    const logComponent = (content, i) => {
        return (
            <div
                key={i}
                className="border-b border-default-300 dark:border-default-100 m-0 pb-4 pt-2 px-4 text-xs font-normal"
            >
                {content.map((logContent, index) => {
                    if (Array.isArray(logContent)) {
                        return (
                            <SyntaxHighlighter
                                key={index}
                                showLineNumbers={false}
                                language="javascript"
                                style={data.isDarkTheme ? darkTheme : lightTheme}
                            >
                                {beautify(JSON.stringify(logContent), { indent_size: 3, space_in_empty_paren: true })}
                            </SyntaxHighlighter>
                        );
                    } else if (typeof logContent === 'object') {
                        return (
                            <SyntaxHighlighter
                                key={index}
                                showLineNumbers={false}
                                language="javascript"
                                style={data.isDarkTheme ? darkTheme : lightTheme}
                            >
                                {beautify(JSON.stringify(logContent), { indent_size: 3, space_in_empty_paren: true })}
                            </SyntaxHighlighter>
                        );
                    } else if (typeof logContent === 'number' || typeof logContent === 'boolean') {
                        return (
                            <p key={index} className="inline text-green-400">
                                {logContent.toString()}{' '}
                            </p>
                        );
                    } else 
                        return (
                            <p key={index} className="inline">
                                {logContent}{' '}
                            </p>
                        );
                })}
            </div>
        );
    };

    const warnComponent = content => {
        return (
            <div className="flex align-middle mx-2 m-0 my-2 py-2 px-4 text-xs font-normal bg-[rgba(250,204,21,0.6)] dark:bg-[rgba(250,204,21,0.2)] rounded-md text-[rgba(136,119,33,0.9)] dark:text-[rgba(253,224,71,0.9)]">
       
                {content.map((logContent,i) => {
                    if (Array.isArray(logContent)) {
                        return (
                            <SyntaxHighlighter
                                key={i}
                                showLineNumbers={false}
                                language="javascript"
                                style={data.isDarkTheme ? darkTheme : lightTheme}
                            >
                                {beautify(JSON.stringify(logContent), { indent_size: 3, space_in_empty_paren: true })}
                            </SyntaxHighlighter>
                        );
                    } else if (typeof logContent === 'object') {
                        return (
                            <SyntaxHighlighter
                            key={i}
                                showLineNumbers={false}
                                language="javascript"
                                style={data.isDarkTheme ? darkTheme : lightTheme}
                            >
                                {beautify(JSON.stringify(logContent), { indent_size: 3, space_in_empty_paren: true })}
                            </SyntaxHighlighter>
                        );
                    } else if (typeof logContent === 'number' || typeof logContent === 'boolean') {
                        return <p key={i} className="inline text-green-400">{logContent.toString()} </p>;
                    } else if (typeof logContent === 'string') return <p key={i} className="inline">{logContent} </p>;
                })}
            </div>
        );
    };

    const errorComponent = content => {
        return (
            <div
                key={content[0]}
                className="flex align-middle mx-2 m-0 my-2 py-2 px-4 text-xs font-normal bg-[rgba(239,68,68,0.6)] dark:bg-[rgba(239,68,68,0.2)] rounded-md text-[rgba(185,28,28,1)] dark:text-[rgba(252,165,165,1)]"
            >
   
                {content.map((logContent,i) => {
                    if (Array.isArray(logContent)) {
                        return (
                            <SyntaxHighlighter
                            key={i}
                                showLineNumbers={false}
                                language="javascript"
                                style={data.isDarkTheme ? darkTheme : lightTheme}
                            >
                                {beautify(JSON.stringify(logContent), { indent_size: 3, space_in_empty_paren: true })}
                            </SyntaxHighlighter>
                        );
                    } else if (typeof logContent === 'object') {
                        return (
                            <SyntaxHighlighter
                            key={i}
                                showLineNumbers={false}
                                language="javascript"
                                style={data.isDarkTheme ? darkTheme : lightTheme}
                            >
                                {beautify(JSON.stringify(logContent), { indent_size: 3, space_in_empty_paren: true })}
                            </SyntaxHighlighter>
                        );
                    } else if (typeof logContent === 'number' || typeof logContent === 'boolean') {
                        return <p key={i} className="inline text-green-400">{logContent.toString()} </p>;
                    } else if (typeof logContent === 'string') return <p key={i} className="inline">{logContent} </p>;
                })}
            </div>
        );
    };

    return (
        <>
            <div className="flex flex-col border-t border-default-300 dark:border-default-100 overflow-scroll h-[calc(100%-2rem)]">
            <Button
                isIconOnly
                variant="bordered"
                aria-label="Take a photo"
                size="sm"
                radius="sm"
                className="min-w-[2rem] min-h-[2rem] relative m-2 border border-default-300 dark:border-default-100 left-[calc(100%-50px)] bg-white dark:bg-black"
                onClick={() => removeLogs()}
            >
                <BinIcon />
            </Button>
                {consoleLogs.map((log, i) => {
                    if (log.type === 'log') {
                        return logComponent(log.content, i);
                    } else if (log.type === 'warn') {
                        return warnComponent(log.content);
                    } else if (log.type === 'error') {
                        return errorComponent(log.content);
                    }
                })}
            </div>
        </>
    );
}
