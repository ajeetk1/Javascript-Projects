//Create two variables.

let firstCard = 9;
let secondCard =12;
let cards=[firstCard,secondCard]
let sum = firstCard + secondCard;
let blackJack = false;
let isAlive = true;   // Start of Game Alive
let message ="";

//console.log(sum);
let sumEL =document.getElementById("sum-el");

let cardsEL= document.getElementById("cards-el");
// Logic is sum needs to be equal or less then 21

let messageEL = document.getElementById("message-el"); //Text Content Display


function startGame(){
    renderGame()
}


function renderGame(){
// Here we are getting only firstCard & SecondCard;
cardsEL.textContent = "Cards : " + cards[0] +" " + cards[1];
// render all the cards
sumEL.textContent="Sum : " + sum;
if (sum<=20) {
message="Do you want to draw new card?";
} else if (sum===21){
message ="You have got BlackJack";  // Javascript don't know about this console.log blackJack = true;
} else {
message = "you are out of game";
isAlive = false;  // 22 out of Game
}
messageEL.textContent = message;
}

function newCard () {
console.log("Drawing new card from the deck");
let card =10;
sum +=card;
renderGame()
}
// CASH OUT we need to SAVE -- Winner - How to declare winner.
// We need to set up variable to track that I have won black jack.

// console.log(blackJack);
// console.log(isAlive);

