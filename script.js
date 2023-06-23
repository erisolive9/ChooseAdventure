//Elements in main section:
let mainImage = document.getElementById("mainPic");
let situation = document.getElementById("situation");
let description = document.getElementById("description");
let endings = document.getElementById("endings");

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
let replay = document.getElementById("replayButton");

let buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
let endingsUnlocked = [];


/* User chooses an option on the first screen: */

//User chooses first option on first screen:
button1.onclick = function() {
    //Hide old options
    button1.style.display = "none"
    button2.style.display = "none"
    button3.style.display = "none"
    //Show new options
    button4.style.display = "inline-block"
    button5.style.display = "inline-block"
    //Update image and descriptions:
    mainImage.src = "Photos/phonePic.jpg"
    situation.innerHTML = "Situation #2"
    description.innerHTML = "As you pass through by your school's football field, you feel your phone buzzing in your back pocket. You pull it out to see a message from your mom. It reads ''I hope you have a great day! I was upset that you couldn't eat breakfast with us this morning.''"
};

//User chooses second option on first screen
button2.onclick = function() {
    //Hide old options
    button1.style.display = "none"
    button2.style.display = "none"
    button3.style.display = "none"
    //Show new options
    button6.style.display = "inline-block"
    button7.style.display = "inline-block"
    //Update image and descriptions:
    mainImage.src = "Photos/classmatePic.PNG"
    situation.innerHTML = "Situation #2"
    description.innerHTML = "You make it to your first period class right on time. As you're getting your laptop set up to work on your assignment, one of your classmates, an annoying airhead named Jake, asks if you can help him. Knowing him, it'll probably take up half of your worktime to explain the assignment to him."
};

//User chooses third option on first screen
button3.onclick = function() {
    //Hide old options
    button1.style.display = "none"
    button2.style.display = "none"
    button3.style.display = "none"
    //Show new options
    button8.style.display = "inline-block"
    button9.style.display = "inline-block"
    //Update image and descriptions:
    mainImage.src = "Photos/principalPic.avif"
    situation.innerHTML = "Situation #2"
    description.innerHTML = "You decide to sit and have a nice meal with your family, and it's absolutely delicious. You make it to school around 8:50 AM, right as your first class is ending. Suddenly, the principal approaches you in the hallway and notifies you that you have detention for being late without notifying the school."
};



/* User clicks an option on the second screen (chose first option on first screen) */

//User chooses first option on second screen 
button4.onclick = function() {
    //Hide old options
    button4.style.display = "none"
    button5.style.display = "none"
    //Show replay button
    replay.style.display = "inline-block"
    //Update list of unlocked endings
    endingsUnlocked.push(1);
    //Update image and descriptions:
    mainImage.src = "Photos/vacationPic.jpg" //vacation on beach
    situation.innerHTML = "5 years later..."
    description.innerHTML = "You went on to continue mending your relationship with your mom, and now you're on a beautiful vacation in Cuba with her. (Ending 1 of 6)"
};

//User chooses second option on second screen
button5.onclick = function() {
    //Hide old options
    button4.style.display = "none"
    button5.style.display = "none"
    //Show replay button
    replay.style.display = "inline-block"
    //Update list of unlocked endings
    endingsUnlocked.push(2)
    //Update image and descriptions:
    mainImage.src = "Photos/funeralPic.jpg"
    situation.innerHTML = "20 years later..."
    description.innerHTML = "After angering your mom at breakfast, you continued to push her away and failed to appreciate her. This sent her into a depression. A week ago, she passed away and you didn't get to say goodbye. At your funeral, you are overwhelmed with guilt. (Ending 2 of 6)"
};



/*User clicks an option on the third screen (chose 2nd option on 1st screen) */

//User chooses first option on third screen
button6.onclick = function() {
    //Hide old options
    button6.style.display = "none"
    button7.style.display = "none"
    //Show replay button
    replay.style.display = "inline-block"
    //Update list of unlocked endings
    endingsUnlocked.push(3)
    //Update image and descriptions:
    mainImage.src = "Photos/teacherPic.jpg" //teacher or family
    situation.innerHTML = "15 years later..."
    description.innerHTML = "After deciding to help your classmate, you started to notice your passion for teaching others. Although your grades might have gotten you a better-paying job, you went on to college and became a teacher. Today, you are married with one kid and many friends supporing you. You're starting your 10th year teaching today. (Ending 3 of 6)"
};

//User chooses second option on third screen
button7.onclick = function() {
    //Hide old options
    button6.style.display = "none"
    button7.style.display = "none"
    //Show replay button
    replay.style.display = "inline-block"
    //Update list of unlocked endings
    endingsUnlocked.push(4)
    //Update image and descriptions:
    mainImage.src = "Photos/mansionPic.jpg" //mansion or money
    situation.innerHTML = "30 years later..."
    description.innerHTML = "By focusing on your education with every decision you made in high school, you went on to become a wealthy businessperson. You live in an enormous mansion, have 3 sports cars, and you're retired in your forties. However, you have no friends or family to spend your time or money with. (Ending 4 of 6)"
};



/*User clicks an option on the fourth screen (chose 3rd option on 1st screen) */

//User chooses first option on fourth screen
button8.onclick = function() {
    //Hide old options
    button8.style.display = "none"
    button9.style.display = "none"
    //Show replay button
    replay.style.display = "inline-block"
    //Update list of unlocked endings
    endingsUnlocked.push(5)
    //Update image and descriptions:
    mainImage.src = "Photos/homelessPic.jpg"
    situation.innerHTML = "40 years later..."
    description.innerHTML = "After deciding to skip school once, you never went back. You decided high school was not necessary. You prioritized your family instead. For a while, they supported you and let you live in their house rent-free. But once they retired and eventually died, you could no longer pay for the house. You had to resort to living on the streets. (Ending 5 of 6)"
};

//User chooses second option on fourth screen
button9.onclick = function() {
    //Hide old options
    button8.style.display = "none"
    button9.style.display = "none"
    //Show replay button
    replay.style.display = "inline-block"
    //Update list of unlocked endings
    endingsUnlocked.push(6)
    //Update image and descriptions:
    mainImage.src = "Photos/familyPic.jpg"
    situation.innerHTML = "20 years later"
    description.innerHTML = "By finding a good balance between family and school life, you went on to get a decent education and a job that pays well enough to support your new family of 4 and your parents in their retirement. (Ending 6 of 6)"};

//User clicks replay button, screen is set back to original
replay.onclick = function() {
    //Hide replay button
    replay.style.display = "none"
    //Show first options
    button1.style.display = "inline-block"
    button2.style.display = "inline-block"
    button3.style.display = "inline-block"
    //Update images and descriptions
    mainImage.src = "Photos/breakfastPic.jpg"
    situation.innerHTML = "Situation #1"
    description.innerHTML = "You've just woken up for another day at your high school. After getting dressed in a comfortable outfit, you walked over to the kitchen to see your parents cooking together on the stove. On the dining table, they've laid out an enormous array of breakfast foods for you. However, you look at the clock on the wall and find that it's already 7:54 AM, and you have to be at school by 8! Your walk there will take about 5 minutes."
    endings.style.display = "block"
    if (endingsUnlocked.length <= 6) {
        endings.innerHTML = "Endings Unlocked: <br>" + endingsUnlocked
    }
    else {
        endings.innerHTML = "You unlocked all the endings!"
    }
};






