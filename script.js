// COSA DEVE FARE IL PROGRAMMA
// attendi che l'utente clicchi un bottone e scelga un'opzione
// genera una scelte del pc
// calcola chi ha vinto
// se ha vinto pc mostra vinto pc
// se ha vinto user mostra vinto user
// se pareggio mostra pareggio

// VARIABILI
/*
noChoice = 0
paper = 1
rock = 2
scissors = 3
*/

// queste non sono necessarie dato che eseguiamo tutto dentro una funzione
let computerChoice = 0;
let userChoice = 0;

let buttonPaper = document.getElementById("paper");
let buttonRock = document.getElementById("rock");
let buttonScissors = document.getElementById("scissors");

let pcChoice = document.getElementById("computer-choice");
let resultText = document.getElementById("result");

// FUNZIONI

// restituisce un valore tra 1 e tre, la scelta del pc
function makeAChoice() {
    return getRandomIntInclusive(1, 3);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// date due scelte (due numeri da 1 a 3), restituisci 1 se ha vinto il primo
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
    let winner = whoWon(userChoice, computerChoice)
    pcChoice.innerHTML = computerChoice;
    if (winner == 1) {
        resultText.innerText = "ha vinto user"
    } else {
        if (winner == 2) {
            resultText.innerText = "ha vinto pc"
        } else {
            resultText.innerText = "pareggio"
        }
    }
}

// MAIN

buttonPaper.addEventListener("click", () => {
    game(1);
})
buttonRock.addEventListener("click", () => {
    game(2);
})
buttonScissors.addEventListener("click", () => {
    game(3);
})
