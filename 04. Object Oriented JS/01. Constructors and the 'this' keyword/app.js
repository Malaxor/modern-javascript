
function Person(name, dob) {

    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = () => {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const phil = new Person('Phil', 35);
const john = new Person('John', 70);
const brad = new Person('Brad', '3-4-83' );

console.log(brad.calculateAge());

console.log(brad);