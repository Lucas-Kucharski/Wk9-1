function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop() {
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}


function checkCreds() {
    //first the fName input into firstName var
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;

    //name validation
    if (fullName.length > 19) {
        document.getElementById("loginStatus").innerHTML = "Name string has too many characters!"
    } else if (fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Name string does not have any characters!"
    } 


    //badge number validation
    if (badgeNumb > 999 || badgeNumb < 0) {
        document.getElementById("loginStatus").innerHTML = "Badge number not applicable!"
    }
    //This is granting access and taking us to the other page if all requirements are met
    if (fullName.length < 20 && badgeNumb < 1000 && badgeNumb >= 0 && fullName.length > 1) {
        alert("Acess Granted, welcome " + fullName);
        location.replace("UATspacepage.html");
    }

}


function countdownTimer() {
    var timer = 50;

    //start at 50
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 1000);

    //45 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 6000);

    //40 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 11000);

    //35 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 16000);

    //30 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 21000);

    //25 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 26000);

    //20 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 31000);

    //15 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 36000);

    //10 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 41000);

    //5 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 46000);

    //0 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 51000);
    setTimeout(function () { alert("Blastoff!!!!!!!!"); }, 51100);


}

//play crap function from https://synchronic.uat.edu/courses/3843/assignments/137165?module_item_id=345115
function play() {
    //created RNG ranging from 1 through 6 for die1. Math.ceil is meant to round the number up to the nearest whole number.
    // The * 6 is to multiply the 1 by 6 to gives us our range of 1 through 6.
    var die1 = Math.ceil(Math.random() * 6);

    //created RNG ranging from 1 through 6 for die2
    var die2 = Math.ceil(Math.random() * 6);


    //This creates a variable to add die 1 and die 2 together.
    var sum = die1 + die2
    //This tells the user what they got for die1
    document.write("Die 1 = " + die1);
    //This creates a break between die1 and die2
    document.write("<br/>");
    //This tells the user what they got for die2
    document.write("Die 2 = " + die2);
    //This creates a break between die 2 and sum.
    document.write("<br/>");
    //This displays the sum of die1 and die2 for the user.
    document.write("Sum = " + sum);
    //This adds a new line
    document.write("<br/>");
    //This is letting the user know that if the sum is equal to 7 or 11 then the user will be notified with a you lose.
    if (sum == 7 || sum == 11) {
        document.write("CRAPS - you lose");
        document.write("<br/>");
    }
    //This is letting the user know that if you get two of the same even numbers you will be notified with a you win.
    else if (die1 == die2 && die1 % 2 == 0) {
        document.write("DOUBLES - you win");
        document.write("<br/>");
    }


}

function betterctdnTimer() {
    //build countdown timer using for loop, i am going 50-0 by 5's
    var countDn = 50
    for (var i = 0; i <= 10; i++) {
        setTimeout(function () {
            if (countDn < 25) {
                document.getElementById("ctdnTimer").innerHTML =
                    "Warning Less than 1/2 way to launch, time remaining = " + countDn;

            } else
                document.getElementById("ctdnTimer").innerHTML = countDn;
            countDn = countDn - 5;
        }, i * 5000);
    }
}

function playStation() {
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}
//used to play any sounds
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.dislpay = "none"; 
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.play = function() {
        this.sound.pause();
    }
}