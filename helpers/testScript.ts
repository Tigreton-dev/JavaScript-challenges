/* eslint-disable no-console */
// @ts-nocheck

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
    const problem: any = structuredClone(currentProblem);
    const testCases = problem.testCases;
    const functionName = problem.refName;
    let solutionCorrect = true;

    for (let testCase in testCases) {
        if (isError) return { problem, solutionCorrect: false };
        console.log('---------- Test Case ' + testCase + ' ----------');
        const istestAFunction = testCases[testCase].functionTest;
        const isTreeStructure = testCases[testCase].isTreeStructure;
        if (istestAFunction) {
            createTestScript(testCases[testCase].test_input);
            // @ts-ignore
            testCases[testCase].code_output = window.test_input();
        } else if (isTreeStructure) {
            const parameters = structuredClone(testCases[testCase].test_input);
            const index = testCases[testCase].test_input.findIndex((elem: any) => elem!.nodes !== undefined);
            const tree = buildBinaryTree(testCases[testCase].test_input[index]);
            parameters[index] = tree;
            if (window[functionName] !== undefined) {
                // @ts-ignore
                console.log(parameters);
                 // @ts-ignore
                testCases[testCase].code_output = window[functionName](...parameters);
                console.log(testCases[testCase].code_output)
                console.log(JSON.stringify(testCases[testCase].code_output));
            } else {
                console.error(`TypeError: window.${functionName} is undefined`);
            }
        } else {
            const parameters = structuredClone(testCases[testCase].test_input);
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

/**
 *
 * @param treeObj
 * @returns
 */
function buildBinaryTree(treeObj: object) {
    const nodesMap = new Map();
    // Create tree nodes
    treeObj.nodes.forEach(node => {
        nodesMap.set(node.id, {
            id: node.id,
            left: null,
            right: null,
            value: node.value
        });
    });

    // Connect tree nodes
    treeObj.nodes.forEach(node => {
        const currNode = nodesMap.get(node.id);
        currNode.left = node.left ? nodesMap.get(node.left) : null;
        currNode.right = node.right ? nodesMap.get(node.right) : null;
    });

    // Return root node
    return nodesMap.get(treeObj.root);
}

// Example usage:
const treeObj = {
    nodes: [
        { id: '10', left: '5', right: '15', value: 10 },
        { id: '15', left: '13', right: '22', value: 15 },
        { id: '22', left: null, right: null, value: 22 },
        { id: '13', left: null, right: '14', value: 13 },
        { id: '14', left: null, right: null, value: 14 },
        { id: '5', left: '2', right: '5-2', value: 5 },
        { id: '5-2', left: null, right: null, value: 5 },
        { id: '2', left: '1', right: null, value: 2 },
        { id: '1', left: null, right: null, value: 1 }
    ],
    root: '10'
};
