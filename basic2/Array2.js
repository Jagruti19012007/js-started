const Marvel_Heros = ["Thor","Spiderman","Hulk"]
const DC_Heros = ["Batman","Flash","Superman"]

Marvel_Heros.push(DC_Heros)
// console.log(Marvel_Heros)
// console.log(Marvel_Heros[3][1])

const all_Heros = Marvel_Heros.concat(DC_Heros)
// console.log(all_Heros)

const new_Hereo = [...DC_Heros, ...Marvel_Heros]
// console.log(new_Hereo)

const another_array = [1,2,3,[4,3,5],3,[2,3,[4,7]]]
console.log(another_array)
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Jagruti"))
console.log(Array.from("Jagruti"))
console.log(Array.from({name: "jagruti"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));