//Elements in main section:
let mainImage = document.getElementById("mainPic");
let situation = document.getElementById("situation");
let description = document.getElementById("description");

//Buttons, individual and an array of all of them:
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");

let buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];

//Groups of options:
let firstOptions = document.getElementById("options1");
let secondOptions = document.getElementById("options2");
let thirdOptions = document.getElementById("options3");
let fourthOptions = document.getElementById("options4");

/* User chooses an option on the first screen: */

//User chooses first option on first screen:
button1.onclick = function() {
    //Show new options, hide the old
    firstOptions.style.display = "none"
    secondOptions.style.display = "block"
    //Update image and descriptions:
    mainImage.src = "Photos/phonePic.jpg"
    situation.innerHTML = "Situation #2"
    description.innerHTML = "As you pass through your school's football field, you feel your phone buzzing in your back pocket. You pull it out to see a message from your mom. It reads ''I hope you have a great day! I was upset that you couldn't eat breakfast with us this morning.''"
};


/* User clicks an option on the second screen (chose first option on first screen) */







