var Person2 = /** @class */ (function () {
    function Person2(firstName, lastName) {
        this.firstName = ""; //(2)
        this.lastName = "";
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // constructor(private fname, private lname) {
    // }
    Person2.prototype.getName = function () {
        console.log(this.firstName + "    " + this.lastName);
    };
    return Person2;
}());
var p1 = new Person('ss', 'cc');
