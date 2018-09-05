
// Event Bubbling (moves up the DOM)

const cardTitle = document.querySelector('.card-title');
const cardContent = document.querySelector('.card-content');
const card = document.querySelector('.card');

// cardTitle.addEventListener('click', () => {

//     console.log('card-title');
// });

// cardContent.addEventListener('click', () => {

//     console.log('card-content');
// });

// card.addEventListener('click', () => {

//     console.log('card');
// });

// Event Delegation (moves down the DOM)

const dltItem = document.querySelector('.delete-item');

function deleteItem(e) {

    if(e.target.parentElement.classList.contains('delete-item')) {

        e.target.parentElement.parentElement.remove();
        console.log('delete item');
    }
}

document.body.addEventListener('click', deleteItem);

// dltItem.addEventListener('click', deleteItem)