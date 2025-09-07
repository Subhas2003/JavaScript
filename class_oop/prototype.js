// let myName="Subhas     "
// console.log(myName.trim().length)

let myHeroes = ["Thor", "Spiderman"];

let heroPower = {
  Thor: "Hammer",
  spiderman: "Sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.subhas = function () {
  console.log(`Subhas is present in all Objects`);
};

Array.prototype.helloJi = function () {
  console.log(`Hello jii kaise ho...`);
};

// heroPower.subhas()
// myHeroes.subhas();
// myHeroes.helloJi();
// heroPower.helloJi()

//Inheritance

const User = {
  name: "Chai",
  email: "chai@gmail.com",
};

const teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};

const TAsupport = {
  makeAssigment: "JS assigment",
  fullTime: true,
  __proto__: TeachingSupport,
};
teacher.__proto__ = User;

//modern syntex

Object.setPrototypeOf(TeachingSupport,teacher)

let anotherUsername="Munain         "
String.prototype.trueLength=function(){
     console.log(`${this}`)
    //  console.log(`${this.name}`)
     console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.trueLength()
"Kharika".trueLength()
"IceTea".trueLength()