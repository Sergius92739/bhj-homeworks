'use strict'

const cache = {};
cache.modal = document.getElementsByClassName("modal");
const active = cache.modal[0].className = "modal modal_active";
const close = Array.from(cache.modal).forEach((item) => {
    item.querySelector(".modal__close").onclick = () => {
        item.className = "modal";

    }
})
const showSuccess = cache.modal[0].querySelector(".show-success").onclick = () => {
    cache.modal[1].className = "modal modal_active";
    cache.modal[0].className = "modal";
}


