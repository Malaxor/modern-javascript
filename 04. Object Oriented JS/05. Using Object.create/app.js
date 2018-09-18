
const personPrototypes = {

    greeting: function() {

        return `Hello, ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {

        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Sue';
mary.age = 30;
mary.getsMarried('Thompson');

const brad = Object.create(personPrototypes, {

    firstName: {value: 'Brad'},
    lastName: {value: 'Johnson'},
    age: {value: 36}
});

brad.getsMarried('Mooie');

console.log(brad);
console.log(brad.greeting());
console.log(mary.greeting());