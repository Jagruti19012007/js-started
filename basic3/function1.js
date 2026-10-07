function sayMyName(){
    console.log("J");
    console.log("A");
    console.log("G");
    console.log("R");
    console.log("U");
    console.log("T");
    console.log("I");
}
sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }
function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return number1 + number2
}
console.log(addTwoNumbers(2,6))

function loginUserMassage(username){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return`${username} just logged in`
}
console.log(loginUserMassage("jagu"))

function calculatecartprice(num1){
    return num1
}
console.log(calculatecartprice())
const user = {
    username: "jagruti",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200, 400, 500, 1000]));