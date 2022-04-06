class Person2 {
    private firstName = ""; //(2)

    private lastName = "";

     constructor(firstName, lastName) {

        this.firstName = firstName;

        this.lastName = lastName;

    }
    // constructor(private fname, private lname) {

    // }
    getName() {

        console.log(this.firstName + "    " + this.lastName);

    }

}
let p1 = new Person('ss', 'cc');
