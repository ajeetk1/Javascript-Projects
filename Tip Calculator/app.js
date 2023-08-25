// Select Button 
//Take Value from one box
// Take Value from second Box

const btn = document.getElementById("btn");
const total = document.getElementById("total")
//console.log(btn);

// Box selection
btn.addEventListener("click" , function() {
const valueBox = document.getElementById("valuebox").value;
const one = document.getElementById("one").value;
const result = (valueBox*(1+ one/100)).toFixed(2);
total.innerText= "Total:" + result;
});