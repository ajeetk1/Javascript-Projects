//Create two variables.

let cards=[]
let sum = 0;
let blackJack = false;
let isAlive = false;   // Start of Game Alive
let message ="";


console.log(cards);

function getRandomCard(){

 let number = Math.floor(Math.random()*13)+1;
 if (number)
 return number;

}


let sumEL =document.getElementById("sum-el");
let cardsEL= document.getElementById("cards-el");
let messageEL = document.getElementById("message-el"); //Text Content Display

let playerName = "Per";
let playerChips =145;

let playerEl= document.getElementById("player");
//console.log(playerEl);
playerEl.textContent= playerName + ": $" + playerChips;


function startGame(){
    isAlive = true;
// First Card + Second Card
let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards=[firstCard,secondCard]
sum = firstCard+secondCard;

    renderGame()
}


function renderGame(){
cardsEL.textContent = "Cards : ";
for (let i = 0;i < cards.length; i++) {
cardsEL.textContent += cards[i] + " ";
}
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
if (isAlive=== true && blackJack===false ){
console.log("Drawing new card from the deck");
let card = getRandomCard()
sum +=card;
cards.push(card);
//console.log(cards)
renderGame()
}
}





