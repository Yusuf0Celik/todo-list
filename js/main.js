console.log("main.js loaded");

const addTodoBtn = document.querySelector(".add-todo");
const checkTodoBtn = document.querySelector(".list-done");
const removeTodoBtn = document.querySelector(".list-remove");

addTodoBtn.addEventListener("click", addTodo);
// checkTodoBtn.addEventListener("click", checkTodo);
if (removeTodoBtn){
removeTodoBtn.addEventListener("click", removeTodo);
}

function addTodo(event) {
  event.preventDefault();
  // ^Prevent form from submitting^
  const list = document.querySelector(".todo-list");
  const input = document.querySelector(".input");
  // get Todo List and input value
  const todoListItem = document.createElement("li");
  todoListItem.classList.add("list-item")
  // ^Create Todo List Item^
  const todoText = document.createElement("div");
  todoText.classList.add("list-text")
  todoText.innerText = input.value;
  // ^Create Todo Text div^
  const buttonDone = document.createElement("button");
  buttonDone.classList.add("list-done")
  // // ^Done button^
  const buttonRemove = document.createElement("button");
  buttonRemove.classList.add("list-remove")
  // // ^Remove button^
  const checkIcon = document.createElement("i");
  checkIcon.classList.add("bx","bx-check")
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("bx", "bx-trash")
  // // ^Icons^
  // ^Create Todo buttons^
  list.appendChild(todoListItem);
  todoListItem.appendChild(todoText);
  todoListItem.appendChild(buttonDone);
  todoListItem.appendChild(buttonRemove);
  buttonDone.appendChild(checkIcon);
  buttonRemove.appendChild(trashIcon);
  // ^Append all children^
  input.value = "";
  // ^Remove input value on submit^
}

function removeTodo() {
  
}