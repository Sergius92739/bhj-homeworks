"use strict"

const signin = document.getElementById("signin");
const form = document.getElementById("signin__form");
const loginBtn = document.getElementById("signin__btn");
const welcome = document.getElementById("welcome");
const userID = document.getElementById("user_id");
const exitBtn = document.getElementById("go_out__btn");

exitBtn.style.background = "red";
exitBtn.style.display = "none";
exitBtn.addEventListener("click", () => {
  localStorage.removeItem("userID");
  welcome.classList.remove("welcome_active");
  signin.classList.add("signin_active");
  exitBtn.style.display = "none";
})

checkLocalStorage("userID");

form.addEventListener("submit", e => {
  e.preventDefault();
})

loginBtn.addEventListener("click", () => {
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const response = JSON.parse(xhr.responseText);
      if (response.success) {
        localStorage.setItem("userID", `${response.user_id}`);
        signin.classList.remove("signin_active");
        welcome.classList.add("welcome_active");
        userID.innerText = response.user_id;
        exitBtn.style.display = "";
        form.reset()
      } else {
        form.reset();
        alert("Неверный логин/пароль")
      }
    }
  }
  xhr.send(formData);
})

function checkLocalStorage(key) {
  if (localStorage.getItem(key)) {
    welcome.classList.add("welcome_active");
    userID.innerText = localStorage.getItem(key);
    exitBtn.style.display = "";
  } else {
    signin.classList.add("signin_active");
  }
}