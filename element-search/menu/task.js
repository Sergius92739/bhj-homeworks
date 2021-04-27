'use strict'

const menuLink = document.querySelectorAll(".menu__link");
const menuSub = document.querySelectorAll(".menu_sub");

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].onclick = function () {
    menuSub.forEach(elem => elem.classList.remove("menu_active"));
    if (menuLink[i].nextElementSibling) {
      menuLink[i].nextElementSibling.classList.toggle("menu_active")
    }
    return false;
  }
}
