// document.querySelector("img").add.("dice6.png");
// alert("working...!");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImges = "dice" + randomNumber1 + ".png";

var randomDiceImgesSource = "images/" + randomDiceImges;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomDiceImgesSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImgesSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImgesSource2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " Play 1 wins";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}


