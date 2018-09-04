
let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;

// Node Types //
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

val = list.childNodes[1].nodeType;


// get children element nodes
val = list.children; // returns an HTML Collection (just the elements)
val = list.children[1];
val = list.children[1].textContent = 'Hello';

// get children of children
val = list.children[3].children[0];

// first child
val = list.firstChild;
val = list.firstElementChild;

// last child
val = list.lastChild;
val = list.lastElementChild;

// count child elements
val = list.childElementCount;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;

// get parent of parent
val = listItem.parentElement.parentElement;

// get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling; 
val = listItem.nextElementSibling.nextElementSibling; 



console.log(val);