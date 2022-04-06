class Person1 {
    firstName = "";
    lastName = "";

    constructor(firstName, lastName) {
        console.log('i am in a connstructor');
        console.log(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    name() {
        return `${this.firstName} ${this.lastName}`;
    }

    whoAreYou() {
        return `Hi i am ${this.name()}`;
    }
}

// let sandy = new Person ('sandy' , 'allu');
// console.log (sandy);
//   let parveena = new Person ('parveena' , 'shail');
//   console.log (parveena);

class Student1 extends Person1 {
    course;//property
    constructor(firstName, lastName, course) {
        super (firstName,lastName);
        this.course = course;
    }

    // overridding method of method 

    whoAreYou() {
        return `${super.whoAreYou()} and i'm studying $(this.coourse)`;
    }

    getCourseDetails() {
        return `${this.course} is from child class`;
    }

}