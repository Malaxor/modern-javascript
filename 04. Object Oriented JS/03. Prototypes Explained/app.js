
// Object.prototype

function Person(firstName, lastName, dob) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = () => {
        
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}
// Calculate Age
Person.prototype.calculateAge = function() {
        
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
// Get full name
Person.prototype.getFullName = function() {
    
    return `${this.firstName} ${this.lastName}`;
}

// gets married
Person.prototype.getsMarried = function(newLastName) {

    this.lastName = newLastName;
}


const philip = new Person('Philip', 'Costache', '3-4-83');
const ana = new Person('Ana-Maria', 'Costache', '7-26-84');

console.log(ana);
console.log(philip.calculateAge());
console.log(ana.getFullName());
ana.getsMarried('Molloy')
console.log(ana.getFullName());