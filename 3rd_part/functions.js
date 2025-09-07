function sayMyname() {
  console.log("S");
  console.log("U");
  console.log("B");
  console.log("H");
  console.log("A");
  console.log("S");
}
// sayMyname()

// function addTwonumber(num1,num2){
//   console.log( num1+num2)
// }
function addTwonumber(num1, num2) {
  //   const result=( num1+num2)
  //   return result
  return num1 + num2;
}
const result = addTwonumber(3, 8);
// console.log("Result: ", result);

function loginuserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginuserMessage("Subh"));

function calculateCartPrice(val1,val2,...num1) {
  return num1;
}
// console.log(calculateCartPrice(200, 400, 500,600,8000));


const user={
    username:"Subhas",
    prices:199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}
// handleobject(user)
handleobject({
    username:"Munain",
    price:2376
})

const mynewarray=[200,300,400]

function returnsecondvalue(getArray){
    return getArray[1]
}

// console.log(returnsecondvalue(mynewarray))
console.log(returnsecondvalue([200,300,400]))
