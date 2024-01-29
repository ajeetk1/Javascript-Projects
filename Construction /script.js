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

// Jquery for Testimonial
// app.js

$(document).ready(function () {
    // Testimonial block HTML
    var testimonialBlock = `
        <div class="testimonial-block">
            <div class="overlay-text-block">
                <img src="person_image.png" class="client">
                <div class="testimonial-block">
                    <div class="client-text">“They did an amazing work</br> for our home”</div>
                    <div class="client_text_paragraph">Sapien egestas ipsum ac odio sed nibh lorem </br> vulputate vulputate elit fusce varius lacus id </br> sed gravida pellentesque quis viverra.</div>
                    <div class="client_divider">
                        <hr class="clientname">
                        <div class="client_name">JOHN CARTER, NEW YORK</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Clone and append the testimonial block to each image
    $(".image").each(function () {
        var imageContainer = $(this).parent();
        var clonedTestimonialBlock = $(testimonialBlock).clone();
        imageContainer.append(clonedTestimonialBlock);
    });
});

    
function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);
    var question = answer.previousElementSibling;

    if (answer.style.maxHeight === "0px" || answer.style.maxHeight === "") {
        // Expand answer
        answer.style.maxHeight = answer.scrollHeight + "px";
        question.classList.add("expanded");
        document.querySelector('.toggle-icon', question).innerHTML = '×';
    } else {
        // Collapse answer
        answer.style.maxHeight = "0";
        question.classList.remove("expanded");
        document.querySelector('.toggle-icon', question).innerHTML = '+';
    }
}