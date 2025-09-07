const user = {
  username: "Subhas",
  loginCount: 8,
  signedIn: true,

  getuserDetails: function () {
    // console.log("Got user details");
    // console.log(`Username: ${this.username}`)
    // console.log(this)
  },
};

// console.log(user.username);
// console.log(user.getuserDetails());
// console.log(this);

//constructor

function User(username, logincount, isLogedIn) {
  this.username = username;
  this.loginCount = logincount;
  this.isLogedIn = isLogedIn;

  return this;  
//   (If we didn't return, by default it return value )
}
 
const userOne=new User("Subahs",14,true)  //new=> 1st create a empty object
const userTwo=new User("Munain",12,false)
console.log(userOne.constructor)
// console.log(userTwo)




