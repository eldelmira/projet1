
/*function Réinitialiser() {
    
    // Réinitialiser tous les champs à vide
    var ids = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
    ids.forEach(function(id) {
        document.getElementById(id).value = '';
    });
}*/

let currentPlayer = "X";
let gameActive = true;
const gameState = ["", "", "", "", "", "", "", "", ""];

// Winning combinations
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

// Function to handle cell click
function handleCellClick(clickedCellIndex) {
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    gameState[clickedCellIndex] = currentPlayer;
    document.getElementById(`b${clickedCellIndex + 1}`).value = currentPlayer;

    if (checkWin()) {
        gameActive = false;
        alert(`Player ${currentPlayer} wins!`);
    } else if (gameState.every(cell => cell !== "")) {
        alert("It's a draw!");
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

// Function to check if there's a win
function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => gameState[index] === currentPlayer);
    });
}


// Function to reset the game
function resetGame() {
    gameState.fill("");
    gameActive = true;
    currentPlayer = "X";
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`b${i}`).value = "";
    }
}
    

// Event listeners for each cell
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 9; i++) {
        document.getElementById(`b${i + 1}`).addEventListener("click", () => handleCellClick(i));
    }
});
