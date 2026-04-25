const cells =document.querySelectorAll(".cells");
const statusText = document.getElementById("status");
const modeSelect = document.getElementById("mode");

const xScoreText = document.getElementById("xScore");
const oScoreText = document.getElementById("oScore");
const drawScoretext = document.getElementById("drawScore");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer ="X";
let gameActive = true;
let xScore =0;
let oScore =0;
let drawScore =0;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// click event

cells.forEach(cell =>{ cell.addEventListener("click", handleclick );
});

function handleclilck(event){
    const index = this.dataset.index;

    if(board[index] !== "" || !gameActive) return;
    
    makeMove(index, currentPlayer);

    if(checkWinner())return;
    switchTurn();

    if(modeSelect.value === "ai" && currentPlayer === "O"){
        setTimeout(aiMove, 500);
    }
}
 function makeMove(index,player){
    board[index] = player;
    cells[index].textContent = player;
 }

 function checkWinner(){
    board[index] =player;
    cells[index].textContent =player;
    cells[index].classList.add(player.toLowerCase());

 }
 