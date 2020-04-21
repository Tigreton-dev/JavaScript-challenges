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
    description.innerHTML = 'This project show how every single button of the keypad has a unique key-code that allow to perform specific task when that key is pushed.';
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


