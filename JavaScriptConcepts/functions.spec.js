//Block of code -> Function

/*
var - global level/function level

let - global/block level - {}

const - cant change in future
*/

function add(a, b) {
    return a + b
}
console.log(add(2, 3))

/**
 * Functions who dont have name called Anonymous functions
 */

// let sumOfInt = function (c, d) {
//     return c + d
// }
// console.log(sumOfInt(2, 3))

// or

let sumOfInt = (c, d) => c + d // fat boy short operator
console.log(sumOfInt(5, 6))