console.log("Hello World")

/**
 * Variables :
 * 
 * 1. number
 * 2. string
 * 3. null (is Object Type)
 * 4. undefined
 * 5. boolean
 */

/**
 * previously (var) now (let,const) from ES6 version
 *
 */

/**
 * In Java Script inbuilt will take care the nature of the varibale at runtime
 * In Java we need to mention the nature of the variable while initializaing
 * int a = 4
 * String b = "sample" 
*/

/*
This also we can use for comments
Sample
*/

//These will not execute

let a = 4;
console.log(a)
console.log(typeof (a))

let b = 4.5;
console.log(b)
console.log(typeof (b))


let c = "Kumar";
console.log(c)
console.log(typeof (c))

let required = true;
console.log(required)
console.log(typeof (required))

let e
console.log(e)
console.log(typeof (e))

let f = null
console.log(f)
console.log(typeof (f))


let ab = a + b
console.log(ab)
console.log(typeof (ab))

// !  is negation operator
console.log(!required)

/**
 * let vs var
 * we cant redeclare varibale with let keyword but possible with var
 *
 * let a, let b, let c already declared, if you try to create let c again in program in another place,
 * you will get error "identifier c already declared".
 *
 * But if you do : let a, let b, var c already declared,  if you try to create var c again in program in another place,
 * you will be not thrown any error. Program will execute succcessfully.
 */


c = a + b
console.log(c)
console.log(typeof (c))
/**
 * let accepted reassignment but not redeclaration
 * var accepted reassignment and redeclaration
 */

const num = 1
// num = 2
// const num = 2
console.log(num)

/**
 * const doesnt allow reassignment and redeclaration
 */


