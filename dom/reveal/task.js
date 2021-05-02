const reveal = document.querySelectorAll(".reveal");

function isVisible(elem) {
    const coords = elem.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const topVisible = coords.top > 0 && coords.top < viewportHeight;
    const bottomVisible = coords.bottom < viewportHeight && coords.bottom > 0;
    return topVisible || bottomVisible;
}

document.addEventListener("scroll", function () {
    reveal.forEach(elem => {
        isVisible(elem) ? elem.classList.add("reveal_active") : elem.classList.remove("reveal_active");
    })
});