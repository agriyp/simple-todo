// Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');


// Event listener
todoButton.addEventListener('click', addTodo);



// Function
function addTodo(event){
    event.preventDefault();

    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create li
    const newTodoLi = document.createElement('li');
    newTodoLi.innerText = todoInput.value;
    newTodoLi.classList.add('todo-item');
    todoDiv.appendChild(newTodoLi);
    //check mark btn
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class="fas fa-check-square"></i>';
    completeBtn.classList.add('complete-btn');
    todoDiv.appendChild(completeBtn);   
    //check trash btn
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);  
    // append to list
    todoList.appendChild(todoDiv);
    //clear todo input
    todoInput.value = '';
}