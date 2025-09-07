//Singleton

// const tinderUser=new Object()
const tinderUser = {};
tinderUser.id = "324324knv";
tinderUser.name = "Subham";
tinderUser.IsloggedIn = false;

// console.log(tinderUser)

const regularUser = {
  email: "M@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Subhas",
      lastname: "Munain",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "A", 5: "B", 6: "C" };
const obj4 = { 7: "A", 8: "B", 9: "C" };

// const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2,obj4)
const obj3 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj3)

const user = [
  {
    id: 1,
    email: "M@gmail.com",
  },
  {
    id: 1,
    email: "M@gmail.com",
  },
  {
    id: 1,
    email: "M@gmail.com",
  },
  {
    id: 1,
    email: "M@gmail.com",
  },
];

user[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('IsloggedIn'))


const course={
    courseName:"Js in hindi",
    price:999,
    courseInstructor:"Hitesh"
}

// course.courseInstructor


const{courseInstructor:Instructor}=course
console.log(Instructor)

