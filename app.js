//selectors
let inputSelect = document.querySelector(".todo-input");
const btnSubmit = document.querySelector(".todo-submit");
const ulTodo = document.querySelector(".todos");

//event handlers
btnSubmit.addEventListener("click", formSubmit);
ulTodo.addEventListener("click", deleteTodo);

//function
function formSubmit(event) {
  event.preventDefault();

  //create li and append it to ul
  const wraptodo = document.createElement("div");
  wraptodo.classList.add("todo-parent");
  const eachTodos = document.createElement("li");

  //delete btn
  const dltBtn = document.createElement("button");
  dltBtn.innerText = "delete";
  dltBtn.classList.add("btn-delete");

  //edit btn
  const editBtn = document.createElement("button");
  editBtn.innerText = "edit";
  editBtn.classList.add("btn-edit");

  //append
  eachTodos.innerText = inputSelect.value;
  eachTodos.appendChild(editBtn);
  eachTodos.appendChild(dltBtn);

  wraptodo.appendChild(eachTodos);
  ulTodo.appendChild(wraptodo);

  //clear input
  inputSelect.value = "";
}

//deletefunction
function deleteTodo(e) {
  const item = e.target;
  if (item.classList[0] === "btn-delete") {
    item.parentNode.parentNode.remove();
  }
  if (item.classList[0] === "btn-edit") {
    const updateinput = item.parentElement.childNodes[0].textContent;
    inputSelect.value = updateinput;
    item.parentNode.parentNode.remove();
  }
}
