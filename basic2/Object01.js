//singletone
//Object.create

// object literals

const mysym = Symbol("key1")

const JsUser = {
    name: "Jagruti",
    "full Name": "Jagruti Patil",
    [mysym]:"mykey1",
    age:19,
    location:"Amalner",
    email:"Jagruti@123.com",
    isLoggrdIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full Name"])
// console.log(JsUser[mysym])

JsUser.email ="jagruri@rcpit,com"
// Object.freeze(JsUser)
JsUser.email ="Jagruti@1537.com"
// console.log(JsUser)
JsUser.greeting = function(){
    console.log("Hello Js user")
}
JsUser.greeting2=function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())