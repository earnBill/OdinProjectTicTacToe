let gameboard = {
    board: [['O','X','X'],
            ['O','X','O'],
            ['X','O','X']]
};

console.log(gameboard.board[0][2])

let player1 = createUser('tolis');
let player2 = createUser('bill');


function createUser (name) {
    winner = {name};
}

function gameBoard() {

}

function game (board) {
    let winner;

    if (board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
        winner = board[0][0];
    }
    else if (board[1][0] === board[1][1] && board[1][0] === board[1][2]) {
        winner = board[1][0];
    }
    else if (board[2][0] === board[2][1] && board[2][0] === board[2][2]) {       
        winner = board[2][0];
    }
    else if (board[0][0] === board[1][0] && board[0][0] === board[2][0]) {
        winner = board[0][0];
    }
    else if (board[0][1] === board[1][1] && board[0][1] === board[2][1]) {
        winner = board[0][1];
    }
    else if (board[0][2] === board[1][2] && board[0][2] === board[2][2]) {
        winner = board[0][2]; 
    }
    else if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        winner = board[0][0];
    }
    else if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        winner = board[0][2];
    }
    else {
        return 'Draw!!!';
    }
    if (winner === 'X') {
        return `Player X wins`;
    }
    else {
        return `Player O wins`;
    }
}

console.log(game(gameboard.board));