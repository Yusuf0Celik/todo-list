console.log("main.js loaded");

const addTodoBtn = document.querySelector(".add-todo");
const checkTodoBtn = document.querySelector(".list-done");
const todoInput = document.querySelector(".todo-input");
const list = document.querySelector(".todo-list");
const input = document.querySelector(".input");
const filterSelect = document.querySelector(".filter-todos");

document.addEventListener("DOMContentLoaded", getTodos);
addTodoBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keyup", enterTodo);
filterSelect.addEventListener("click", filterTodos)

function addTodo(event) {
  event.preventDefault()
  // Prevent
  const todoListItem = document.createElement("li");
  todoListItem.classList.add("list-item")
  // ^Create Todo List Item^
  const todoText = document.createElement("div");
  todoText.classList.add("list-text")
  todoText.innerText = input.value;
  // ^Create Todo Text div^
  saveLocalTodos(todoInput.value )
  // ^Add todo to local storage^
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
  const item = e.target;
  if (item.classList.contains("list-remove")) {
    item.parentElement.remove()
  }
  // remove the parent of the button aka list-item
  const todo = item.parentElement;
  removeLocaltodos(todo);
}

function checkTodo(e) {
  if (e.target.parentElement.classList.contains("completed")) {
    // ^check if div has class completed^
    e.target.parentElement.classList.remove("completed")
    // ^if it has completed remove completed^
  } else {
    e.target.parentElement.classList.add("completed")
    // ^if it doesnt have completed add completed^
  }
}

function filterTodos(e) {
  const todos = list.childNodes;
  todos.forEach(function(todos) {
    switch (e.target.value) {
      // ^als je klikt op de target kijkt hij naar de value^
      case "all":
        // ^als de value all is doet hij dit^
        todos.style.display = "flex";
        break;
        // break eindigd de case
        case "completed":
        // ^als de value completed is doet hij dit^
        if (todos.classList.contains("completed")) {
          todos.style.display = "flex";
        } else {
          todos.style.display = "none";
        }
        break;
        case "uncompleted":
        // ^als de value uncompleted is doet hij dit^
        if (!todos.classList.contains("completed")) {
          todos.style.display = "flex";
        } else {
          todos.style.display = "none";
        }
        break;
    }
  })
}

function enterTodo(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTodoBtn.click();
  }
}

function saveLocalTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    // ^Check of ik local todos heb^
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  // ^Als ik local todos heb breng ze terug^
  const todo = input.value
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos))
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    // ^Check of ik local todos heb^
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  // ^Als ik local todos heb breng ze terug^
  todos.forEach( function(todo) {
    const todoListItem = document.createElement("li");
    todoListItem.classList.add("list-item")
    // ^Create Todo List Item^
    const todoText = document.createElement("div");
    todoText.classList.add("list-text")
    todoText.innerText = todo;
    // ^Add todo to local storage^
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
  });
}

function removeLocaltodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    // ^Check of ik local todos heb^
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}