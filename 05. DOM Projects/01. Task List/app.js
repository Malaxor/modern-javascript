
// UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

function addTask(e) {

    e.preventDefault();
    if(!taskInput.value) {
        alert('Add a task');
    }
    // create new li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fas fa-trash-alt"></i>';
    //append link to the li
    li.appendChild(link);
    // append li to the ul
    taskList.appendChild(li);
    // clear the input
    taskInput.value = '';
}
(function loadEventListeners() {

    form.addEventListener('submit', addTask);
}());