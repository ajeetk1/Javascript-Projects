const age = document.getElementById("one");
console.log(age);
const button = document.getElementById("btn");

const year = document.getElementById("currentYear");
const runningYear = new Date().getFullYear();
year.textContent= runningYear;

button.addEventListener("click" ,function(){
const result = runningYear - age;
console.log(result);
});