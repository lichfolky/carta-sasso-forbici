"use strict";
// CARTA SASSO FORBICI
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

const buttonPaper = document.getElementById("paper");
const buttonRock = document.getElementById("rock");
const buttonScissors = document.getElementById("scissors");

const pcChoice = document.getElementById("computer-choice");

const choicesResultText = document.getElementById("choices-result");
const resultText = document.getElementById("result");


// FUNZIONI

// restituisce un valore tra 1 e tre, la scelta del pc
function makeRandomChoice() {
    return getRandomIntInclusive(0, 2);
}

// The maximum is inclusive and the minimum is inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Date due scelte 
// restituisci 1 se ha vinto il user
// 2 se ha vinto il pc e 0 se pareggio
function whoWon(user, pc) {
    if (user == pc) {
        return 0;
    } else {
        // user vs pc : 1, 2; 2, 3; 3, 1
        if ((user == PAPER && pc == ROCK)
            || (user == ROCK && pc == SCISSORS)
            || (user == SCISSORS && pc == PAPER)) {
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
    const computerChoice = makeRandomChoice();
    const winner = whoWon(userChoice, computerChoice);
    pcChoice.innerHTML = choicesNames[computerChoice];
    choicesResultText.innerText = `${choicesNames[userChoice]} vs ${choicesNames[computerChoice]}`;

    if (winner == 1) {
        resultText.innerHTML = "Ha vinto user";
        resultText.style.color = "green";
    } else {
        if (winner == 2) {
            resultText.innerHTML = "Ha vinto il pc";
            resultText.style.color = "red";
        } else {
            resultText.innerHTML = "Pareggio";
            resultText.style.color = "brown";
        }
    }
}

// MAIN
buttonPaper.addEventListener("click", () => game(PAPER));
buttonRock.addEventListener("click", () => game(ROCK));
buttonScissors.addEventListener("click", () => game(SCISSORS));
