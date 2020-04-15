const container = document.getElementById("container");

function setUp() {
    createInfoBox();

}

function createInfoBox() {
    //creating the box
    const infoBox = document.createElement('div');
    infoBox.id = 'infoBox-id';
    container.appendChild(infoBox);

    //creating the title of the box
    const titleBox = document.createElement('h1');
    titleBox.classList.add('titleBox');
    titleBox.innerHTML = 'Usage Guide';
    infoBox.appendChild(titleBox);

    //creating the description
    const description = document.createElement('p');
    description.classList.add('box-description');
    description.innerHTML = 'descripcion del proyecto...   También es una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, un texto es un entramado de signos con una intención comunicativa que adquiere sentido en determinado contexto.También es una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, un texto es un entramado de signos con una intención comunicativa que adquiere sentido en determinado contexto.También es una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, un texto es un entramado de signos con una intención comunicativa que adquiere sentido en determinado contexto.También es una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, un texto es un entramado de signos con una intención comunicativa que adquiere sentido en determinado contexto.';
    infoBox.appendChild(description);

    //creating the button
    const boxButton = document.createElement('button');
    boxButton.classList.add('box-button');
    boxButton.innerHTML = 'Got it!';
    boxButton.addEventListener('click', function () {
        console.log('vaaa')
        container.removeChild(infoBox);
    })
    infoBox.appendChild(boxButton)
}

window.addEventListener('load', setUp, null);


