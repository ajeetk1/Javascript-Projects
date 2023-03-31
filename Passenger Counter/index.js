let count = 0;

// select all buttons and ids.
const style = document.querySelector('.number');
console.log (style);

const Button = document.querySelector('.btn1');
console.log(Button);

// Button Click Add
Button.addEventListener('click',function() {
//console.log("button Clicked")
count++;
style.textContent=count;
style.style.color = "green";

});

// Select another Button
const button = document.querySelector('.btn2')
console.log(button);

const save = document.querySelector('.visit');
console.log(save);

//Click Function 
button.addEventListener('click' , function() {
save.textContent = count;
save.style.color = "orange";
style.textContent =0;
});

