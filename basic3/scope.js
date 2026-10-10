var c = 300
let a = 300
if(true){
    let a =10
    const b = 20
    console.log("Inner:",b);
}
console.log(c)

function one(){
    const username = "Jagruti"
    function two(){
        const website = "Childshild"
        console.log(username) ; 
    }
    // console.log(website);
    two()
}

if(true){
    const username ="Jagruti"
    if(username==="Jagruti"){
        const website = "Childshild"
        console.log(username + website);
    }
    // console.log(website);
}

// 

console.log(addone(5))

function addone(num){
    return num + 1
}

console.log(addTwo ())

const addTwo = function(num){
    return num + 2
}