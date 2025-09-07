// // document.getElementById("owl").onclick = function () {
// //   alert("click me");
// // };

// //attachEvent()
// //jQuery -on

// //type, timestamp, defaultPrevented
// //target, toElement, srcElement, currentTarget
// //clientX, clientY, screenX, screenY
// //altkey, ctrlkey, shiftkey, keyCode

// document.getElementById('image').addEventListener('click',(e)=>{
//     // alert('Owl click again')
//     console.log('Clicked inside the ul')
// },false)  //false is default case
// document.getElementById('owl').addEventListener('click',(e)=>{
//     console.log('Owl clicked')
//     e.stopPropagation()
// },false)
// document.getElementById('google').addEventListener('click',(e)=>{
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("google clocked")
// },false)

document.querySelector('#image').addEventListener('click',(e)=>{
    console.log(e.target.tagName)
    if(e.target.tagName==='IMG'){
        let removeit=e.target.parentNode
        removeit.remove()
    }
    // removeit.parentNode.removeChild(removeit)
},false)
