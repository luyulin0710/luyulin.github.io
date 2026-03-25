let myImage = document.querySelector("img");
myImage.onclick = () => {
    if (myImage.getAttribute("src") === "images/灰太鸡.jpg") {
        myImage.setAttribute("src", "images/海边.jpg");
    }
    else {
        myImage.setAttribute("src", "images/灰太鸡.jpg");
    }
};

let myTitle = document.querySelector("h1");
let myButton = document.querySelector("button");

function setUserName() {
    let userName = prompt("Please enter your name!");
    localStorage.setItem("name", userName);
    myTitle.textContent = `Mozilla is cool, ${userName}`;

}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myTitle.textContent = `Mozilla is cool, ${storedName}`;
};

myButton.onclick = () => {
    setUserName();
};