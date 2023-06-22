//Elements in main section:
let mainImage = document.querySelector("#mainPic");
let situation = document.querySelector("#situation");
let description = document.querySelector("#description");

//Buttons, individual and an array of all of them:
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let button4 = document.querySelector("#button4");
let button5 = document.querySelector("#button5");
let button6 = document.querySelector("#button6");
let button7 = document.querySelector("#button7");
let button8 = document.querySelector("#button8");
let button9 = document.querySelector("#button9");

let buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];

//Groups of options:
let firstOptions = document.querySelector("#options1");
let secondOptions = document.querySelector("#options2");
let thirdOptions = document.querySelector("#options3");
let fourthOptions = document.querySelector("#options4");

/* User chooses an option on the first screen: 

//User chooses first option on first screen:
button1.onclick = function clickButton1() {
    //Show new options, hide the old
    firstOptions.style = "display: none"
    secondOptions.style = "display: block"
    //Update image and descriptions:
    mainImage.src = "Photos/phonePic.jpg"
    situation.innerHTML = "Situation #2"
    description.innerHTML = "Lorem Ipsum"
};


/* User clicks an option on the second screen (chose first option on first screen) */







