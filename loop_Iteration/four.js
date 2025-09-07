const myObj={
    js:"JavaScript",
    cpp:"C++",
    rb:'Ruby',
    swift:"Swift by apple"
}
for (const key in myObj) {
   console.log(`${key} shortcut is for ${myObj[key]}`)
}

const programming=["js","c++",'py','java']
for (const key in programming) {
//    console.log(programming[key])
}

const map= new Map()
map.set('IN','India')
map.set('USA','United states of America')
map.set('Fr','France')
map.set("IN","India")

for(const key in map){
    console.log(key.map)
}