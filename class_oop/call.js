
 function setUsername(username){
//complex DB calls
this.username=username
console.log("Called")
}

function createUser(username,email,password){
    setUsername.call(this,username)
    this.email=email
    this.password=password
}
const chai=new createUser("Chai","Chai@gmail.com","134")
console.log(chai)