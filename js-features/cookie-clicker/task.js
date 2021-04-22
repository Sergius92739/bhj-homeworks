'use strict'
const cookie = document.getElementById("cookie")
const counter = document.getElementById("clicker__counter");
const clickerStatus = document.querySelector(".clicker__status");
clickerStatus.insertAdjacentHTML(
    "afterend",
    '<div class="clicker__status">Скорость клика:<span id="click_speed"> 0</span></div>'
);
let clickSpeed = document.getElementById('click_speed');
let start = 0;
cookie.onclick = function () {
    clickSpeed.textContent = start 
    ? (1000 / (Date.now() - start)).toFixed(2) 
    : clickSpeed.textContent = 0;
    start = Date.now();
    counter.textContent++;
    cookie.width === 200 ? this.width = 300 : this.width = 200;
}
