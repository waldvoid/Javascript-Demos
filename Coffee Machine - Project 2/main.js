// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
let totalMoney = 550;
let totalWater = 400;
let totalMilk = 540;
let totalBeans = 120;
let totalCups = 9;
let machineOnline = true;

online:
while(machineOnline) {
    let option = input("Write action (buy, fill, take, remaining, exit): ")


function stateReport() {
    console.log(`The coffee machine has:
${totalWater} ml of water
${totalMilk} ml of milk
${totalBeans} g of coffee beans
${totalCups} disposable cups
${totalMoney} of money
`);
}

switch (option) {
    case "buy":
        buyCoffee();
        break;
    case "fill":
        fillMachine();
        break;
    case "take":
        takeMoney();
        break;
    case "remaining":
        stateReport();
        break;
    case "exit":
        machineOnline = false;
        break online;
    default:
        console.log("Unidentified input");
}
function takeMoney() {
    console.log("I gave you $" + totalMoney );
    totalMoney = 0;
}

function fillMachine() {
    let waterAdded = parseInt(input("Write how many ml of water you want to add: "));
    let milkAdded = parseInt(input("Write how many ml of milk you want to add: "));
    let beansAdded = parseInt(input("Write how many grams of coffee beans you want to add: "));
    let cupsAdded = parseInt(input("Write how many disposable cups you want to add: "));

    totalWater += waterAdded;
    totalMilk += milkAdded;
    totalBeans += beansAdded;
    totalCups += cupsAdded;
}

function buyCoffee() {
    let coffeeProductNumber = parseInt(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:, 4 - flat white "));
    switch (coffeeProductNumber) {
        case 1:
            buyEspresso(totalWater, totalBeans, totalCups);
            break;
        case 2:
            buyLatte(totalWater, totalMilk, totalBeans, totalCups);
            break;
        case 3:
            buyCappuccino(totalWater, totalMilk, totalBeans, totalCups);
            break;
        case 4:
            buyFlatWhite(totalWater, totalMilk, totalBeans, totalCups);
            break;
        default:
            console.log("Invalid number");
    }
}
function buyEspresso(water, beans, cup) {
    checkCup(cup);
    if (water >= 250){
        if (beans >= 16) {
            totalWater -= 250;
            totalBeans -= 16;
            totalMoney += 4;
            totalCups -= 1;
            console.log("I have enough resources, making you a coffee!");
        } else{
            console.log("Sorry, not enough beans!");
        }
    } else {
        console.log("Sorry, not enough water!");
    }
}

function buyLatte(water, milk, beans, cup) {
    checkCup(cup);
    if (water >= 350){
        if (beans >= 16) {
            if (milk >= 75) {
                totalWater -= 350;
                totalBeans -= 20;
                totalMilk -= 75;
                totalMoney += 7;
                totalCups -= 1;
                console.log("I have enough resources, making you a coffee!");
            } else {
                console.log("Sorry, not enough milk!");
            }
        } else{
            console.log("Sorry, not enough beans!");
        }
    } else {
        console.log("Sorry, not enough water!");
    }
}

function buyCappuccino(water, milk, beans, cup) {
    checkCup(cup);
    if (water >= 200){
        if (beans >= 12) {
            if (milk >= 100) {
                totalWater -= 200;
                totalBeans -= 12;
                totalMilk -= 100;
                totalMoney += 6;
                totalCups -= 1;
                console.log("I have enough resources, making you a coffee!");
            } else {
                console.log("Sorry, not enough milk!");
            }
        } else{
            console.log("Sorry, not enough beans!");
        }
    } else {
        console.log("Sorry, not enough water!");
    }
}

    function buyFlatWhite(water, milk, beans, cup) {
        checkCup(cup);
        if (water >= 150){
            if (beans >= 20) {
                if (milk >= 50) {
                    totalWater -= 150;
                    totalBeans -= 20;
                    totalMilk -= 50;
                    totalMoney += 8;
                    totalCups -= 1;
                    console.log("I have enough resources, making you a coffee!");
                } else {
                    console.log("Sorry, not enough milk!");
                }
            } else{
                console.log("Sorry, not enough beans!");
            }
        } else {
            console.log("Sorry, not enough water!");
        }
    }

function checkCup(cup) {
    if (cup < 1) {
        console.log("Not enough cup");
    }
    return cup > 0;
}
}

function turnOn() {
    machineOnline = true;
}









/*
let water = input("Write how many ml of water the coffee machine has:");
let milk = input("Write how many ml of milk the coffee machine has:");
let beans = input("Write how many grams of coffee beans the coffee machine has:");
let cups = input("Write how many cups of coffee you will need:");
let isSupplyEnough = true;
function checkWater(water, cups){
    if(cups * 200 > water) {
        isSupplyEnough = false;
    }
    return water / 200;
}

function checkMilk(milk, cups){
    if(cups * 50 > milk) {
        isSupplyEnough = false;
    }
    return milk / 50;
}

function checkBeans(beans, cups){
    if(cups * 15 > beans) {
        isSupplyEnough = false;
    }
    return beans / 15;
}

function coffeeStatus(water, milk, beans, cups) {
    const waterCups = checkWater(water, cups);
    const milkCups = checkMilk(milk, cups);
    const beansCups = checkBeans(beans, cups);
    const minCups = Math.floor(Math.min(waterCups, milkCups, beansCups));
    if (isSupplyEnough) {
        if (minCups == cups) {
            console.log("Yes, I can make that amount of coffee");
        } else if (minCups > cups) {
            console.log("Yes, I can make that amount of coffee (and even " + (minCups - 1) + " more than that)");
        }
    } else {
        console.log("No, I can make only " + minCups + " cups of coffee");
    }
}

coffeeStatus(water, milk, beans, cups);
*/