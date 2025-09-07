const hello=function(){
    console.log("Hello")
}
const welcome=function(){
document.querySelector('h1').innerHTML='WELCOME..'
}
const changeme=setTimeout(welcome,2000)

document.querySelector('#stop').addEventListener('click',(e)=>{
    clearInterval(changeme)
    console.log('Stopped')
})

