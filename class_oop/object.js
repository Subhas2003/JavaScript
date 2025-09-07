function multiply5(num) {
  return num * 5;
}
multiply5.power = 2;
console.log(multiply5(5));
console.log(multiply5.power);
console.log(multiply5.prototype);

function create(username,score){
    this.username=username
    this.score=score
}

create.prototype.increment=function(){
this.score++
}
create.prototype.printme=function(){
    console.log(`price is ${this.score}`)
}

const chai=new create("Chai",25)
const tea=create("tea",250)
chai.printme()