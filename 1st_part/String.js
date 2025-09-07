const name = "Subhas";
const repoCount = 54;

// console.log(name+ repoCount +"value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gamename = new String("Munain_79");

console.log(gamename[0]);
console.log(gamename.__proto__);


// console.log(gamename.length)
// console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf('a'))

const newName=gamename.substring(0,3)
console.log(newName)

const anotherString=gamename.slice(-9,4)
console.log(anotherString)

const newstring= "    chandra   "
console.log(newstring)
console.log(newstring.trim())

const url="https://Google%20com"
console.log(url.replace("%20","_"))

console.log(url.includes('munain'))

console.log(gamename.split('_'))
