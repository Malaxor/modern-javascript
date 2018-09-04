
// create element
const li = document.createElement('li');
// add class
li.className = 'collection-item';
// add id (optional)
li.id = 'new-collection-item';
// add attribute
li.setAttribute('title', 'New Item');
// create text node, and append
li.appendChild(document.createTextNode("I'm a new li"));
// create new link element
const link = document.createElement('a');
// add link classes
link.className = 'delete-item secondary-content';
// add icon HTML
link.innerHTML = `<i class='fa fa-remove'></i>`;
// append link into li
li.appendChild(link);
// append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);