"use strict"

const editor = document.getElementById("editor");
const clearButton = document.querySelector(".clear");

editor.value = localStorage.getItem("editor")

editor.addEventListener("input", () => {
  localStorage.setItem("editor", `${editor.value}`)
})

clearButton.addEventListener("click", () => {
  editor.value = "";
  localStorage.removeItem("editor");
})