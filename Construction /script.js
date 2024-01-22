const images = ['Banner2.jpg', 'Banner.jpg', 'Banner 3.jpg'];

const firstImage = 0;
const lastImage = images.length - 1;
let currentImage = 0;

const imageTag = document.getElementById('image');
const nextButton = document.getElementById('left-circle');
const prevButton = document.getElementById('right-circle');


//Next button click event
nextButton.addEventListener('click', () => {
    currentImage++;
    if (currentImage > lastImage) {
        currentImage = firstImage;
    }
    imageTag.src = images[currentImage];
});

// Previous button click event
prevButton.addEventListener('click', () => {
    currentImage--;
    if (currentImage < firstImage) {
        currentImage = lastImage;
    }
    imageTag.src = images[currentImage];
});