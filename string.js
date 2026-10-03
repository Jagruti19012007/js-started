const name = "Jagruti"
const repoCount = 50 
console.log(name + repoCount)
console.log('Hello My name is ${name} and my repo count is ${repoCount}' )

const gameName = new String('Jagruti-jp-com')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf("t"))

const newstring = gameName.substring(0,5)
console.log(newstring)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "   jagruti   "
console.log(newStringOne)
console.log(newStringOne.trim())