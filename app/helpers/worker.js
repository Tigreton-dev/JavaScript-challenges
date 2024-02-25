let dynamicFunction = null;

// Definir una función que se ejecutará en el Worker
async function ejecutarFuncion(event) {
    try {
        const data = event.data;
        const stringFunction = data.fun;
        const problemData = data.currentProblem;
        const testCases = problemData.testCases;
        const result = await bucleAsincrono(problemData, testCases, stringFunction);
        console.log('<----- ALL TEST ENDS ----->');
        self.postMessage(result);
    } catch (err) {
        console.error(err);
    }
}

async function bucleAsincrono(problemData, testCases, stringFunction) {
    let passedAllTests = true;
    let i = 1;
    for (const testCase in testCases) {
        console.log(`<----- TEST CASE ${i} ----->`);
        i++;
        const test = testCases[testCase];
        let { test_input, test_expected, code_output, passed_test } = test;
        const functionName = problemData.refName;
        const parametters = obtenerParametrosPorNombre(stringFunction, functionName);
        const dynamicFunction = eval(
            `(function wrapperFunction(${parametters}) { ${stringFunction} return ${functionName}(${parametters}) })`
        );
        code_output = dynamicFunction(...test_input);
        passed_test = JSON.stringify(code_output) === JSON.stringify(test_expected);
        if (!passed_test) passedAllTests = false;
        testCases[testCase] = { test_input, test_expected, code_output, passed_test };
    }

    return { passedAllTests, testCases };
}

function obtenerParametrosPorNombre(codigo, nombreFuncion) {
    // Crear una expresión regular para encontrar la función por nombre
    const regex = new RegExp(`\\b${nombreFuncion}\\s*\\((.*?)\\)\\s*\\{`);

    // Encontrar la coincidencia en el código
    const match = codigo.match(regex);

    // Si se encuentra la función, obtener los parámetros
    if (match) {
        const parametros = match[1].split(',').map(param => param.trim());
        return parametros;
    } else {
        // La función no fue encontrada
        return null;
    }
}

function logsCapture() {
    const captureLogs = event => self.postMessage(event);
    const originalConsoleLog = console.log;
    console.log = (...args) => {
        captureLogs({ type: 'log', content: args });
        originalConsoleLog.apply(console, args);
    };
}

function warnCapture() {
    const captureWarn = event => self.postMessage(event);
    const originalConsoleWarn = console.warn;
    console.warn = (...args) => {
        captureWarn({ type: 'warn', content: args });
        originalConsoleWarn.apply(console, args);
    };
}

function errorCapture() {
    const captureError = event => self.postMessage(event);
    const originalConsoleError = console.error;
    console.error = (...args) => {
        captureError({ type: 'error', content: args });
        originalConsoleError.apply(console, args);
    };
}

// Manejar el mensaje del hilo principal
self.onmessage = function (event) {
    // Verificar si el mensaje es un string

    ejecutarFuncion(event);
};

logsCapture();
warnCapture();
errorCapture();
