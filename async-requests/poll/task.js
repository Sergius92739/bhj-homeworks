"use strict"

const poll = document.querySelector(".poll");
const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.onload = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText)
    const title = response.data.title;
    const answers = response.data.answers;
    const id = response.id;
    pollTitle.innerText = title;
    answers.forEach(element => {
      pollAnswers.innerHTML +=
        `<button class="poll__answer">
         ${element}
       </button>
      `
    });

    pollAnswers.addEventListener("click", e => {
      e.target.classList.contains("poll__answer") ? alert("Спасибо, ваш голос засчитан!") : "";
      const xhr1 = new XMLHttpRequest();
      xhr1.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php");
      xhr1.onload = function () {
        if (xhr1.readyState === 4 && xhr1.status === 200) {
          pollAnswers.innerHTML = "";
          const stat = JSON.parse(xhr1.responseText).stat;
          stat.forEach(elem => {
            pollTitle.insertAdjacentHTML("beforeend",
              `<div class="poll__title" id="poll__title">
                ${elem.answer}: ${elem.votes}
               </div>`);
          })
        }
      }
      const index = answers.indexOf(e.target.innerText);
      xhr1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr1.send(`vote=${id}&answer=${index}`);
    })
  } else {
    alert("Упс... Что-то пошло не так...");
  }
}
xhr.send();

