//for of

// ['','','']
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
    
}

const greeting="Hello world"

for (const greet of greeting) {
    // console.log(greet)
}

const map= new Map()
map.set('IN','India')
map.set('USA','United states of America')
map.set('Fr','France')
map.set("IN","India")

// console.log(map)

for (const [key,value] of map) {
    // console.log(key,":",value)
}

const myObj={
    "Game":'NFS',
    "game2":"BGMI"
}

for (const [key ,value] of myObj) {
    // console.log(key)
}