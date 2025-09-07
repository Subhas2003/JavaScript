// const coding = ["js", "c++", "py", "java"];

// const value=coding.forEach((item)=>{
//     // console.log(item)
//     return item
// })

// console.log(value)

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNmae=myNumber.filter((num)=>{
//    return num>4
// });
// console.log(newNmae)

// const newnum=[]
// myNumber.forEach((num)=>{
//     if (num>4) {
//         newnum.push(num)
//     }
// })
// console.log(newnum)


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const somedata=[
    {
        name:"Subhas",
        age:25,
        roll:33,
        subject:"Bengali"
    },{
        name:"Munain",
        age:20,
        roll:73,
        subject:"English"
    },{
        name:"Haripada",
        age:55,
        roll:13,
        subject:"History"
    },{
        name:"BijoyKrishna",
        age:65,
        roll:38,
        subject:"Geography"
    }]
    
    const getdata=somedata.filter((num)=>{ return num.name=== "Subhas"} )
    console.table(getdata)

