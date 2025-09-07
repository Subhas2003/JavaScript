const mynum = [1, 2, 3];
// const total=mynum.reduce(function(acc,currval){
//     // console.log(`acc: ${acc} and currval ${currval}`)
//     return acc+currval
// },0)
// console.log(total)

const total = mynum.reduce((acc, val) => acc + val, 0);
// console.log(total)

const shoppingCard = [
  {
    itemName: "Js course",
    price: 2999,
  },
  {
    itemName: "Js course",
    price: 2999,
  },
  {
    itemName: "Java course",
    price: 3999,
  },
  {
    itemName: "C++ course",
    price: 4999,
  },
];

const pay=shoppingCard.reduce((acc, item) => acc + item.price, 0);
console.log(pay)