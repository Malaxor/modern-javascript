
// document.getElementsByClassName()
// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);

// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listeItems = document.querySelector('ul').getElementsByClassName('colllection-item');
// console.log(listeItems);

// // document.getElementsByTagName()
// let lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);

// lis[1].style.color = 'purple';
// lis[4].textContent = 'PURPLE';

// // convert HTML Collection into array
// lis = Array.from(lis);
// lis.forEach(li => li.textContent='NOT HOTDOG');

// document.querySelectorAll()
// you don't need to convert HTML Collections into array when using querySelectorAll because
// it returns a node list instead of an HTML Collection
// NOTE: can use for loops on HTML Collections // 
const items = document.querySelectorAll('ul.collection li.collection-item');
items.forEach(item => item.textContent='Hello');

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(li => li.style.background = '#ccc');
liEven.forEach(li => li.style.background = 'purple');

console.log(items);