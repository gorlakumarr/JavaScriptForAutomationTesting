// Object is collection of properties

let person = {
    firstName: 'Tim',
    lastName: 'Sony',
    age: 24,
    fullName: function () {
        console.log(this.firstName + this.lastName)
    }
}
console.log(person.fullName())
console.log('firstName :', person.firstName)
console.log('firstName :', person['firstName'])

person.firstName = 'Rob'
console.log(person)// { firstName: 'Rob', lastName: 'Sony' }

person.gender = 'male'
console.log(person)// { firstName: 'Rob', lastName: 'Sony', gender: 'male' } 

delete person.gender
console.log(person) // { firstName: 'Rob', lastName: 'Sony' }

console.log('gender' in person) // false

for (let key in person) {
    console.log(person[key])
}