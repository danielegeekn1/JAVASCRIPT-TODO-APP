//task js
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");
//event listeners
addTask.addEventListener("click", () => {
  let task = document.createElement("ul");
  task.classList.add("task");
  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  //check-btn
  let checkBtn = document.createElement("button");
  checkBtn.innerHTML = `<i class="fa-solid fa-check" >+</i>`;
  checkBtn.classList.add("checkTask");
  task.appendChild(checkBtn);

  //delete btn
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can" >-</i>`;
  deleteBtn.classList.add("deleteTask");
  task.appendChild(deleteBtn);

  //conditions
  if (inputTask.value === "") {
    alert("Please enter a task");
  } else {
    taskContainer.appendChild(task);
  }
  inputTask.value = "";
  checkBtn.addEventListener("click", () => {
    checkBtn.parentElement.style.textDecoration = "line-through";
  });
  deleteBtn.addEventListener("click", (e) => {
    let target = e.target;
    target.parentElement.remove();
  });
});
