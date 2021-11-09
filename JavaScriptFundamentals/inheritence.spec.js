/**
 * Inheritence is the main pillar in OOPS
 *
 * one class(sub) can in herit the properties of another class(parent)
 */


import Person from './classes.spec';

class Pet extends Person {

    get location() {
        return "BlueCross"
    }

    constructor(firstName, lastName) {
        super(firstName, lastName) // call the parent class constructor
        this.firstName = firstName
        this.lastName = lastName
    }
}
let pet = new Pet("Sony", "Tony")
pet.fullName()
console.log(pet.location)