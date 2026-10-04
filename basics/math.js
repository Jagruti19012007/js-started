const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)
// console.log(balance.tofixed(1))

const otherNumber = 123.890
console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString())
//+++++++++++  MATH ++++++++++++++++//
console.log(Math)
console.log(Math.abs(-5))
console.log(Math.round(3,8))
console.log(Math.ceil(3.1))
console.log(Math.floor(3.1))
console.log(Math.min(4,3,1,5))
console.log(Math.max(5,6.8,3))

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max - min + 1)) + min)