
const button = document.getElementById("btn");
const number = document.getElementById("one");
const ageResult = document.getElementById("ageResult");

// Check the value in the Date Input Box 
// Creating Function 

function calculateAge() {
const birthdayValue = number.value;
// Check user has entered Birth Date
if (birthdayValue == ""){
  console.log("Ask user to enter Birth Date")
} else {
// Birthday Date is Entered then fetch value of date
const age  = getAge(birthdayValue);
ageResult.innerText= `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
}

}

// We have to calculate the age curret year - Birthday Date

function getAge(birthdayValue){


     const currentDate = new Date();  // new Date Function Javascript
    const birthdayDate = new Date(birthdayValue);  //Fetch Birthday Date 
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
  
    if (
      month < 0 ||
      (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
      age--;
    }
  
    return age;
  }
  button.addEventListener("click", calculateAge);




  




