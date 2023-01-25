
// We are selecting the image id and storing in a variable.

const imageEl = document.getElementById("image-el")
//console.log(imageEl);

// Window Scroll Function with For Loop
//Event
window.addEventListener("scroll", function() {
var scroll = window.scrollY;// Windows move 

imageEl.style.transform = "rotate(0deg)";

});