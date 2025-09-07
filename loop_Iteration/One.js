// for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log(`${element} is the best number`)
  }
  // console.log(element)
}

// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer loop value: ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner loop value ${j} and Outer loop value ${i}`)
//     console.log(i + "*" + j + "=" + i * j );
//   }
// }

let myArray = ["Flash", "Batman", "Superman"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
//   console.log(element)
}

//break and continue

for (let index = 0; index <=20; index++) {
    if(index==3){
        console.log(`Detected ${3}`)
        // break;
        continue;
    }
   console.log(`Value of i is ${index}`)
    
}
