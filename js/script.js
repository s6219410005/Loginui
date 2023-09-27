let currentSlide = 0;

function showSlide(n) {
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').offsetWidth;

    if (n >= slides.children.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.children.length - 1;

    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", showSlide(currentSlide));
