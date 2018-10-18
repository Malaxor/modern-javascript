
function EventObserver() {

    this.observers = [];
}

EventObserver.prototype = {

    subscribe: function(fn) {

        this.observers.push(fn);
        console.log(`You're now subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn) {

        this.observers = this.observers.filter(item => item !== fn);
        console.log(`You're now unsubscribed to ${fn.name}`);
    },
    fire: function() {

        this.observers.forEach(item => item.call());
    }
}

const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', () => {

    click.subscribe(getCurMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click', () => {

    click.unsubscribe(getCurMilliseconds);
});
document.querySelector('.fire').addEventListener('click', () => {

    click.fire();
});
// Click Handler
const getCurMilliseconds = function() {

    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}