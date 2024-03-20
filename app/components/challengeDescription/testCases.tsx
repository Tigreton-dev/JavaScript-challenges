import React, { useState } from 'react';
import { Accordion, AccordionItem, Chip, Button } from '@nextui-org/react';
import {
    CheckIcon,
    ErrorIcon,
    RoundedErrorIcon,
    Warning,
    PlayIcon,
    CheckedIcon,
    CopiedTick
} from '../../helpers/Icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darkTheme, lightTheme } from '../../helpers/themesHighlighter';
import { DataContext } from '../../context/dataContext';
import beautify from 'js-beautify';
import { useSearchParams } from 'next/navigation';
import { decode } from 'js-base64';
import { useSession } from 'next-auth/react';
import TickAnimation from './tickAnimation';

export default function TestCases({ challengeId }) {
    const { data } = React.useContext(DataContext);
    const testCases = data.testCases;
    const passesAllTests = data.passesAllTests;
    const [loadingButton, setLoadingButton] = useState(false);
    const [isCodeSubmitted, setIsCodeSubmitted] = useState(false);
    const searchParams = useSearchParams();
    const { data: session, status } = useSession();

    const submitCode = async () => {
        setLoadingButton(() => true);
        const getParam = searchParams.get('code');
        const decodedCode = decode(getParam);
        const response = await fetch(`../../api/submittingCode/`, {
            method: 'POST',
            headers: {
                challenge_id: challengeId,
                submitted_code: decodedCode.replace(/\r\n|\r|\n/g, '\\n'),
                user_id: session.user.id
            }
        });
        setLoadingButton(() => false);
        setIsCodeSubmitted(true);
    };

    return (
        <>
            <header className="flex items-center pl-4">
                {passesAllTests ? <CheckedIcon size="2rem" /> : <RoundedErrorIcon size="2.3rem" />}
                {passesAllTests ? (
                    <h1 className="text-4xl p-4 dark:text-neutral-300 font-light">All Tests passed</h1>
                ) : (
                    <h1 className="text-4xl p-4 dark:text-neutral-300 font-light">Tests failed</h1>
                )}

                {passesAllTests && status === 'authenticated' && (
                    <Button
                        isLoading={loadingButton ? true : false}
                        variant="bordered"
                        color="primary"
                        aria-label="Take a photo"
                        size="md"
                        radius="sm"
                        className="absolute right-4 border-none text-[white] dark:text-neutral-300 bg-[#12a150]"
                        onClick={() => submitCode()}
                    >
                        {!loadingButton && !isCodeSubmitted && <PlayIcon />}
                        {isCodeSubmitted && !loadingButton && <CopiedTick />}
                        Submit code
                    </Button>
                )}
            </header>

            {!passesAllTests && (
                <Chip
                    variant="faded"
                    color="success"
                    className="ml-4 text-red-700 bg-white dark:bg-black border border-red-700 font-extralight text-xs"
                >
                    At last one test fail.
                </Chip>
            )}

            <Accordion selectionMode="multiple" isCompact className="p-8 pt-0 mt-4">
                {Object.entries(testCases).map(([key, value], i) => {
                    const { test_input, test_expected, code_output, passed_test } = value;
                    const icon = passed_test ? <CheckIcon size="1.5rem" /> : <ErrorIcon size="1.5rem" />;
                    const color = passed_test ? '#4fd71e8f' : '#ff11009b';
                    return (
                        <AccordionItem
                            key={i}
                            startContent={icon}
                            key={i}
                            aria-label={`Test ${i + 1}`}
                            title={`Test #${i + 1}`}
                            className=" m-0 p-0 font-medium"
                        >
                            <p className="m-0 mb-2">Input</p>
                            <div
                                className={`shadow-sm shadow-[${color}] border border-default-300 dark:border-default-100 overflow-hidden mb-4 rounded-lg text-sm`}
                            >
                                {test_input.map((e, index) => {
                                    return (
                                        <SyntaxHighlighter
                                            key={index}
                                            showLineNumbers={false}
                                            language="javascript"
                                            style={data.isDarkTheme ? darkTheme : lightTheme}
                                        >
                                            {beautify(JSON.stringify(e), {
                                                indent_size: 3,
                                                space_in_empty_paren: true
                                            })}
                                        </SyntaxHighlighter>
                                    );
                                })}
                            </div>
                            <p className="m-0 mb-2">Expected output</p>
                            <div
                                className={`shadow-sm shadow-[${color}] border border-default-300 dark:border-default-100 overflow-hidden mb-4 rounded-lg text-sm`}
                            >
                                <SyntaxHighlighter
                                    showLineNumbers={false}
                                    language="javascript"
                                    style={data.isDarkTheme ? darkTheme : lightTheme}
                                >
                                    {JSON.stringify(test_expected)}
                                </SyntaxHighlighter>
                            </div>
                            <p className="m-0 mb-2">Your output</p>
                            <div
                                className={`shadow-sm shadow-[${color}] border border-default-300 dark:border-default-100 overflow-hidden mb-4 rounded-lg text-sm`}
                            >
                                <SyntaxHighlighter
                                    showLineNumbers={false}
                                    language="javascript"
                                    style={data.isDarkTheme ? darkTheme : lightTheme}
                                >
                                    {JSON.stringify(code_output)}
                                </SyntaxHighlighter>
                            </div>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </>
    );
}
