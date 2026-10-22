let tasks = [];
let nextId = 1;

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskMessage = document.getElementById("taskMessage");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = taskInput.value.trim();

  if (title === "") {
    taskMessage.textContent = "Please enter a task.";
    return;
  }

  tasks.push({ id: nextId, title: title, completed: false });
  nextId++;
  taskInput.value = "";
  taskMessage.textContent = "";
  renderTasks();
});

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function (task) {
    const item = document.createElement("li");
    const taskText = document.createElement("span");
    const deleteButton = document.createElement("button");

    taskText.textContent = task.title;
    taskText.className = task.completed ? "completed" : "";
    taskText.addEventListener("click", function () {
      task.completed = !task.completed;
      renderTasks();
    });

    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", function () {
      tasks = tasks.filter(function (currentTask) {
        return currentTask.id !== task.id;
      });
      renderTasks();
    });

    item.appendChild(taskText);
    item.appendChild(deleteButton);
    taskList.appendChild(item);
  });

  const completedCount = tasks.filter(function (task) {
    return task.completed;
  }).length;
  document.getElementById("taskCount").textContent =
    "Tasks: " + tasks.length + " | Completed: " + completedCount;
}
