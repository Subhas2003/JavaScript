//Objects are two type
//1.Singleton
//2.object Literature

//**************************object literals*********************

const mysym=Symbol("key1")

const JsUser={
    name:"Subhas",
    age:23,
    "myNam":"Subhas Munain",
    [mysym]:"MyKey2",
    location:"Kolkata",
    email:"S@gmail.com",
    isLoggedIn:false,
    lastLoginday:["Monday","Saterday"]
}

// console.log(JsUser.email)
// console.log(JsUser['email'])
// console.log(JsUser['myNam'])
// console.log(JsUser[mysym])

JsUser.email="m@gmail.com"
// console.log(JsUser)
// Object.freeze(JsUser)
JsUser.email="scm@gmail.com"
// console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello JS User")
}
JsUser.greetingTwo=function(){
    console.log(`Hello js user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

let mydate=new Date()
console.log(mydate.toLocaleString())
