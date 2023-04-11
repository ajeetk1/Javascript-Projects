const btn = document.querySelector('.btn');
console.log(btn);
const text = document.querySelector('.text');
console.log(text)
const first = document.querySelector('.first');
console.log(first)
const minus = document.querySelector('.minus');
console.log(minus);
const second = document.querySelector('.second');
console.log(second)

btn.addEventListener('click', function(){
console.log("button clicked")
text.style.display = "block";
minus.style.display='block';
});

minus.addEventListener('click', function() {
text.style.display ='none';
minus.style.display ="none";
})

