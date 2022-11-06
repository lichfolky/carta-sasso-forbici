"use strict";
// COSA DEVE FARE IL PROGRAMMA
// attendi che l'utente clicchi un bottone e scelga un'opzione
// genera una scelte del pc
// calcola chi ha vinto
// se ha vinto pc mostra vinto pc
// se ha vinto user mostra vinto user
// se pareggio mostra pareggio

const PAPER = 0;
const ROCK = 1;
const SCISSORS = 2;

const choicesNames = ["Carta", "Sasso", "Forbici"];

let buttonPaper = document.getElementById("paper");
let buttonRock = document.getElementById("rock");
let buttonScissors = document.getElementById("scissors");

let pcChoice = document.getElementById("computer-choice");
let resultText = document.getElementById("result");

// FUNZIONI

// restituisce un valore tra 1 e tre, la scelta del pc
function makeAChoice() {
    return getRandomIntInclusive(0, 2);
}

// The maximum is inclusive and the minimum is inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Date due scelte (due numeri da 1 a 3), restituisci 1 se ha vinto il primo
// 2 se ha vinto il secondo e 0 se pareggio
function whoWon(user, pc) {
    if (user == pc) {
        console.log("pareggio");
        return 0;
    } else {
        // user vs pc : 1, 2; 2, 3; 3, 1
        if ((user == 1 && pc == 2) || (user == 2 && pc == 3) || (user == 3 && pc == 1)) {
            console.log("ha vinto user");
            return 1;
        } else {
            console.log("ha vinto pc");
            return 2;
        }
    }
}

/*
se le due scelte sono uguali return 0
se vince la prima return 1
se vince la seconde return 2
*/
function compareChoice(choice1, choice2) {
    if (choice1 == choice2) {
        return 0;
    } else {
        // user vs pc : 1, 2; 2, 3; 3, 1
        if ((choice1 == PAPER && choice2 == ROCK)
            || (choice1 == ROCK && choice2 == SCISSORS)
            || (choice1 == SCISSORS && choice2 == PAPER)) {
            return 1;
        } else {
            return 2;
        }
    }
}

// genera una scelte del pc -
// calcola chi ha vinto -
// se ha vinto pc mostra vinto pc
// se ha vinto user mostra vinto user
// se pareggio mostra pareggio
function game(userChoice) {

    // questa variabile ho deciso di rederla non globale
    // perchè la uso soltanto in questa funzione
    // in generale è meglio avere funzioni isolate
    let computerChoice = makeAChoice();
    let winner = whoWon(userChoice, computerChoice);
    pcChoice.innerHTML = choicesNames[userChoice];

    if (winner == 1) {
        resultText.innerHTML = "<p>" + choicesNames[userChoice] + " vs " + choicesNames[computerChoice] + "<\p>" + "Ha vinto user";
    } else {
        if (winner == 2) {
            resultText.innerHTML = "<p>" + choicesNames[userChoice] + " vs " + choicesNames[computerChoice] + "<\p>" + "Ha vinto il pc";
        } else {
            resultText.innerHTML = "<p>" + choicesNames[userChoice] + " vs " + choicesNames[computerChoice] + "<\p>" + "Pareggio";
        }
    }
}

// MAIN
buttonPaper.addEventListener("click", () => game(PAPER));
buttonRock.addEventListener("click", () => game(ROCK));
buttonScissors.addEventListener("click", () => game(SCISSORS));
