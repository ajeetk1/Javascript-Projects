//My Method

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


