/* eslint-disable no-console */

/**
 * Create a function with solution problem
 * @param codeValue
 */
const createScript = (codeValue: string) => {
    const scriptElement = document.getElementById('debugScript');
    if (scriptElement !== null) document.body.removeChild(scriptElement);
    const js = codeValue;
    const oScript = document.createElement('script');
    const oScriptText = document.createTextNode(js);
    oScript.id = 'debugScript';
    oScript.appendChild(oScriptText);
    document.body.appendChild(oScript);
};

/**
 * Create new function to create a binary Tree
 * @param value
 */
const createTestScript = (value: string) => {
    const scriptElement = document.getElementById('testScript');
    if (scriptElement !== null) document.body.removeChild(scriptElement);
    const oScript = document.createElement('script');
    const oScriptText = document.createTextNode(value);
    oScript.id = 'testScript';
    oScript.appendChild(oScriptText);
    document.body.appendChild(oScript);
};

/**
 * Run solution against Test suite for current problem.
 * @param currentProblem
 * @param codeValue
 * @returns
 */
export function run_tests(currentProblem: object, codeValue: string) {
    let isError = false;
    window.onerror = e => {
        console.error(e);
        isError = true;
    };
    createScript(codeValue);
    const problem = JSON.parse(JSON.stringify(currentProblem));
    const testCases = problem.testCases;
    const functionName = problem.refName;
    let solutionCorrect = true;

    for (let testCase in testCases) {
        if (isError) return { problem, solutionCorrect: false };
        console.log('---------- Test Case ' + testCase + ' ----------');
        const istestAFunction = testCases[testCase].functionTest;
        if (istestAFunction) {
            createTestScript(testCases[testCase].test_input);
            // @ts-ignore
            testCases[testCase].code_output = window.test_input();
        } else {
            const parameters = JSON.parse(JSON.stringify(testCases[testCase].test_input));
            try {
                // @ts-ignore
                if (window[functionName] !== undefined) {
                    // @ts-ignore
                    testCases[testCase].code_output = window[functionName](...parameters);
                    console.log(JSON.stringify(testCases[testCase].code_output));
                } else {
                    console.error(`TypeError: window.${functionName} is undefined`);
                }
            } catch (err: any) {
                console.error(`${err.name}: ${err.message}`);
            }
        }

        const testExpected = JSON.stringify(testCases[testCase].test_expected);
        const codeOutput = JSON.stringify(problem.testCases[testCase].code_output);
        const passedTest = testExpected === codeOutput;
        if (!passedTest) solutionCorrect = false;
        testCases[testCase].passed_test = passedTest;
    }

    if (solutionCorrect) localStorage.setItem(problem.refName, codeValue);

    return { problem, solutionCorrect };
}
