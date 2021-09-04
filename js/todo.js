const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("#todo-list");

const toDos_key = "toDos";

let toDos = [];

function saveTodos(){
  localStorage.setItem(toDos_key, JSON.stringify(toDos));
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos =  toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos()
}

function paintTodo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function onTodoSubmit(event){
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text:newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", onTodoSubmit);

const savedTodos = localStorage.getItem(toDos_key);

if(savedTodos !==null){
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
