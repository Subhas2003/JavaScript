const marvel_heros=['thor','IronMan','Spiderman']
const dc_heros=['Superman','flash','bateman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1])

// const allheros=marvel_heros.concat(dc_heros)
// console.log(allheros)

const allnewHeros=[...marvel_heros,...dc_heros]
// console.log(allnewHeros)

const anotherarray=[1,2,3,[4,5,6],7,8,[6,7,[4,2]]]
const realanotherArray=anotherarray.flat(Infinity)
console.log(realanotherArray)

console.log(Array.isArray("Subhas"))
console.log(Array.from("Subhas"))
console.log(Array.from({name:"Munain"})) //interesting


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))