

const user = {
    username: "Jagruti",
    price: 999,

    welcomeMassage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
user.welcomeMassage();
user.username = "Jagu"
user.welcomeMassage();

console.log(this);

const chai = function () {
    let username = "Jagruti"
    console.log(this.user);
}
chai()
const chai2 = () => {
    let username = "Jagruti"
    console.log(this);
}
chai2()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }


const addTwo = (num1,num2) => num1 + num2
console.log(addTwo(2,3));
const addOne = (num1,num2) => (num1 + num2)
console.log(addOne(1,2))
const addThree = (num1,num2) => ({username: "Jagruti"})
console.log(addThree())

// const myArray = [2,3,4,45]

// myArray.forEach(() => {})