//My Method
/*
let number =0;

const root = document.querySelector(".number");
console.log(root);

const Button = document.querySelector(".decrease");
console.log(Button);

Button.addEventListener('click', function() {
console.log("Button Clicked")
number = number-1;
document.querySelector(".number").textContent=number;
document.querySelector(".number").style.color = "red";
});

const reset= document.querySelector(".reset")
console.log(reset);

reset.addEventListener('click', function(){
number=0;
document.querySelector(".number").textContent=number;
document.querySelector(".number").style.color="blue";
});

const increase = document.querySelector(".increase");
increase.addEventListener('click' , function(){
number= number+1;
document.querySelector('.number').textContent=number;
document.querySelector('.number').style.color = "green";
})
*/

// set initial number 
let number = 0;

// Select buttons and 
let root = document.querySelector('.number');
console.log(root)
let Button = document.querySelectorAll('.button');
console.log(Button)

// For Each loop we have to use 

Button.forEach(function(item) {
item.addEventListener('click', function(e) {

e.currentTarget.classList; // Selecting all Button Classes
console.log(e.currentTarget.classList)

const styles = e.currentTarget.classList

if(styles.contains('decrease')) {
    number--;   
} else if (styles.contains('increase')){
    number++;
} else {
    number=0;
}
if (number<0){
    root.style.color = "red";
    } if(number>0){
        root.style.color = "green";
    } if (number===0)
        root.style.color = "orange";
    
root.textContent=number;


});
});