//IIFE => Immediately Invoked Function Expressions

(function chai() {
  //name IIFE
  console.log(`DB CONNECTED.....`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}.......`);
})("Subh");

