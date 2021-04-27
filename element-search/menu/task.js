'use strict'

const menuLink = document.querySelectorAll(".menu__link");
const menuSub = document.querySelectorAll(".menu_sub");

for (let i = 0; i < menuLink.length; i++) {

  menuLink[i].onclick = function () {

    let nextElem = menuLink[i].nextElementSibling;

    if (nextElem && nextElem.classList.contains("menu_active")) {
      nextElem.classList.remove("menu_active")
    } else if (nextElem) {
      menuSub.forEach(elem => elem.classList.remove("menu_active"));
      nextElem.classList.toggle("menu_active");
      return false;
    }
  }
}