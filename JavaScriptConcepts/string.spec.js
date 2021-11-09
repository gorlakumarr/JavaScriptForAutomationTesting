let day = "Tuesday"
let day1 = 'Tuesday'

console.log(day)
console.log(day1)
console.log(day1.length)

console.log(day.slice(1, 4))
console.log(day.indexOf('e'))
console.log(day.split('s'))// [ 'Tue', 'day' ]

let date = '23'
let nextdate = '26'
console.log(parseInt(nextdate) - parseInt(date))

let newDay = day + " is funday"
console.log(newDay)// Tuesday is funday
let val = newDay.indexOf('day')
console.log(val)

let num = 0
while (val !== -1) {
    num++
    val = newDay.indexOf('day', val + 1)
}
console.log(num) //2
console.log()