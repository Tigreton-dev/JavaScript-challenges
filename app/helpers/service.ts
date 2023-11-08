// Crear un nuevo Web Worker
const worker = new Worker("./worker.js");

// Definir una función para manejar el mensaje del Worker
worker.onmessage = function (event) {
    // El valor retornado por el Worker estará en event.data
    console.log("Valor retornado por el Worker:", event.data);
};

export function executeWorker() {
    console.log("LLEGA")
    // Enviar un string al Worker
    const mensaje = "Hola desde el hilo principal";
    worker.postMessage(mensaje);
}
