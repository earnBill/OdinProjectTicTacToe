let gameboard = {
    board: [[],[]]
};

gameboard.board[1][1] = 'O';
console.log(gameboard.board[1][1])

let player1 = createUser('tolis');
let player2 = createUser('bill');


function createUser (name) {
    return {name};
}