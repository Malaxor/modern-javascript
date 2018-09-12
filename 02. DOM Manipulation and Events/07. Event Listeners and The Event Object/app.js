
const clearTasks = document.querySelector('.clear-tasks');

// // without named function
// clearTasks.addEventListener('click', (e) => {

//     e.preventDefault();
//     console.log('Hello, Morons');
// });

function onClick(e) {

    let val;
    val = e;

    // event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    e.target.innerText = 'Hello';

    // event type
    val = e.type;
    // event timestapm
    val = e.timeStamp;

    
    console.log(val);
}
// wit named function
clearTasks.addEventListener('click', onClick);
 
