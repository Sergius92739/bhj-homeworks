'use strict'

const sliderElements = document.querySelector(".slider");
const images = sliderElements.querySelectorAll(".slider__item");
const right = sliderElements.querySelector(".slider__arrow_next");
const left = sliderElements.querySelector(".slider__arrow_prev");
const dots = sliderElements.querySelectorAll(".slider__dot");
let step = 0;

dots[0].classList.add("slider__dot_active");

function removeClasses() {
    images.forEach(elem => elem.classList.remove("slider__item_active"));
    dots.forEach(elem => elem.classList.remove("slider__dot_active"));
}

function addClasses() {
    images[step].classList.add("slider__item_active");
    dots[step].classList.add("slider__dot_active");
}

right.onclick = function() {
    removeClasses();
    step = step == images.length - 1 ? step = 0 : ++step;
    addClasses();
}

left.onclick = function() {
    removeClasses();
    step = step == 0 ? images.length - 1 : --step;
    addClasses();
}

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = function() {
        removeClasses();
        dots[i].classList.add("slider__dot_active");
        images[i].classList.add("slider__item_active");
        step = i;
    }
}








