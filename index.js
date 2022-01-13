var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var doc = "images/dice" + randomNumber1 + ".png";
var add = document.querySelectorAll("img")[0];
add.setAttribute("src", doc);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var doc1 = "images/dice" + randomNumber2 + ".png";
var add1 = document.querySelectorAll("img")[1];
add1.setAttribute("src", doc1);
if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 win!";
} else if (randomNumber2 < randomNumber1) {
    document.querySelector("h1").innerHTML = "palyer 2 win!";
} else {
    document.querySelector("h1").innerHTML = "Draw the match";
}