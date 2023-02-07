//Fetch from code all. query selector CSS classes

const panels = document.querySelectorAll(".panel");

// On Click functionity all
// For Each Loop - Click that expands


panels.forEach(panel=>{
panel.addEventListener("click",()=>{
    removeActiveClasses()
panel.classList.add('active')
})
})
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
