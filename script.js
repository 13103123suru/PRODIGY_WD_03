var currentPlayer = 'X';
var gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function handleClick(row, col) {
    if (!gameBoard[row][col]) {
        gameBoard[row][col] = currentPlayer;
        document.getElementById('status').innerText = `Player ${currentPlayer}'s Turn`;
        renderGameBoard();
        if (checkForWin()) {
            document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
            return;
        }
        if (checkForDraw()) {
            document.getElementById('status').innerText = `It's a draw!`;
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function renderGameBoard() {
    var cells = document.querySelectorAll('.cell');
    cells.forEach(function(cell, index) {
        var row = Math.floor(index / 3);
        var col = index % 3;
        cell.innerText = gameBoard[row][col];
    });
}

function checkForWin() {
    // Check rows
    for (var i = 0; i < 3; i++) {
        if (gameBoard[i][0] === currentPlayer && gameBoard[i][1] === currentPlayer && gameBoard[i][2] === currentPlayer) {
            return true;
        }
    }
    // Check columns
    for (var j = 0; j < 3; j++) {
        if (gameBoard[0][j] === currentPlayer && gameBoard[1][j] === currentPlayer && gameBoard[2][j] === currentPlayer) {
            return true;
        }
    }
    // Check diagonals
    if ((gameBoard[0][0] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][2] === currentPlayer) ||
        (gameBoard[0][2] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][0] === currentPlayer)) {
        return true;
    }
    return false;
}

function checkForDraw() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (!gameBoard[i][j]) {
                return false;
            }
        }
    }
    return true;
}

