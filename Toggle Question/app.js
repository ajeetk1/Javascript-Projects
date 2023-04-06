const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const first = document.querySelector('.first');

btn.addEventListener('click' , function() {
console.log("Button Clicked")
first.style.height ="300px";
text.style.display = 'block';
});

 