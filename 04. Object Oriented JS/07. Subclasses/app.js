
class Person {

    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        return `Hello! My name is ${this.firstName} ${this.lastName}.`;
    }
}

class Customer extends Person {

    constructor(firstName, lastName, phone, membership) {

        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }
    static getMembershipCost() {

        return 500;
    }
}

const john = new Customer('John', 'Wick', '555-0000', 'standard');
console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());
