
// function creation types
// 1) Classic
function myFunction(a, b) {};

// 2) less global
let myFunctionTwo = function(a, b){};
const myNotGlobalFunc = function(a, b){};

// 3) less syntax
let myShorterFunc = (a, b) => {};

// 4) function constructor, RARE
const myCrazyFunc = new Function("a", "b", "return a * b");
console.log(myCrazyFunc(5, 6));