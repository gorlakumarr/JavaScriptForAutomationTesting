const flag = true

console.log('----------------------------------------')
/**
 * Conditional statements
 */
if (!flag) {
    console.log('flag', flag)
    console.log('condition satisfied')
} else {
    console.log('flag', flag)
    console.log('condition not satisfied')
}
console.log('----------------------------------------')

/**
 * While loop : untill condition becomes false
 */
let i = 0
while (i <= 10) {
    console.log(i)
    i++
}

let check = true
while (check) {
    console.log(check)
    check = false;
}
console.log('----------------------------------------')

/**
 * Do While loop :One round of loop will execute before check the condition in while
 */
let j = 0
do {
    console.log('DoWhile loop :', j)
    j++
} while (j <= 10);
console.log('Post DoWhile loop :', j)
console.log('----------------------------------------')

/**
 * For loop : Use it when you know how many number of times you loop
 */
for (let k = 0; k <= 10; k++) {
    console.log('For loop :', k)
}
console.log('----------------------------------------')

/**
 * print first 3 values from 1 to 100 which are multiple values of 2 and 5
*/
let counter = 0
for (let l = 1; l <= 100; l++) {
    if (l % 2 == 0 && l % 5 == 0) {
        counter++
        console.log('multiles of 2 and 5 :', l)
        if (counter == 3) {
            break
        }
    }
}
console.log('----------------------------------------')