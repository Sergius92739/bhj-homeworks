"use strict"

function changeOfRotatorCases(elements) {
    let count = 0;
    let interval;
    const countCase = function () {
        let rotatorCase;
        [...elements].forEach(elem => {
            rotatorCase = elem.querySelectorAll(".rotator__case");
            rotatorCase.forEach(elem => elem.classList.remove("rotator__case_active"));
            rotatorCase[count].classList.toggle("rotator__case_active");
            rotatorCase[count].style.color = rotatorCase[count].dataset.color;
            interval = rotatorCase[count].dataset.speed;
        })
        count == rotatorCase.length - 1 ? count = 0 : ++count;
        setTimeout(countCase, interval);
    }
    countCase();
}

changeOfRotatorCases(document.getElementsByClassName("rotator"));