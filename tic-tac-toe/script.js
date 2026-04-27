const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const modeSelect = document.getElementById("mode");

const xScoreText = document.getElementById("xScore");
const oScoreText = document.getElementById("oScore");
const drawScoreText = document.getElementById("drawScore");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

let xScore = 0;
let oScore = 0;
let drawScore = 0;

const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

// Click Event
cells.forEach(cell => {
  cell.addEventListener("click", handleClick);
});

function handleClick() {
  const index = this.dataset.index;

  if (board[index] !== "" || !gameActive) return;

  makeMove(index, currentPlayer);

  if (checkWinner()) return;

  switchTurn();

  if (modeSelect.value === "ai" && currentPlayer === "O") {
    setTimeout(aiMove, 500);
  }
}

function makeMove(index, player) {
  board[index] = player;
  cells[index].textContent = player;
  cells[index].classList.add(player.toLowerCase());
}

function switchTurn() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `Player ${currentPlayer} Turn`;
}

function checkWinner() {
  for (let pattern of winPatterns) {
    let [a,b,c] = pattern;

    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      gameActive = false;
      statusText.textContent = `🎉 Player ${board[a]} Wins!`;

      if (board[a] === "X") {
        xScore++;
        xScoreText.textContent = xScore;
      } else {
        oScore++;
        oScoreText.textContent = oScore;
      }

      return true;
    }
  }

  if (!board.includes("")) {
    gameActive = false;
    statusText.textContent = "🤝 It's a Draw!";
    drawScore++;
    drawScoreText.textContent = drawScore;
    return true;
  }

  return false;
}

function aiMove() {
  let empty = board
    .map((val, index) => val === "" ? index : null)
    .filter(v => v !== null);

  if (empty.length === 0 || !gameActive) return;

  let randomIndex = empty[Math.floor(Math.random() * empty.length)];

  makeMove(randomIndex, "O");

  if (checkWinner()) return;

  switchTurn();
}

function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;

  statusText.textContent = "Player X Turn";

  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("x", "o");
  });
}

function resetScores() {
  xScore = 0;
  oScore = 0;
  drawScore = 0;

  xScoreText.textContent = 0;
  oScoreText.textContent = 0;
  drawScoreText.textContent = 0;

  restartGame();
}