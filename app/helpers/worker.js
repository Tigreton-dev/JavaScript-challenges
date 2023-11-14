let dynamicFunction = null;

// Definir una función que se ejecutará en el Worker
async function ejecutarFuncion(event) {
    try {
        const data = event.data;
        const stringFunction = '(' + data.fun + ')';
        const testCases = data.testCases;
        dynamicFunction = eval(stringFunction);
        // dynamicFunction(...testCases.Test_1.test_input);
        // const stringFunction = '(function(a, b) { return a + b; })';
        const result = await bucleAsincrono(testCases);
        console.log("ALL TEST ENDS");
        self.postMessage(result);
    } catch (err) {
        console.log(err);
    }
}

async function bucleAsincrono(testCases) {
    let passedAllTests = true;
    for (const testCase in testCases) {
        const test = testCases[testCase];
        let { test_input, test_expected, code_output, passed_test } = test;
        code_output = dynamicFunction(...test_input);
        passed_test = code_output === test_expected;
        if (!passed_test) passedAllTests = false;
        testCases[testCase] = { test_input, test_expected, code_output, passed_test };
        console.log(`Iteración completada`);
    }

    return {passedAllTests, testCases}
}

// Manejar el mensaje del hilo principal
self.onmessage = function (event) {
    // Verificar si el mensaje es un string

    ejecutarFuncion(event);
};
