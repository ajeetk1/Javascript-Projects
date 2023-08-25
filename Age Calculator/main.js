
const button = document.getElementById("btn");

button.addEventListener("click" ,function(){
    const inputYear = document.getElementById("one").value;
    const currentYear = new Date().getFullYear();
    const age = currentYear - inputYear;
  
const ageResult = document.getElementById("ageResult");
  ageResult.textContent = age;
    
});




  




