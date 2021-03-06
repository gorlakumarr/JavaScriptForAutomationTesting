/**
 * Array Intialization
 */

//One way
let sample = Array(6)

//Another way
let marks = new Array(20, 40, 35, 12, 37, 100)

//Another way
var marksArray = [20, 40, 35, 12, 37, 100]
console.log(marksArray[0]) //20
marksArray[1] = 50;
console.log(marksArray) //[20, 50, 35, 12, 37, 100]

console.log(marksArray.length)//6

marksArray.push(65) //Added new element at the end of array
console.log(marksArray) //[20, 50, 35, 12, 37, 100,65]
console.log(marksArray.length)//7

marksArray.pop()//Delete the last element
console.log(marksArray) //[20, 50, 35, 12, 37, 100]
console.log(marksArray.length)//6

marksArray.unshift(1) // Added element at the beginning of array
console.log(marksArray) //[1, 20, 50, 35, 12, 37, 100]
console.log(marksArray.length)//7

console.log(marksArray.indexOf(1)) //0
console.log(marksArray.includes(50)) //true
console.log(marksArray.includes(1111)) //false

console.log('Marks :', marksArray)
subMarks = marksArray.slice(2, 5)
console.log('Submarks :', subMarks)

let sum = ''
for (let k = 0; k < marksArray.length; k++) {
    console.log(marksArray[k]);
    sum = +marksArray[k]
}
console.log('Sum of elements in Marks Array :', sum);

let total = marksArray.reduce((sumOfArray, mark) => sumOfArray + mark, 0)
console.log(total)

var scores = [12, 13, 14, 16, 17, 18]
let evenNumbersArray = scores.filter(score => score % 2 == 0)
console.log('Even number :', evenNumbersArray)//[ 12, 14, 16, 18 ]

/**
 * Create new even number array and multiply each value with 3 and sum them
 */
let mappedArray = evenNumbersArray.map(val => val * 3)
console.log('Even number * 3 :', mappedArray)// [ 36, 42, 48, 54 ]

let sumValue = mappedArray.reduce((sum, val) => sum + val)
console.log('Sum of Even number * 3 :', sumValue)//180
console.log('-----------------------------------------------')

var values = [12, 13, 14, 16, 17, 18]
let sumofCondition = values.filter(val => val % 2 == 0).map(el => el * 3).reduce((sumVal, val) => sumVal + val)
console.log('Sum of Even number * 3 :', sumofCondition)//180

console.log('-----------------------------------------------')

let fruits = ["Banana", "Mango", "Pomogrante", "Apple"]
fruits.sort() //Ascending oder of only string
console.log(fruits)

fruits.reverse() //Descending oder of only string
console.log(fruits)

var numbers = [18, 12, 15, 13, 16]
numbers.sort()
console.log(numbers)

numbers.sort(function (a, b) {
    return a - b // min diff : push to beginning
})
console.log('ascending', numbers)// ascending 


numbers.sort(function (a, b) {
    return b - a
})
console.log('decending', numbers)// decending 