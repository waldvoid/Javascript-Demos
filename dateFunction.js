// create a new date
let myDate = new Date(2022, 3, 14, 4, 30, 20, 40);
//numeric value of date
let anotherDate = Date.now();
console.log(myDate);
console.log(anotherDate);

// changing time zone
const options = {timeZone: "Europe/Istanbul"};
let myGMT5date = myDate.toLocaleString('en-US', options);
console.log(myGMT5date);

// get & set methods
console.log(myDate.getMonth());
console.log(myDate.setDate(4));

// convert to string from Date Object
console.log(myDate.toDateString());

// convert to JSON
console.log(myDate.toJSON());
// parse from JSON data into Date object and transform to string
let convertJSONdate = new Date(myDate.toJSON());
console.log(convertJSONdate.toDateString());
