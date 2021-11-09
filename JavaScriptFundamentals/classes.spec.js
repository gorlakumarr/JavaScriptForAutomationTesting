export default class Person {

    //Class Var
    age = 25
    // location='Canada'

    get location() {
        return 'canada'
    }
}

/**
 * Constructor is method which executes by default when you create object of the class 
 */

constructor(firstName, lastName) //instance var
{
    this.firstName = firstName
    this.lastName = lastName
}

//Method
fullName()
{
    console.log(this.firstName + this.lastName)
}

let person = new Person("Tim", "Josh")
console.log(person.age)
console.log(person.location)
console.log(person.fullName())