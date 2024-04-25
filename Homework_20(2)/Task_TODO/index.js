"use strict";
const taskList = document.getElementById("task__list");
const taskName = document.getElementById("task__input");

function createTask() {
  if (taskName.value.trim() === "") {
    alert("поле завдання порожнє , заповніть його.");
  } else {
    const newTask = document.createElement("li");
    newTask.textContent = taskName.value;
    newTask.style.padding = "5px 0";
    taskList.appendChild(newTask);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Видалити";
    deleteButton.style.marginLeft = "10px";
    newTask.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      taskList.removeChild(newTask);
    });

    taskName.value = "";
  }
}
document.getElementById("taskForm").addEventListener("submit", (event) => {
  createTask();
  event.preventDefault();
});
