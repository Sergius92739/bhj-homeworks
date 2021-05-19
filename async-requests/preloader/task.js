"use strict"

const items = document.getElementById("items");
const loader = document.getElementById("loader");
const xhr = new XMLHttpRequest();

checkLocalStorage();

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/");
xhr.onreadystatechange = function () {
  // проверяем статус запроса и статус ответа 
  if (xhr.readyState === 4 && xhr.status === 200) {
    items.innerHTML = "";
    const valute = JSON.parse(xhr.responseText).response.Valute;
    loader.classList.remove("loader_active");
    for (let key in valute) {
      items.innerHTML += `<div class="item">
                            <div class="item__code">${valute[key].CharCode}</div>
                            <div class="item__value">${valute[key].Value}</div>
                            <div class="item__currency">руб.</div>
                          </div>`
    }
    localStorage.setItem("valute", JSON.stringify(valute))
  }
}

xhr.send();

function checkLocalStorage() {
  if (localStorage.getItem("valute")) {
    Object.values(JSON.parse(localStorage.getItem("valute"))).forEach(elem => items.innerHTML += 
      `<div class="item">
        <div class="item__code">${elem.CharCode}</div>
        <div class="item__value">${elem.Value}</div>
        <div class="item__currency">руб.</div>
      </div>`);
  }
}
