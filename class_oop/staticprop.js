class User {
  constructor(username) {
    this.username = username;
  }
  logme() {
    console.log(`Username is ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const Iphone=new Teacher("Iphone","Appl@gmail.com")
Iphone.logme()

const subh = new User("Sambhu");
//  console.log(subh.createId()); 
