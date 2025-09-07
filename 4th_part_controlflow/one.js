//if
const isuderloggedin = true;

// if(2==="2"){
// console.log("execute")
// }

// const balance = 1000;
// // if(balance>500) console.log("test")
// if(balance<500){
//     console.log("less than")
// }else if(balance<750){
//     console.log("Less than 750")
// }else {
//     console.log("Less than 1200")
// }

const userLoggedIn = true;
const debitCard = true;
const loggedinGoogle=false
const loggedFromEmail=true
if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}
if(loggedinGoogle||loggedFromEmail){
    console.log("User logged in")
}
