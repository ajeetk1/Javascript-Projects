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

//Select pop up class
const modalOpen = document.querySelector('.modal');
console.log(modalOpen);
// Functionlity is Click on Button 

for(let i=0;i< modal.length;i++){
modal[i].addEventListener('click', function(){
console.log("Button Clicked");

modalOpen.classList.remove('hidden');
background.classList.remove('hidden');
});

// click on close
close.addEventListener('click', function(){
console.log("clicked");
modalOpen.classList.add('hidden');
background.classList.add('hidden');
});

// overlay 

background.addEventListener('click', function() {
console.log("Background Again Clicked");
modalOpen.classList.add('hidden');
background.classList.add('hidden');
})

}

    




