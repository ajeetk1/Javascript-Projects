'use strict'
// Generate Secret Number
let secretNumber = Math.trunc(Math.random()*20+1);

// Secret Number is (HIDE)
//document.querySelector('.number').textContent=secretNumber;


 //document.querySelector('.add').value = 16;
 const root = document.querySelector('.add').value;
 let score = 20;
 let highScore=0;

// // Button Check to Click
document.querySelector('.button1').addEventListener('click', function(){
  const root = Number(document.querySelector('.add').value);
  
//  Value = Zero
if (root == 0){
 document.querySelector('.guess').textContent = "🛑  No Number";
 } 
// value == secretNumber
else if (secretNumber == root){
  // High Score 
if(score>highScore){
  highScore = score;
  document.querySelector(".high").textContent= highScore;
}
 document.querySelector('.guess').textContent = "🏆 You are Winner";
 document.querySelector('body').style.backgroundColor = '#85CB33';
 document.querySelector('.number').style.width = "12rem";


 }
// Value>secret Number
else if (root>secretNumber){
  if (score>1){
  document.querySelector('.guess').textContent = "📈  High !"
  score=score-1;
  document.querySelector('.score').textContent=score;

} else {
  document.querySelector('.guess').textContent = "  🤯 You lost the Game";
  document.querySelector('.score').textContent = 0;
}
//Value<secretNumber
} else if(root<secretNumber){
 if (score>1){
  document.querySelector('.guess').textContent = "📈 Too  Low !"
  score=score-1;
  document.querySelector('.score').textContent=score;

} else {
  document.querySelector('.guess').textContent = "  🤯 You lost the Game";
  document.querySelector('.score').textContent = 0;
}
}
 })

 // Again Button 

 document.querySelector('.button2').addEventListener('click', function (){
  score = 20;
  secretNumber = Math.trunc(Math.random()*20+1);
  document.querySelector('.guess').textContent = ' ✅  Start Guessing !';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.add').value = '';
  document.querySelector('body').style.backgroundColor = "black";
  document.querySelector('.number').style.width = "10rem";
 });
 




