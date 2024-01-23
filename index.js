randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;

attribute1 = document.querySelector(".img1");
attribute2 = document.querySelector(".img2");
heading = document.querySelector(".container h1");

//player 1

if (randomNumber1 === 1) {
    attribute1.src = "./images/dice1.png";
} else if (randomNumber1 === 2) {
    attribute1.src = "./images/dice2.png";
} else if (randomNumber1 === 3) {
    attribute1.src = "./images/dice3.png";
} else if (randomNumber1 === 4) {
    attribute1.src = "./images/dice4.png";
} else if (randomNumber1 === 5) {
    attribute1.src = "./images/dice5.png";
} else if (randomNumber1 === 6) {
    attribute1.src = "./images/dice6.png";
}

//player 2

if (randomNumber2 === 1) {
    attribute2.src = "./images/dice1.png";
} else if (randomNumber2 === 2) {
    attribute2.src = "./images/dice2.png";
} else if (randomNumber2 === 3) {
    attribute2.src = "./images/dice3.png";
} else if (randomNumber2 === 4) {
    attribute2.src = "./images/dice4.png";
} else if (randomNumber2 === 5) {
    attribute2.src = "./images/dice5.png";
} else if (randomNumber2 === 6) {
    attribute2.src = "./images/dice6.png";
}

//heading

if (randomNumber1 === randomNumber2) {
    heading.textContent = "Draw!";
} else if (randomNumber1 < randomNumber2) {
    heading.textContent = "Play 2 Wins!🚩";
} else if (randomNumber1 > randomNumber2) {
    heading.textContent = "🚩 Play 1 Wins!";
}