//Dates

let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate)

// let myCreatDate = new Date(2025, 0, 23);
// let myCreatDate = new Date(2025, 0, 23);
// let myCreatDate = new Date("2025-07-23");
let myCreatDate = new Date("07-23-2025");

// console.log(myCreatDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatDate.getTime());
// console.log(Math.floor((Date.now()/1000)))

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()}and the time`


newDate.toLocaleString('dafault',{
    weekday:"long"
})

