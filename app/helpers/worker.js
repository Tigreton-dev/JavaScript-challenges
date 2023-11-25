let dynamicFunction = null;

// Definir una función que se ejecutará en el Worker
async function ejecutarFuncion(event) {
    try {
        const data = event.data;
        const stringFunction = data.fun;
        const problemData = data.currentProblem;
        const testCases = problemData.testCases;
        const result = await bucleAsincrono(problemData, testCases, stringFunction);
        console.log('ALL TEST ENDS');
        self.postMessage(result);
    } catch (err) {
        console.log(err);
    }
}

async function bucleAsincrono(problemData, testCases, stringFunction) {
    let passedAllTests = true;
    for (const testCase in testCases) {
        const test = testCases[testCase];
        let { test_input, test_expected, code_output, passed_test } = test;
        const functionName = problemData.refName;
        const parametters = obtenerParametrosPorNombre(stringFunction, functionName)
        const dynamicFunction = eval(
            `(function wrapperFunction(${parametters}) { ${stringFunction} return ${functionName}(${parametters}) })`
        );
        code_output = dynamicFunction(...test_input);
        passed_test = code_output === test_expected;
        if (!passed_test) passedAllTests = false;
        testCases[testCase] = { test_input, test_expected, code_output, passed_test };
        console.log(`Iteración completada`);
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

// Manejar el mensaje del hilo principal
self.onmessage = function (event) {
    // Verificar si el mensaje es un string

    ejecutarFuncion(event);
};
