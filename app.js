let countE = document.getElementById("count");
//console.log(countE) - Selecting the ID from HTML to fetch count

// I need Click Functionlity on Button

document.getElementById("increment1").addEventListener("click" ,function(){
countE.textContent = countE+1;
});
