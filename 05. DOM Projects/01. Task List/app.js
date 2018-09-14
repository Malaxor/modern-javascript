
// UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// add a task
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
    // store to local storage
    storeTaskInLocalStorage(taskInput.value);
    // clear the input
    taskInput.value = '';
}

// store task
function storeTaskInLocalStorage(task) {

    let tasks;

    if(localStorage.getItem('tasks') === null) {

      tasks = [];
    } 
    else {

      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {

    let tasks;

    if(localStorage.getItem('tasks') === null) {

      tasks = [];

    } 
    else {

      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.forEach(task => {
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Create text node and append to li
      li.appendChild(document.createTextNode(task));
      // Create new link element
      const link = document.createElement('a');
      // Add class
      link.className = 'delete-item secondary-content';
      // Add icon html
      link.innerHTML = '<i class="fas fa-trash-alt"></i>';
      // Append the link to li
      li.appendChild(link);
  
      // Append li to ul
      taskList.appendChild(li);
    });
  }
// remove a task from local storage
function removeTaskFromLocalStorage(taskItem) {

    let tasks;

    if(localStorage.getItem('tasks') === null) {

      tasks = [];

    } 
    else {

      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task, index) => {
        
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// remove a task
function removeTask(e) {
    // event delegation
    if(e.target.parentElement.classList.contains('delete-item')) {

        if(confirm('Are you sure?')) {

            e.target.parentElement.parentElement.remove();
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// remove ALL tasks
function clearTasks(e) {
    // easy way, but not faster
    // taskList.innerHTML = '';
    
    // faster method
    while(taskList.firstChild) {

        taskList.removeChild(taskList.firstChild);
    }
    clearTasksFromLocalStorage();
}
// clear tasks from local storage
function clearTasksFromLocalStorage() {

    localStorage.clear();
}

// filter tasks
function filterTasks(e) {

    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(task => {

        const item = task.firstChild.textContent.toLowerCase();

        if(item.indexOf(text) != -1) {

            task.style.display = 'block';
        }
        else {
            
            task.style.display = 'none';
        }
    });
}

(function loadEventListeners() {
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // add task
    form.addEventListener('submit', addTask);
    // remove task
    taskList.addEventListener('click', removeTask);
    // delete all tasks
    clearBtn.addEventListener('click', clearTasks);
    // filter tasks
    filter.addEventListener('keyup', filterTasks);
}());