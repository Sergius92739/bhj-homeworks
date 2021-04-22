'use strict'

const dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for (let index = 1; index < 10; index++) {
    let hole = document.getElementById(`hole${index}`)
    hole.onclick = function () {
        hole.className === "hole hole_has-mole" ? dead.textContent++ : lost.textContent++;
        if (dead.textContent === "10") {
            dead.textContent = 0;
            lost.textContent = 0;
            alert("Победа!");
        } else if (lost.textContent === "5") {
            dead.textContent = 0;
            lost.textContent = 0;
            alert("Вы проиграли...");
        }
    }
}



