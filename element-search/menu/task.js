'use strict'

const menuItem = document.querySelectorAll(".menu__link");
const menuSub = document.querySelectorAll(".menu.menu_sub");
menuItem.forEach((elem) => {
  elem.onclick = () => {
    menuSub.forEach((elem) => elem.className = "menu menu_sub");
    if (elem.nextElementSibling) {
      elem.nextElementSibling.classList.toggle("menu_active");
      return false;
    }
  }
});