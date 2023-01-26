
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


// Function applying types
    // 1) Anon Function
let oneFunction;
oneFunction = function () {};
const someFunction = function (){}

    // 2) Tek kullanımlık function
setTimeout(function() {
    console.log("Ben tek kullanımlığım"); }, 8000);

    // 3) Anında çalışan fonksiyon
let text = "Anında!";
(function(text) {
    console.log("Hemen çalıştım " + text);
}(text));

        // Neden Anon (Nameless) function?
        // Tek kullanımlık basabilirsin
        // Hızlı bir şekilde tek sefer çalıştırabilirsin
        // Bazı durumlarda işine yarayabilir

// Arrow functions kısaca
    // 1) Daha hızlı ve kısa,

let append = (a, b) => a + b; // short
let appendTwo = (a, b) => { return a + b;} // block

let oneParam = a => a+1; // one param short

