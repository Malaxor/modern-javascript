
// Person constructor
function Person(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;
}
// greeting
Person.prototype.greeting = function() {

    return `Hello, ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');
console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {

    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}
// inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// make Customer.prototype return Customer()
Customer.prototype.constructor = Customer;


// create customer
const customer1 = new Customer('Tom', 'Smith', '555-0000', 'standard');
console.log(customer1);

// customer greeting
Customer.prototype.greeting = function() {

    return `Hello, ${this.firstName} ${this.lastName}. Welcome to our company.`;
}

console.log(customer1.greeting());