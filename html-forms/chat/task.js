const widget = document.querySelector(".chat-widget");
const sideText = widget.querySelector(".chat-widget__side-text");
const input = widget.querySelector(".chat-widget__input");
const widgetMes = widget.querySelector(".chat-widget__messages");
const arrMes1 = [
  "Добрый день! До свидания!",
  "Вы ни купили у нас ни одного товара для того, чтобы так разговаривать! ",
  "К сожалению, все операторы заняты, не звоните нам больше!",
  "Мы ни чего не будем вам продавать !!!",
  "Кто тут???",
  "Мы ущё не проснулись, позвоните нам через 10 лет.",
  "Всего вам доброго! Больше не звоните!"
]
const arrMes2 = [
  "Ну и чё мы молчим?",
  "Долго молчять будем?",
  "Ты забыл русские буквы?",
  "Напиши уже что-нибудь!",
  "Уснул что-ли?"
]

let waitingTime;

sideText.addEventListener("click", () => {
  widget.classList.add("chat-widget_active");
  waitingTime = setInterval(botAnswers2, 30000)
})

input.addEventListener("keyup", (e) => {
  if (e.code == "Enter" && input.value !== "") {
    clearInterval(waitingTime)
    userMesage();
    setTimeout(botAnswers1, 1000);
    waitingTime = setInterval(botAnswers2, 30000);
  }
})

function getMes(whose, text) {
  widgetMes.innerHTML += `
  <div class="message ${whose}">
      <div class="message__time">${new Date().toLocaleTimeString().substring(0, 5)}</div>
      <div class="message__text">${text}</div>
  </div>
  `
}

function userMesage() {
  getMes(" message_client", input.value)
  input.value = "";
  autoScroll();
}

function botAnswers1() {
  getMes("", randomMes(arrMes1));
  autoScroll();
}

function botAnswers2() {
  getMes("", randomMes(arrMes2));
  autoScroll();
}

function autoScroll() {
  widgetMes.lastElementChild.scrollIntoView();
}

function randomMes(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}