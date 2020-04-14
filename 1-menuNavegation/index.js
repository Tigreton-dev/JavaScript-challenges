var container = document.getElementById("container");

const prueba = () => {
    //CREATE MENU BAR
    let menuBar = document.createElement("div");
    menuBar.classList.add("menuBar");
    menuBar.id = "menuBar-id";
    container.appendChild(menuBar);

    //ADD MENU BUTTONS
    const menuIndex = ["home", "about", "skills", "contact"];
    menuIndex.map((elem, i) => {
        let p = document.createElement("div");
        p.classList.add(`menuButton`, `${elem}`);
        p.id = `${elem}`;
        p.innerHTML = elem;
        menuBar.appendChild(p);
        p.addEventListener("click", loadPage, false);
    });

    //CREATE PAGES CONTAINER
    let containerPage = document.createElement("div");
    containerPage.id = "containerPage-id";
    container.appendChild(containerPage)
}

function loadPage(e) {
    switch (e.target.id) {
        case "home":
            homePage();
            break;
        case "about":
            aboutPage();
            break;
        case "skills":
            skillsPage();
            break;
        case "contact":
            contactPage()
            break;
        default:
            null;
    }
}

function homePage() {
    let containerPage = document.getElementById("containerPage-id");
    containerPage.innerHTML = "";

    let title = document.createElement("h1");
    title.innerHTML = "HOME PAGE";
    containerPage.appendChild(title);

}

function aboutPage() {
    let containerPage = document.getElementById("containerPage-id");
    containerPage.innerHTML = "";

    let title = document.createElement("h1");
    title.innerHTML = "ABOUT PAGE";
    containerPage.appendChild(title)
}

function skillsPage() {
    let containerPage = document.getElementById("containerPage-id");
    containerPage.innerHTML = "";

    let title = document.createElement("h1");
    title.innerHTML = "SKILLS PAGE";
    containerPage.appendChild(title)
}

function contactPage() {
    let containerPage = document.getElementById("containerPage-id");
    containerPage.innerHTML = "";

    let title = document.createElement("h1");
    title.innerHTML = "CONTACT PAGE";
    containerPage.appendChild(title)
}

window.addEventListener("load", prueba);