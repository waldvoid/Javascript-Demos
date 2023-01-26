// Array declaration
// single argument
let marks = new Array();
// multiple arguments
let marksFour = new Array(2,4,6,7,8);
let marksFive = new Array(2);
// literal decleration
let marksThree = [];
let marksTwo = [2,4,6,7];

marksFive[0] = 3;
marksFive[1] = 3;
let length = marksFour.length;
console.log(length);
console.log(Array.isArray(marks));
// bu yöntem sadece belirli sayıda olan arrayde çalışır
// ama aşğıdaki yöntemleri yapabilirsin
marks.fill(0,0,2);
marksFive.fill(13);
marksThree.fill(55,0,);
console.log(marks );
console.log( marksFive );
console.log( marksThree);

// from ile veriden (çokluysa args lazım) array oluşturma
Array.from('Hello'); // ['H', 'e', 'l', 'l', 'o']

function createArray(...arguments) {
    return Array.from(arguments);
}

createArray(2, 4, 6); // [2, 4, 6]

Array.from([3, 5, 7], x => x * x); // [9, 25, 49]

function getArrayWithLength(string) {
    console.log(Array.of(Array.from(string)));
}
getArrayWithLength("Hello boy");



// Array.of ile constructor gibi array oluşturabilirsin
// aynı şey çok da önemli değil
// tek fark Array.of(2) tek sayı 2 olan bi array oluşturur

console.log(Array.of(1,2,3,4,5,6,7,8,9,10));

let numbers = Array.of(5);
console.log(numbers.length); // 1
console.log(numbers[1]);  // undefined