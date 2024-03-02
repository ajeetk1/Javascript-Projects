// const gallery = document.getElementById("gallery");
// const prevButton = document.getElementById("prev-button");
// //const nextButton = document.getElementById("next-button");

// console.log(gallery);
// console.log(prevButton);
// console.log(nextButton);

// const images = ['img/Banner2.jpg', 'img/Banner.jpg', 'img/Banner2.jpg'];

// const firstImage=0;
// const lastImage = images.length-1;
// let currentImage = 0;

// const nextButton = document.getElementById("next-button");
// nextButton.addEventListener('click' ,() => {

//     const imageTag = document.getElementById('image');
//     currentImage++;

//    if(currentImage >lastImage){
//     currentImage = firstImage
//    }
//     imageTag.src= images[currentImage];
// });

const images = ['img/Banner2.jpg', 'img/Banner.jpg', 'img/Banner2.jpg'];

const firstImage = 0;
const lastImage = images.length - 1;
let currentImage = 0;

const imageTag = document.getElementById('image');
const nextButton = document.getElementById('next-button');
//console.log("nextButton");
const prevButton = document.getElementById('prev-button');

// Next button click event
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
