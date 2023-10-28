class Person {
    //We provide the types in below Object States/Properties
    ssn:number;
    firstName:string;
    lastName:string;
    //We construct our states
    constructor(ssn:number, firstName:string, lastName:string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Create our Object
let object = new Person(6564, "John", "Allan")
console.log(object.getFullName()) //Call the Function/behavior