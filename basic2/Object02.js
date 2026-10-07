//const tinderUser = new Object()
const childshild = {}
childshild.id = "123abc"
childshild.name ="Jagruti"
childshild.isLoggedIn =false
console.log(childshild)

const regularUser = {
    email:"Jagruti@123.com",
    fullname: {
        userfullname: {
            firstname:"Jagruti",
            lastname:"Patil"
        }

    }
}
// console.log(regularUser.fullname.userfullname.firstname)
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",2:"b"}
const obj4 = {5:"a",6:"b"}

const obj3 = {obj1,obj2}
const obj5 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3)
// console.log(obj5)

const usres = [
    {
        id:1,
        email:"Jagruti@123.com"
    },
      {
        id:1,
        email:"Jagruti@123.com"
    },
      {
        id:1,
        email:"Jagruti@123.com"
    },
]
users[1].email
// console.log(childshild)