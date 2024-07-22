let currentSymbol = "X"
let array = Array(9)
let game = document.querySelector(".main")
let resultPage = document.querySelector(".result-main")
let resultDiv = document.querySelector(".result")
let drawDiv = document.querySelector(".draw")

function playAgainGame(){
    currentSymbol = "X"
    array.fill(undefined)
    game.classList.remove("hide")
    resultPage.classList.add("hide")
    document.querySelectorAll(".col").forEach(value => value.textContent = "")
    document.querySelectorAll(".col").textContent = ""
}
function displayWinner(result){
    game.classList.add("hide")
    resultPage.classList.remove("hide")
    resultDiv.textContent = `winner is ${result}`
}
function displayDraw(result){
    game.classList.add("hide")
    resultPage.classList.remove("hide")
    drawDiv.textContent = `Game is Draw !!`
}
function isWinner(){
    if(
        (array[0] != null && array[0] == array[1] && array[1] == array[2]) ||
        (array[3] != null && array[3] == array[4] && array[4] == array[5]) ||
        (array[6] != null && array[6] == array[7] && array[7] == array[8]) ||
        (array[0] != null && array[0] == array[3] && array[3] == array[6]) ||
        (array[1] != null && array[1] == array[4] && array[4] == array[7]) ||
        (array[2] != null && array[2] == array[5] && array[5] == array[8]) ||
        (array[0] != null && array[0] == array[4] && array[4] == array[8]) ||
        (array[2] != null && array[2] == array[4] && array[4] == array[6]) 
    ){
        displayWinner(`${currentSymbol}`)
    }else{
        console.log(array.every((item) => item == undefined));
           if(!array.includes(undefined)){
            displayDraw(`${currentSymbol}`)
           }
    }
}

function getDivValue(div){
    let id = div.id
    if(div.textContent != "")return;
        array[id] = currentSymbol
        div.textContent = currentSymbol
        isWinner()
        currentSymbol = currentSymbol == "X" ? "O" : "X"
}

function restartGame(){
    currentSymbol = "X"
    array.fill(undefined)
}