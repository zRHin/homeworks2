

const left = document.querySelector(".slider__arrow_prev");
const rigth = document.querySelector(".slider__arrow_next");
const slides = Array.from(document.querySelectorAll(".slider__item"));
let activeSlideIdx = 0;

left.onclick = function() {
    activeSlideIdx --;
    if (activeSlideIdx <= 0) {
        activeSlideIdx = slides.length;
    }
    slides.forEach((el) => el.classList.remove("slider__item_active"));
    slides[activeSlideIdx - 1].classList.add("slider__item_active");
}

rigth.onclick = function() {
    activeSlideIdx ++;
    if (activeSlideIdx >= slides.length) {
        activeSlideIdx = 0;
    }
    slides.forEach((el) => el.classList.remove("slider__item_active"));
    slides[activeSlideIdx].classList.add("slider__item_active");
}