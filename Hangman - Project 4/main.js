const input = require('sync-input')

let words = ["python", "java", "swift", "javascript"]
let wonGames = 0;
let lostGames = 0;
let gameOnline = true;

function scoreBoard() {
    console.log(`You won: ${wonGames} times.
You lost: ${lostGames} times.`);
}

function startGame(words) {
        let currentWord = words[Math.floor((Math.random() * 4))];
        let coveredLetter = [];
        let timesToTry = 8;
        for (let i = 0; i < currentWord.length; i++) {
            coveredLetter.push("-");
        }

    function checkInput(letter, guessedLetters) {
        let isEnglish = false;
        let english = new RegExp("^[a-z]+$");
        if (english.test(letter)) {
            isEnglish = true;
        }
        if (letter.length > 1 || letter.length === 0) {
            console.log("Please, input a single letter. \n");
            return false;
        } else if (letter.toLowerCase() !== letter || !isEnglish) {
            console.log("Please, enter a lowercase letter from the English alphabet. \n");
            return false;
        } else if (guessedLetters.includes(letter)) {
            console.log("You've already guessed this letter. \n");
            return false;
        }
        return true;
    }

    console.log("H A N G M A N  //" + timesToTry + " attempts \n");
    while(gameOnline) {
        currentWord = words[Math.floor((Math.random() * 4))];
        coveredLetter = [];
        timesToTry = 8;
        for (let i = 0; i < currentWord.length; i++) {
            coveredLetter.push("-");
        }
    let beginningSelection = input("Type \"play\" to play the game, \"results\" to show the scoreboard, and \"exit\" to quit:")
    switch (beginningSelection) {
        case "play": playGame(); break;
        case "results": scoreBoard(); break;
        case "exit": gameOnline = false; break;
    }

    function playGame() {
    let guessedLetters = [];
    while (timesToTry > 0) {
        console.log(coveredLetter.join(""));
        let letter = input("Input a letter:");
        if (checkInput(letter, guessedLetters) === false) {
            continue;
        }
        let isMatched = false;
        let isAlreadyMatched = false;
        for (let i = 0; i < currentWord.length; i++) {
            if (coveredLetter[i] === letter) {
                isAlreadyMatched = true;
                break;
            }
            if (currentWord[i] === letter) {
                coveredLetter[i] = letter;
                isMatched = true;
            }
        }
        for (const guessKey in guessedLetters) {
            if(guessKey === letter) {isAlreadyMatched = true; }
        }

        if (!isMatched) {
            timesToTry -= 1;
            console.log("That letter doesn't appear in the word.  //" + timesToTry + " attempts \n");
            guessedLetters.push(letter);
        } else {
            guessedLetters.push(letter);
        }
        if (coveredLetter.join("").toLowerCase() === currentWord.toLowerCase()) {
            console.log(`You guessed the word ${currentWord}!
    You survived!`);
            wonGames += 1;
            return;
        } else if (isAlreadyMatched) {
            console.log("You've already guessed this letter. \n");
        }
    }
    console.log("You lost!");
    lostGames += 1;
    }
}
}

startGame(words);