const imageEl = document.getElementById("image-el")
//console.log(imageEl);

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollX / window.innerHeight) * 100;
    imageEl.style.transform = `rotate(${scrollPercent}deg)`;
  });