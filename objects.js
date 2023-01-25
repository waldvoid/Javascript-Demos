// object declaration
let book1 = {};
let book2 = new Object();

// object fill
book2 = {
    author: "A",
    name: "bbb",
    year: 1992
};

// Array of objects
let country = [
    {
        name: "Netherlands",
        population: 17.18
    },
    {
        name: "Turkey",
        population: 81.29
    }
];
// type of
console.log(typeof book1); // object
console.log(typeof book2); // object

console.log(book2.name + book2.author + book2.year); // object
for (let i = 0; i < country.length ; i++) {
    console.log(country[i].name);
    console.log(country[i].population);
}
