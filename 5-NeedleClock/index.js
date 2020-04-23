const container = document.getElementById("container-id");

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
    description.innerHTML = 'Needle clock! getting the date in JavaScript and calculating the degrees of the hour, minit, seconds and some css we can create a fantastic clock! ';
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
    const hoursBar = document.querySelector('.hours');
    const minitsBar = document.querySelector('.minits');
    const secondsBar = document.querySelector('.seconds');
    setInterval(() => setTime(hoursBar, minitsBar, secondsBar), 1000);
}

function setTime(hoursBar, minitsBar, secondsBar) {
    const date = new Date();

    const hour = date.getHours();
    const hourOnDegrees = ((360 * hour) / 12) - 90;
    console.log(hourOnDegrees)
    hoursBar.style.transform = `translate(-30px, -50%) rotate(${hourOnDegrees}deg)`;

    const minit = date.getMinutes();
    const minitOnDegrees = ((360 * minit) / 60) - 90;
    minitsBar.style.transform = `translate(-50px, -50%) rotate(${minitOnDegrees}deg)`;

    const seconds = date.getSeconds();
    const secondOnDegrees = ((360 * seconds) / 60) - 90;
    secondsBar.style.transform = `translate(-60px, -50%) rotate(${secondOnDegrees}deg)`;


}



window.addEventListener('load', createInfoBox, null);


