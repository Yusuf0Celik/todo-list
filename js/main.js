console.log("main.js loaded");

const addTodoBtn = document.querySelector(".add-todo");
const checkTodoBtn = document.querySelector(".list-done");
const todoInput = document.querySelector(".todo-input");

addTodoBtn.addEventListener("click", addTodo);

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
  if (buttonRemove){
    buttonRemove.addEventListener("click", removeTodo);
    }
  // addEventListener for removeTodo
  if (buttonDone){
    buttonDone.addEventListener("click", checkTodo);
  }
  // addEventListener for checkTodo
}

function removeTodo(e) {
  if (e.target.classList.contains("list-remove")) {
    e.target.parentElement.remove() 
  }
  // remove the parent of the button aka list-item
}

function checkTodo(e) {
  if (e.target.parentElement.children[0].classList.contains("todo-checked")) {
    // ^check if div has class todo-checked^
    e.target.parentElement.children[0].classList.remove("todo-checked")
    // ^if it has todo-checked remove todo-checked^
  } else {
    e.target.parentElement.children[0].classList.add("todo-checked")
    // ^if it doesnt have todo-checked add todo-checked^
  }
}