const editor = document.getElementById("editor");
const clearButton = document.querySelector(".clear");

checkLocalStorage();

editor.addEventListener("input", () => {
  localStorage.setItem("editor", `${editor.value}`)
})

clearButton.addEventListener("click", () => {
  editor.value = "";
  localStorage.removeItem("editor");
})

function checkLocalStorage() {
  if (localStorage.getItem("editor")) {
    editor.value = localStorage.editor;
  }
}