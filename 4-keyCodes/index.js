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
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', remove));
    window.addEventListener('keydown', play);
}

function remove(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function play(e) {
    var key = document.querySelector(`div[id="${e.keyCode}"]`);
    var sound = document.getElementById('sound');
    if (!sound) return;
    key.classList.add('playing');
    sound.currentTime = 0;
    sound.play();
}


window.addEventListener('load', createInfoBox, null);


