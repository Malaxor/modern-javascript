
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click Event
clearBtn.addEventListener('click', runEvent);

// Double Click Event
clearBtn.addEventListener('dblclick', runEvent);

// Mouse Down Event (hold down button)
clearBtn.addEventListener('mousedown', runEvent);

// Mouse Up Event (fires when mouse button is released)
clearBtn.addEventListener('mouseup', runEvent);

// Mouse Enter Event
card.addEventListener('mouseenter', runEvent);

// Mouse Leave Event
card.addEventListener('mouseleave', runEvent);

// Mouse Over Event
card.addEventListener('mouseover', runEvent);

// Mouse Out Event
card.addEventListener('mouseout', runEvent);

// Mouse Move Event
card.addEventListener('mousemove', runEvent);


// Event Handler
function runEvent(e) {

    console.log(`Event Type: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}