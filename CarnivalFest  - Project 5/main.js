// write your code here
const input = require('sync-input');
let tickets = 0;

//gift array
let gifts = [{name: "Teddy Bear", price: 10, id: 1},
    {name: "Big Red Ball", price: 5, id: 2},
    {name: "Huge Bear", price: 50, id: 3},
    {name: "Candy", price: 8, id: 4},
    {name: "Stuffed Tiger", price: 15, id: 5},
    {name: "Stuffed Dragon", price: 30, id: 6},
    {name: "Skateboard", price: 100, id: 7},
    {name: "Toy Car", price: 25, id: 8},
    {name: "Basketball", price: 20, id: 9},
    {name: "Scary Mask", price: 75, id: 10}]

function getIndexById(id) {
    for (let i = 0; i < gifts.length; i++) {
        if (gifts[i].id === id) {
            return i;
        }
    }
}

function checkBuyInput(input) {
    let inputFormat = new RegExp('^[1-9][0-9]?$|^100$');
    if (Number.isNaN(input)) {
        console.log("Please enter a valid number!");
        return false;
    } else if (gifts[getIndexById(input)] === undefined) {
        console.log("There is no gift with that number!");
        return false;
    } else if (gifts?.[getIndexById(input)]?.price > tickets) {
        console.log("You don't have enough tickets to buy this gift.");
        return false;
    } else {
        return true;
    }
}

function checkAddInput(input) {
    let inputFormat = new RegExp('^([0-9][0-9]{0,2}|1000)$');
    if (!inputFormat.test(input)) {
        console.log("Please enter a valid number between 0 and 1000.");
        return false;
    } else {
        return true;
    }
}

function addTickets() {
    let productNum = parseInt(input("Enter the ticket amount:"));
    if (checkAddInput(productNum)) {
        tickets += productNum;
        console.log(`Total tickets: ${tickets}
    `);
    }
}

function checkTickets() {
    console.log(`Total tickets: ${tickets}
    `);
}

function showGifts() {
    if (gifts.length === 0) {
        console.log("Here's the list of gifts:\n");
        console.log("Wow! There are no gifts to buy.");
    } else {
        console.log("Here's the list of gifts:\n");
        for (let i = 0; i < gifts.length; i++) {
            console.log(gifts[i].id + "- " + gifts[i].name + ", Cost: " + gifts[i].price + " tickets");
        }
        console.log("");
    }
}

// welcome text
console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
console.log("Hello friend! Thank you for visiting the carnival!");

// iterate over gift's keys
console.log("Here's the list of gifts:\n");
for (const giftsKey of gifts) {
    console.log(giftsKey.id + "- " + giftsKey.name + ", Cost: " + giftsKey.price + " tickets");
}
console.log("");

function buyGift() {
    if (gifts.length === 0) {
        console.log("Wow! There are no gifts to buy.");
        return;
    }
    let productNum = parseInt(input("Enter the number of the gift you want to get:"), 10);
    if (checkBuyInput(productNum)) {
        tickets -= gifts[getIndexById(productNum)].price;
        console.log(`Here you go, one ${gifts[getIndexById(productNum)].name}!
Total tickets: ${tickets}
    `);
        //delete bought items
        gifts.splice(getIndexById(productNum), 1);
    }
}


function startConversation() {
    let isOnline = true;
    while (isOnline) {
        let customerAnswer = parseInt(input("What do you want to do?\n1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop"));
        switch (customerAnswer) {
            case 1:
                buyGift();
                break;
            case 2:
                addTickets();
                break;
            case 3:
                checkTickets();
                break;
            case 4:
                showGifts();
                break;
            case 5:
                isOnline = false;
                break;
            default:
                console.log("Please enter a valid number!");
        }
    }
    console.log("Have a nice day!");
}

startConversation();
