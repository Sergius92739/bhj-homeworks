const tasks = document.getElementById("tasks");
const tasksInput = tasks.querySelector(".tasks__input");
const form = tasks.querySelector(".tasks__control");
const taskList = tasks.querySelector(".tasks__list");
const btnAdd = tasks.querySelector(".tasks__add");
let localTaskList = [];

checkLocalTaskList();

form.addEventListener("submit", e => {
  e.preventDefault();
})

tasksInput.addEventListener("keyup", e => {
  e.preventDefault();
  e.code !== "Enter" ? "" : addTasks();
})

btnAdd.addEventListener("click", () => {
  addTasks();
})

taskList.addEventListener("click", e => {
  if (e.target.classList.contains("task__remove")) {
    e.target.closest(".task").remove();
    const parseJSON = JSON.parse(localStorage.getItem("localTaskList"));
    parseJSON.forEach(elem => {
      if (elem.taskText == e.target.closest(".task").querySelector(".task__title").textContent) {
        parseJSON.splice(parseJSON.indexOf(elem), 1);
        localStorage.setItem("localTaskList", JSON.stringify(parseJSON));
      }
    })
  }
})

function addTasks() {
  if (tasksInput.value == "") return;
  const task = document.createElement("div");
  task.className = "task";
  task.innerHTML = `<div class="task__title">${tasksInput.value}</div>
                    <a href="#" class="task__remove">&times;</a>`;
  const taskText = tasksInput.value;
  taskList.append(task);
  form.reset();
  localTaskList.push({ taskText: taskText });
  localStorage.setItem("localTaskList", JSON.stringify(localTaskList));
}

function checkLocalTaskList() {
  if (localStorage.getItem("localTaskList")) {
    localTaskList = JSON.parse(localStorage.getItem("localTaskList"));
    showLocalTasks();
  }
}

function showLocalTasks() {
  localTaskList.forEach(elem => {
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<div class="task__title">${elem.taskText}</div>
                      <a href="#" class="task__remove">&times;</a>`;
    taskList.append(task);
  });
}