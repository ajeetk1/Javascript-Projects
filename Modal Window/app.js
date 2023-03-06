'use strict'
// Select all Elements

//Selecting Buttons
const modal = document.querySelectorAll('.btn-modal');
console.log(modal);

//selecting the Cross Sign 

const close = document.querySelector('.close-modal');
console.log(close);
// Selecting overlay
const background= document.querySelector('.background')
console.log(background);
//Select Hidden Class
const hidden = document.querySelector('.hidden');
console.log(hidden);
// Functionlity is Click on Button 

for(let i=0;i<modal.length;i++){
modal[i].addEventListener('click', function(){
console.log("Button Clicked");


});



}

    




