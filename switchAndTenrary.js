// tenrary operator
let time = 11;
(time >= 6) ? console.log("I'm Hungry") : console.log("I'm full");

let color = "blue";
let isBlue = (color === "blue");
console.log(isBlue);

// Switch condition but its slower than if
let condition = 15;
switch (true) {
    case (condition < 10):
        console.log("The price below 10");
        break;
    case (condition >= 10):
        console.log("The price above or equal 10");
        break;
    default:
        console.log("I don't know what that is");
}

let cityTo = "Paris";
switch (cityTo) {
    case "Berlin":
        console.log("The price is $100");
        break;
    case "Paris":
        console.log("The price is $120");
        break;
    case "London":
        console.log("The price is $150");
        break;
    default:
        console.log("The price is $90");
        break;
}

languageInfo("Javascript");
function languageInfo(language){
    switch (language) {
        case "Javascript":
            console.log("Begins on December 4, 1995");
            break;
        case "Java":
            console.log("Begins on May 23, 1995");
            break;
        case "PHP":
            console.log("Begins on June 8, 1995");
            break;
    }
}