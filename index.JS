     //left dice faces' images values

var leftDice1 = document.getElementsByClassName("left-dice-1")[0];
var leftDice2 = document.getElementsByClassName("left-dice-2")[0];
var leftDice3 = document.getElementsByClassName("left-dice-3")[0];
var leftDice4 = document.getElementsByClassName("left-dice-4")[0];
var leftDice5 = document.getElementsByClassName("left-dice-5")[0];
var leftDice6 = document.getElementsByClassName("left-dice-6")[0];

     //random selection of left dice faces' images (to be displayed in the websute ("hidden" attribute))

var rL = Math.floor(Math.random() * 6) + 1;

if (rL === 1) {
    leftDice1.removeAttribute("hidden");
} else if (rL === 2) {
    leftDice2.removeAttribute("hidden");
} else if (rL === 3) {
    leftDice3.removeAttribute("hidden");
} else if (rL === 4) {
    leftDice4.removeAttribute("hidden");
} else if (rL === 5) {
    leftDice5.removeAttribute("hidden");
} else if (rL === 6) {
    leftDice6.removeAttribute("hidden");
}




     //right dice faces' images values

var rightDice1 = document.getElementsByClassName("right-dice-1")[0];
var rightDice2 = document.getElementsByClassName("right-dice-2")[0];
var rightDice3 = document.getElementsByClassName("right-dice-3")[0];
var rightDice4 = document.getElementsByClassName("right-dice-4")[0];
var rightDice5 = document.getElementsByClassName("right-dice-5")[0];
var rightDice6 = document.getElementsByClassName("right-dice-6")[0];

     //random selection of right dice faces' images (to be displayed in the websute ("hidden" attribute))

var rR = Math.floor(Math.random() * 6) + 1;

if (rR === 1) {
    rightDice1.removeAttribute("hidden");
} else if (rR === 2) {
    rightDice2.removeAttribute("hidden");
} else if (rR === 3) {
    rightDice3.removeAttribute("hidden");
} else if (rR === 4) {
    rightDice4.removeAttribute("hidden");
} else if (rR === 5) {
    rightDice5.removeAttribute("hidden");
} else if (rR === 6) {
    rightDice6.removeAttribute("hidden");
}


     //Player (1 & 2) variables


var draw = document.getElementsByClassName("draw")[0];
var player1 = document.getElementsByClassName("player-1-wins")[0];
var player2 = document.getElementsByClassName("player-2-wins")[0];

     // HTML sentence change


if (rL === rR) {

    draw.removeAttribute("hidden");

} else if (rL > rR) {

    player1.removeAttribute("hidden");

} else {

    player2.removeAttribute("hidden");

}