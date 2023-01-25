// Random array picker
const songs = ["Stairway to Heaven", "Imagine", "Yesterday", "Light My Fire"];

function getRandomElement(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

console.log(getRandomElement(songs));
/*
// String - Int - Boolean Conversion
String(123); // "123"
String(false); // "false"
String(-12.3); // "-12.3"
Number("1") // 1
Number(true);   // 1
Number(false);  // 0
Number("\n3");  // 3
Number("\n");   // 0
Boolean(1);            // true
Boolean(0);            // false
Boolean("Am I nice?"); // true
Boolean("");           // false

"3" + 4 // "34"
4 + "" // "4"
true + "detective" // "truedetective"
"You are" + 25 "years old" // "You are 25 years old"

true + 43 // 44
3 - false // 3
10 / "5"  // 2

!!3                      // true
0 || "go"                // "go"
"Master" && "Margarita"  // "Margarita"



*/

