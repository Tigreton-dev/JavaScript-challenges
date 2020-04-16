const container = document.getElementById("container");

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
    description.innerHTML = 'The canvas element is part of HTML5 and allows for dynamic, scriptable rendering of 2D shapes and bitmap images. This small project is an example on how to draw on a html canvas. When click and move inside the box it will draw a line following the mouse and changein the color of the line while the line ins drawing.';
    infoBox.appendChild(description);

    //creating the button
    const boxButton = document.createElement('button');
    boxButton.classList.add('box-button');
    boxButton.innerHTML = 'Got it!';
    boxButton.addEventListener('click', function () {
        container.removeChild(infoBox);
        setUp();
    })
    infoBox.appendChild(boxButton);
}

function setUp() {
    createCanvas();
}

const state = {
    isDrawing: false,
    lastX: 0,
    lastY: 0,
    color: 0,
}

function createCanvas() {
    const canvas = document.getElementById('canvas');

    canvas.addEventListener('mousedown', (e) => {
        state.isDrawing = true;
        [state.lastX, state.lastY] = [e.offsetX, e.offsetY];
    });
    canvas.addEventListener('mousemove', (e) => draw(e));
    canvas.addEventListener('mouseup', () => state.isDrawing = false);
    canvas.addEventListener('mouseleave', () => state.isDrawing = false);
}

function draw(e) {
    if (!state.isDrawing) return;

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = `hsl(${state.color}, 100%, 50%)`;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = '20';
    ctx.beginPath();
    ctx.moveTo(state.lastX, state.lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [state.lastX, state.lastY] = [e.offsetX, e.offsetY];
    state.color++;
    if (state.color >= 360) state.color = 0;
}

window.addEventListener('load', createInfoBox, null);


