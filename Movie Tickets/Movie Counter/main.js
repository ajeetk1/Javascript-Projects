//document.getElementById("count").innerText=10;
let count=0;  
let countE = document.getElementById("countn")
let saveE = document.getElementById("saven")
//console.log(saveE)
 //console.log(countE);


 function Increment(){
    count+=1;
    countE.textContent=count;
    //console.log(count);
 }

function save(){

  saveE.textContent=count;
  count=0;
  countE.textContent=0;
}

































//  let count = 0;
//  let saveE = document.getElementById("saven")
//  let countE= document.getElementById("countn")
//  console.log(saveE)
 
//  function Increment() {
//     count=count+1;
//     countE.textContent = count;
    
//  }
// function save(){
//     let countStr = count + " - ";
//     saveE.innerText+=countStr;
//     countE.textContent = 0;
//     count = 0;
// }

