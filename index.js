let currentSymbol;
let array = Array(9);
let game = document.querySelector(".main");
let resultPage = document.querySelector(".result-main");
let resultDiv = document.querySelector(".result");
let drawDiv = document.querySelector(".draw");
let currentSelectedPlayer = document.querySelector(".select").value;

function choosePlayer(player = "X") {
    restartGame();
    currentSymbol = player;
}

function playAgainGame() {
    array.fill(undefined);
    game.classList.remove("hide");
    resultPage.classList.add("hide");
    document
        .querySelectorAll(".col")
        .forEach((value) => (value.textContent = ""));
}

function displayWinner(result) {
    game.classList.add("hide");
    resultPage.classList.remove("hide");
    resultDiv.style.color = "green";
    resultDiv.textContent = `winner is ${result}`;
}

function displayDraw() {
    game.classList.add("hide");
    resultPage.classList.remove("hide");
    resultDiv.style.color = "white";
    resultDiv.textContent = `Game is Draw !!!`;
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
        console.log(array.every((item) => item == undefined));
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
    isWinner();
    currentSymbol = currentSymbol == "X" ? "O" : "X";
}

function restartGame() {
    currentSymbol = currentSelectedPlayer;
    array.fill(undefined);
    document
        .querySelectorAll(".col")
        .forEach((value) => (value.textContent = ""));
}

// computer

let currentSymbolForComputer;
let arrayForComputer = Array(9);
let computerCol = document.querySelectorAll(`.col-1`);
console.log(computerCol);

function playWithComputer() {
    document.querySelector(".main").classList.toggle("hide");
    document.querySelector(".ganrate-2").classList.toggle("hide");
    document.querySelector(".computer-btn").textContent = `${
        "With computer" ? "Manual" : "With computer"
    }`;
}

function displayWinnerForComputer(result) {
    game.classList.add("hide");
    resultPage.classList.remove("hide");
    resultDiv.style.color = "green";
    resultDiv.textContent = `winner is ${result}`;
}

function displayDrawForComputer() {
    game.classList.add("hide");
    resultPage.classList.remove("hide");
    resultDiv.style.color = "white";
    resultDiv.textContent = `Game is Draw !!!`;
}


function isWinnerForComputer() {
    if (
        (arrayForComputer[0] != null && arrayForComputer[0] == arrayForComputer[1] && arrayForComputer[1] == arrayForComputer[2]) ||
        (arrayForComputer[3] != null && arrayForComputer[3] == arrayForComputer[4] && arrayForComputer[4] == arrayForComputer[5]) ||
        (arrayForComputer[6] != null && arrayForComputer[6] == arrayForComputer[7] && arrayForComputer[7] == arrayForComputer[8]) ||
        (arrayForComputer[0] != null && arrayForComputer[0] == arrayForComputer[3] && arrayForComputer[3] == arrayForComputer[6]) ||
        (arrayForComputer[1] != null && arrayForComputer[1] == arrayForComputer[4] && arrayForComputer[4] == arrayForComputer[7]) ||
        (arrayForComputer[2] != null && arrayForComputer[2] == arrayForComputer[5] && arrayForComputer[5] == arrayForComputer[8]) ||
        (arrayForComputer[0] != null && arrayForComputer[0] == arrayForComputer[4] && arrayForComputer[4] == arrayForComputer[8]) ||
        (arrayForComputer[2] != null && arrayForComputer[2] == arrayForComputer[4] && arrayForComputer[4] == arrayForComputer[6])
    ) {
        displayWinnerForComputer(`${currentSymbol}`);
    } else {
        if (!arrayForComputer.includes(undefined)) {
            displayDrawForComputer();
        }
    }
}

function getDivValueForComputer(ComputerDiv) {
    let number = Math.floor(Math.random() * 9);
    console.log("num", number);
    console.log(ComputerDiv);

    if (ComputerDiv !== undefined) {
        arrayForComputer[ComputerDiv.id] = "X";
        ComputerDiv.textContent = "X";
    }

    console.log("col-clear", computerCol[number].textContent == "");
    console.log("col-undefined", arrayForComputer[number] == undefined);
    console.log();
    if (arrayForComputer[number] == undefined) {
        if (computerCol[number].textContent == "") {
            computerCol[number].textContent = "O";
            arrayForComputer[number] = "O";

            console.log("array", arrayForComputer);
            number;
            console.log("-");
            isWinnerForComputer()
            
        } else {
            if(arrayForComputer.includes(undefined)){
                getDivValueForComputer()
               }
            return;
        }
    } else {
       if(arrayForComputer.includes(undefined)){
        getDivValueForComputer()
       }
        return;
    }
}

function restartGameForComputer() {
    currentSymbol = currentSelectedPlayer;
    arrayForComputer.fill(undefined);
    document
        .querySelectorAll(".col-1")
        .forEach((value) => (value.textContent = ""));
}
