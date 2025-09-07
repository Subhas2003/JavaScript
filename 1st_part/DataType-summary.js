// primitive

// 7types: String, Number, Boolearn, null, undifined, Symbol, BigInt

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const AnotherId = Symbol("123");

console.log(id === AnotherId);

const bignumber = 95275296521556221n;

//Reference (Non primitive)

//Array, Ojects, Function

const heros = ["ChotaBheem", "MIghtyRaju", "GopalBhar"];
let myObj = {
  name: "Subhas",
  age: 32,
};
const myFunction = function () {
  console.log("Hello World...");
};

console.log(typeof myObj);

//**********************************************
//  Stack (primitive),  Heap (Non-Premitive)

let myNameIs="subhas"
let anotherName=myNameIs

anotherName="Munain"

console.log(myNameIs)
console.log(anotherName)

let user={
    email:'S@gmail.com',
    upi:'user'
}

let user2=user
user2.email="m@gmail.com"

console.table(user.email)
console.table(user2.email)

