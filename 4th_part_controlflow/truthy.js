const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

//falsy values

//false,0,-0,BigInt 0n,"",null,undefind,NAN

//truthy values
//"0",'false', "",[],{},function(){}

// if(userEmail.length===0){
//     console.log("Array is empty")
// }

//Nullish Coalescing Operator (??): null undefine

let val1;
// val1=5??10
// val1 = null ?? 10;
// val1=undefined??15
val1 = null ?? 10 ?? 20;

console.log(val1);

//Ternary operator

//condition ? true : false

const iceCreamPrice = 100;
iceCreamPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");
