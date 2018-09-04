
// REPLACE ELEMENTS //
//================================================================

// create element
const newHeading = document.createElement('h2');
// add id
newHeading.id = 'task-title';
// new text node
newHeading.appendChild(document.createTextNode('Task List'));

// get the old heading
const oldHeading = document.getElementById('task-title');
// parent
const cardAction = document.querySelector('.card-action');
// replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT //
//================================================================
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove list item
lis[0].remove();

// remove child element
list.removeChild(lis[3]);

// CLASSES AND ATTRIBUTES //
//================================================================

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// classes
val = link.className;
val = link.classList; // all the class names
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('href');
link.removeAttribute('title');
val = link;

console.log(val);