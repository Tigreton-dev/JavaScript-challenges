// Definir una función que se ejecutará en el Worker
function ejecutarFuncion(event) {
    // Procesar el string y enviar una respuesta al hilo principal
    const mensajeRecibido = event.data;
    const respuesta = `¡Hola desde el Worker! Recibí este mensaje: ${mensajeRecibido}`;
    self.postMessage(respuesta);
}

// Manejar el mensaje del hilo principal
self.onmessage = function (event) {
    // Verificar si el mensaje es un string

    ejecutarFuncion(event);
};
