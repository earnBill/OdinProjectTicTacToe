const container = document.querySelector('.container');

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

const gameBoard = (function() {
    
    console.log('run');
    for (let i = 0; i < 3; i++) {
        const row = document.createElement('div');
        container.appendChild(row).classList = 'row';
        console.log('add row');

        for (let j = 0; j < 3; j++) {
            const column = document.createElement('div');
            row.appendChild(column).classList = 'column';
            console.log('add column');
        }        
    } 
    const columns = document.querySelectorAll('.column');
    let i = 0;
    let j = 0;
    columns.forEach((column) => {
        column.dataset.box = i++;
        console.log('add data');
    })
    i = 0;
    const renderArray = () => {
        columns.forEach(column => {
            console.log(i,j);
            
            column.textContent = gameboard.board[i][j++];
            
            if(j === 3) {
                i++;
            }

            if (j===3) {
                j = 0;
            }
        })
    }
    return {renderArray};
})();

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
gameBoard.renderArray();