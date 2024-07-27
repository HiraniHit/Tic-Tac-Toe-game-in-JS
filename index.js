setTimeout(()=>{
    document.querySelector(".loading").classList.add("hide")
    document.querySelector(".home-page").classList.remove("hide")
},2000)




let array = Array(9);
let game = document.querySelector(".main");
let resultPage = document.querySelector(".result-main");
let resultDiv = document.querySelector(".result");
let drawDiv = document.querySelector(".draw");
let currentSelectedPlayer = document.querySelector(".select").value;
let currentSymbol = currentSelectedPlayer || "X";
let allDiv = document.querySelectorAll(".col");

let scoreX = document.querySelector(".manual-score-x");
let scoreO = document.querySelector(".manual-score-o");
let scoreDraw = document.querySelector(".manual-score-draw");
let scoreXCount = 0;
let scoreOCount = 0;
let scoreDrawCount = 0;

function choosePlayer(player = "X") {
    restartGame();
    currentSymbol = player;
}

function playAgainGame() {
    array.fill(undefined);
    arrayForComputer.fill(undefined);
    game.classList.remove("hide");
    resultPage.classList.add("hide");
    currentSymbolForComputer = "O";
    allDiv.forEach((value) => (value.textContent = ""));
    allDiv.forEach((value) => (value.style.backgroundColor = ""));
}

function displayWinner(result) {
    game.classList.add("hide");
    resultPage.classList.remove("hide");
    resultDiv.style.color = "green";
    resultDiv.textContent = `winner is ${result}`;
    if (result == "X") {
        scoreXCount += 1;
        scoreX.innerHTML = scoreXCount;
    }
    if (result == "O") {
        scoreOCount += 1;
        scoreO.innerHTML = scoreOCount;
    }
}

function displayDraw() {
    game.classList.add("hide");
    resultPage.classList.remove("hide");
    resultDiv.style.color = "white";
    resultDiv.textContent = `Game is Draw !!!`;
    scoreDrawCount += 1;
    scoreDraw.innerHTML = scoreDrawCount;
}

function isWinner() {
    if (
        (array[0] != null && array[0] == array[1] && array[1] == array[2]) ||
        (array[3] != null && array[3] == array[4] && array[4] == array[5]) ||
        (array[6] != null && array[6] == array[7] && array[7] == array[8]) ||
        (array[0] != null && array[0] == array[3] && array[3] == array[6]) ||
        (array[1] != null && array[1] == array[4] && array[4] == array[7]) ||
        (array[2] != null && array[2] == array[5] && array[5] == array[8]) ||
        (array[0] != null && array[0] == array[4] && array[4] == array[8]) ||
        (array[2] != null && array[2] == array[4] && array[4] == array[6])
    ) {
        displayWinner(`${currentSymbol}`);
    } else {
        if (!array.includes(undefined)) {
            displayDraw(`${currentSymbol}`);
        }
    }
}

function getDivValue(div) {
    let id = div.id;

    if (div.textContent != "") return;

    array[id] = currentSymbol;
    div.textContent = currentSymbol;
    if (currentSymbol == "X") {
        div.style.backgroundColor = "rgb(199, 220, 255)";
        div.style.color = "black";
    }
    if (currentSymbol == "O") {
        div.style.backgroundColor = "rgb(229, 199, 255)";
        div.style.color = "black";
    }

    isWinner();

    currentSymbol = currentSymbol == "X" ? "O" : "X";
}

function restartGame() {
    currentSymbol = currentSelectedPlayer;
    array.fill(undefined);
    allDiv.forEach((value) => (value.textContent = ""));
    allDiv.forEach((value) => (value.style.backgroundColor = ""));
}

//Computer Player

let computerGame = document.querySelector(".generate");
let currentSymbolForComputer = "O";
let arrayForComputer = Array(9);
let computerCol = document.querySelectorAll(`.col-1`);
console.log(computerCol[5]);
let computerPushNumber;

let scoreXForComputer = document.querySelector(".score-x-for-player");
let scoreOForComputer = document.querySelector(".score-for-computer");
let scoreDrawForComputer = document.querySelector(".score-draw-for-computer");
let scoreXCountForComputer = 0;
let scoreOCountForComputer = 0;
let scoreDrawCountForComputer = 0;

console.log(computerCol);

function playWithComputer() {
    document.querySelector(".main").classList.toggle("hide");
    document.querySelector(".generate").classList.toggle("hide");
    document.querySelector(".computer-btn").textContent = `${
        "With computer" ? "Manual" : "With computer"
    }`;
}
function clearBoard() {
    document
        .querySelectorAll(".col-1")
        .forEach((value) => (value.textContent = ""));
    arrayForComputer.fill(undefined);
}
function displayWinnerForComputer(result) {
    if (result === "X") {
        scoreXCountForComputer += 1;
        scoreXForComputer.innerHTML = scoreXCountForComputer;
    }
    if (result === "O") {
        scoreOCountForComputer += 1;
        scoreOForComputer.innerHTML = scoreOCountForComputer;
    }
    computerGame.classList.add("hide");
    resultPage.classList.remove("hide");
    resultDiv.style.color = "green";
    resultDiv.textContent = `winner is ${result}`;
    document
        .querySelectorAll(".col-1")
        .forEach((value) => (value.textContent = ""));
    clearBoard();
}

function displayDrawForComputer() {
    computerGame.classList.add("hide");
    resultPage.classList.remove("hide");
    resultDiv.style.color = "white";
    resultDiv.textContent = `Game is Draw !!!`;
    document
        .querySelectorAll(".col-1")
        .forEach((value) => (value.textContent = ""));

    scoreDrawCountForComputer += 1;
    scoreDrawForComputer.innerHTML = scoreDrawCountForComputer;
    clearBoard();
}

function isWinnerForComputer() {
    if (
        (arrayForComputer[0] != undefined &&
            arrayForComputer[0] == arrayForComputer[1] &&
            arrayForComputer[1] == arrayForComputer[2]) ||
        (arrayForComputer[3] != undefined &&
            arrayForComputer[3] == arrayForComputer[4] &&
            arrayForComputer[4] == arrayForComputer[5]) ||
        (arrayForComputer[6] != undefined &&
            arrayForComputer[6] == arrayForComputer[7] &&
            arrayForComputer[7] == arrayForComputer[8]) ||
        (arrayForComputer[0] != undefined &&
            arrayForComputer[0] == arrayForComputer[3] &&
            arrayForComputer[3] == arrayForComputer[6]) ||
        (arrayForComputer[1] != undefined &&
            arrayForComputer[1] == arrayForComputer[4] &&
            arrayForComputer[4] == arrayForComputer[7]) ||
        (arrayForComputer[2] != undefined &&
            arrayForComputer[2] == arrayForComputer[5] &&
            arrayForComputer[5] == arrayForComputer[8]) ||
        (arrayForComputer[0] != undefined &&
            arrayForComputer[0] == arrayForComputer[4] &&
            arrayForComputer[4] == arrayForComputer[8]) ||
        (arrayForComputer[2] != undefined &&
            arrayForComputer[2] == arrayForComputer[4] &&
            arrayForComputer[4] == arrayForComputer[6])
    ) {
        displayWinnerForComputer(`${currentSymbolForComputer}`);
        return true;
    } else {
        if (!arrayForComputer.includes(undefined)) {
            displayDrawForComputer();
            return true;
        }
        return false;
    }
}
function brainOfComputer() {
    if (
        arrayForComputer[0] != undefined &&
        arrayForComputer[0] === arrayForComputer[1] &&
        computerCol[2].textContent == ""
    ) {
        return 2;
    } else if (
        arrayForComputer[0] != undefined &&
        arrayForComputer[0] === arrayForComputer[4] &&
        computerCol[8].textContent == ""
    ) {
        return 8;
    } else if (
        arrayForComputer[0] != undefined &&
        arrayForComputer[0] === arrayForComputer[8] &&
        computerCol[4].textContent == ""
    ) {
        return 4;
    } else if (
        arrayForComputer[4] != undefined &&
        arrayForComputer[4] === arrayForComputer[8] &&
        computerCol[0].textContent == ""
    ) {
        return 0;
    } else if (
        arrayForComputer[2] != undefined &&
        arrayForComputer[2] === arrayForComputer[4] &&
        computerCol[6].textContent == ""
    ) {
        return 6;
    } else if (
        arrayForComputer[4] != undefined &&
        arrayForComputer[4] === arrayForComputer[6] &&
        computerCol[2].textContent == ""
    ) {
        return 2;
    } else if (
        arrayForComputer[2] != undefined &&
        arrayForComputer[2] === arrayForComputer[6] &&
        computerCol[4].textContent == ""
    ) {
        return 4;
    } else if (
        arrayForComputer[1] != undefined &&
        arrayForComputer[1] === arrayForComputer[2] &&
        computerCol[0].textContent == ""
    ) {
        return 0;
    } else if (
        arrayForComputer[0] != undefined &&
        arrayForComputer[0] === arrayForComputer[2] &&
        computerCol[1].textContent == ""
    ) {
        return 1;
    } else if (
        arrayForComputer[3] != undefined &&
        arrayForComputer[3] === arrayForComputer[4] &&
        computerCol[5].textContent == ""
    ) {
        return 5;
    } else if (
        arrayForComputer[3] != undefined &&
        arrayForComputer[3] === arrayForComputer[5] &&
        computerCol[4].textContent == ""
    ) {
        return 4;
    } else if (
        arrayForComputer[4] != undefined &&
        arrayForComputer[4] === arrayForComputer[5] &&
        computerCol[3].textContent == ""
    ) {
        return 3;
    } else if (
        arrayForComputer[6] != undefined &&
        arrayForComputer[6] === arrayForComputer[7] &&
        computerCol[8].textContent == ""
    ) {
        return 8;
    } else if (
        arrayForComputer[7] != undefined &&
        arrayForComputer[7] === arrayForComputer[8] &&
        computerCol[6].textContent == ""
    ) {
        return 6;
    } else if (
        arrayForComputer[6] != undefined &&
        arrayForComputer[6] === arrayForComputer[8] &&
        computerCol[7].textContent == ""
    ) {
        return 7;
    } else if (
        arrayForComputer[0] != undefined &&
        arrayForComputer[0] === arrayForComputer[3] &&
        computerCol[6].textContent == ""
    ) {
        return 6;
    } else if (
        arrayForComputer[0] != undefined &&
        arrayForComputer[0] === arrayForComputer[6] &&
        computerCol[3].textContent == ""
    ) {
        return 3;
    } else if (
        arrayForComputer[3] != undefined &&
        arrayForComputer[3] === arrayForComputer[6] &&
        computerCol[0].textContent == ""
    ) {
        return 0;
    } else if (
        arrayForComputer[1] != undefined &&
        arrayForComputer[1] === arrayForComputer[4] &&
        computerCol[7].textContent == ""
    ) {
        return 7;
    } else if (
        arrayForComputer[1] != undefined &&
        arrayForComputer[1] === arrayForComputer[7] &&
        computerCol[4].textContent == ""
    ) {
        return 4;
    } else if (
        arrayForComputer[4] != undefined &&
        arrayForComputer[4] === arrayForComputer[7] &&
        computerCol[1].textContent == ""
    ) {
        return 1;
    } else if (
        arrayForComputer[2] != undefined &&
        arrayForComputer[2] === arrayForComputer[5] &&
        computerCol[8].textContent == ""
    ) {
        return 8;
    } else if (
        arrayForComputer[5] != undefined &&
        arrayForComputer[5] === arrayForComputer[8] &&
        computerCol[2].textContent == ""
    ) {
        return 2;
    } else if (
        arrayForComputer[2] != undefined &&
        arrayForComputer[2] === arrayForComputer[8] &&
        computerCol[5].textContent == ""
    ) {
        return 5;
    }
    return false;
}

function getDivValueForComputer(ComputerDiv) {
    let number = Math.floor(Math.random() * 9);
    if (ComputerDiv) {
        if (ComputerDiv.textContent != "") return;
        if (currentSymbolForComputer == "O") {
            arrayForComputer[ComputerDiv.id] = "X";
            ComputerDiv.textContent = "X";
            currentSymbolForComputer = "X";
        }
    }
    if (isWinnerForComputer() == true) {
        return;
    }
    setTimeout(() => {
        if (arrayForComputer[number] == undefined || null) {
            if (computerCol[number].textContent == "") {
                if (typeof brainOfComputer() == "number") {
                    computerPushNumber = brainOfComputer();
                    computerCol[brainOfComputer()].textContent = "O";
                    arrayForComputer[computerPushNumber] = "O";
                    currentSymbolForComputer = "O";
                } else {
                    computerCol[number].textContent = "O";
                    arrayForComputer[number] = "O";
                    currentSymbolForComputer = "O";
                    number;
                    console.log(arrayForComputer);
                }
            } else {
                if (arrayForComputer.includes(undefined)) {
                    getDivValueForComputer();
                }
                return;
            }
        } else {
            if (arrayForComputer.includes(undefined)) {
                getDivValueForComputer();
            }
            return;
        }

        isWinnerForComputer();
    }, 500);
}

function restartGameForComputer() {
    currentSymbolForComputer = "O";
    clearBoard();
    computerGame.classList.remove("hide");
    resultPage.classList.add("hide");
}
