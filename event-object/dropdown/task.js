const dropdown = document.querySelectorAll(".dropdown");
dropdown.forEach(elem => elem.addEventListener("click", function(e) {
    e.preventDefault();
    elem.querySelector(".dropdown__list").classList.toggle("dropdown__list_active");
    elem.querySelector(".dropdown__value").textContent = e.target.textContent;
}))
