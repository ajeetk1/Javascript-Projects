
const button = document.getElementById("btn");
const number = document.getElementById("one");
const ageResult = document.getElementById("ageResult")

button.addEventListener("click" ,function(){
    const inputYear = document.getElementById("one").value;
    const currentYear = new Date().getFullYear();
    const age = currentYear - inputYear;
  
const ageResult = document.getElementById("ageResult");
  ageResult.textContent = age;
    
});




  




