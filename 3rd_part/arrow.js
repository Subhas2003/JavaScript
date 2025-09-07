const user = {
  username: "Subhas",
  price: 99,

  welcomemessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};
// user.welcomemessage()
// user.username="Sam"
// user.welcomemessage()

// console.log(this)

// function chai(){
//     let username="Munain"
//     console.log(this.username)
// }
// chai()

// const chai=function (){
//     let username="Munain"
//     console.log(this.username)
// }

const chai = () => {
  let username = "SUbhas";
  console.log(this);
};

// chai();

// const addtwo=(num1, num2)=>{
//     return num1+num2
// }

// const addtwo = (num1, num2) => num1 + num2;

// const addtwo = (num1, num2) => (num1 + num2);

const addtwo = (num1, num2) =>({username:"Subh"});

console.log(addtwo(3, 7));
