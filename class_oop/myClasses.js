//ES6
// class user {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.user = user;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abd`;
//   }
//   changeusername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new user("Subhas", "subhas@gmail.com", "subhas2003", "mnain@2003");

// console.log(chai.encryptPassword());
// console.log(chai.changeusername());

//behind the scane

function User(username, email,user, password) {
  this.username = username;
  this.email = email;
  this.user = user;
  this.password = password;
}

User.prototype.encryptPassword=function(){
     return `${this.password}abd`;
}
User.prototype.changeusername=function(){
     return `${this.username.toUpperCase()}`;
}

const tea=new User("munain","S@gmail.com","1234")
console.log(tea.encryptPassword())
console.log(tea.changeusername())
