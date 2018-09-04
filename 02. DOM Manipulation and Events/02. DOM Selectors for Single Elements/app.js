// SINGLE ELEMENT SELECTORS //
//====================================================================

// document.getElementById()
console.log(document.getElementById('task-title'));
// set the element into a variable
const taskTitle = document.getElementById('task-title');

// get attributes from the element
// console.log(document.getElementById('task-title').id);

// change styling (use only for dynamic functionality)
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

// change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = `<span style='color:red'>Task List</span>`

// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
// grabs the first one
console.log(document.querySelector('h5'));
// sub-classes (nested elements)
document.querySelector('ul li').style.color = 'blue';
// grab pseudo-classes
document.querySelector('li:last-child').style.color = 'red';
// grab a specific element in a list
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(4)').textContent = 'Hello, World!';
// won't work for all odd elements because it's a single selector
document.querySelector('li:nth-child(odd)').style.background = '#ccc';