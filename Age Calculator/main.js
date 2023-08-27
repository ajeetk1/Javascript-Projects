
const button = document.getElementById("btn");
const number = document.getElementById("one");
const ageResult = document.getElementById("ageResult");

// Now we will see that the fetch age 
// Age is entered fetch the age.





button.addEventListener("click" ,function(){
    const inputYear = document.getElementById("one").value;
    const currentYear = new Date().getFullYear();
    const age = currentYear - inputYear;
  
const ageResult = document.getElementById("ageResult");
  ageResult.textContent = age;
    
});




  




