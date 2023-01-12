// PsudeoCode
// Initial Passenger initialize to Zero
// Button Click Save and passenger count increase by 1.
// Display increase count value.

let count =0; // Passenger
//console.log(count);

let countE = document.getElementById("count-el"); //Fetch

// Button Click - onClick Function to the increment button

function increments() {  // Button Click Function
count +=1;
// Display Value to fetch
countE.innerText=count;
}

// Save Function 
//Click button save so count value diplay passenger arrived
// count value display passenger arrived 

const saveV=document.getElementById("visit"); //Fetch and save value

 function saves() {
 saveV.innerText += count;
 count=0;// 🤔 😡 Why count is not equal to zero.
 
}

// Once i save value increment button starts from Zero
//count value display next to passenger arrived.

//Display value next to passenger Arrived Current replacing it if i don't 
// replace but add next to it.