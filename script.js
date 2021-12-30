// Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');


// Event listener
// add
todoButton.addEventListener('click', addTodo);
// delete
todoList.addEventListener('click', deleteCheck);



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


function deleteCheck(e){
    // console.log(e.target); //membaca semua yang diklik pada todolist
    const item = e.target;
    // console.log(item.classList); 
    // delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    } else if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}