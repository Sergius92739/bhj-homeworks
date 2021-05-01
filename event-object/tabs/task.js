const tabs = document.getElementById("tabs1");
const tab = tabs.querySelectorAll(".tab");
const tabContent = tabs.querySelectorAll(".tab__content");

tab.forEach((elem, index) => {
    elem.addEventListener("click", (e) => {
        tab.forEach(elem => elem.classList.remove("tab_active"));
        tabContent.forEach(elem => elem.classList.remove("tab__content_active"));
        e.target.classList.add("tab_active");
        tabContent[index].classList.add("tab__content_active");
    })
})

