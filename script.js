document.addEventListener('DOMContentLoaded', function () {
    const groupPictureSection = document.querySelector('.group-picture');
    const groupTitle = document.querySelector('.group-title');
    const groupSubtitle = document.querySelector('.group-subtitle');

    function checkScroll() {
        const sectionTop = groupPictureSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3;

        if (sectionTop < triggerPoint) {
            groupTitle.style.animation = 'slide-right 2s forwards';
            groupSubtitle.style.animation = 'slide-left 2s forwards';
        }
    }

    window.addEventListener('scroll', checkScroll);
});

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Initial display
showSlide(currentSlide);
