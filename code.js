const container = document.querySelector('.container');
const winMsg = document.querySelector('h2');


let gameboard = {
    board: [['','',''],
            ['','',''],
            ['','','']]
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

            if (j === 3) {
                j = 0;
            }

            if (i === 3) {
                i = 0;
            }
        })
    }

    let mark;

    const addMark = () => {
        if(!mark) {
            mark = 'X';
        }
        else if(mark==='X') {
            mark = 'O';
        }
        else if (mark === 'O') {
            mark = 'X'
        }
        console.log(mark);
        return mark;
    }
    return {renderArray, addMark};

})();

function checkGame (board) {
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
    else if (board[0][0] && board[0][1] && board[0][2] && board[1][0] && 
             board[1][1] && board[1][2] && board[2][0] && board[2][1] && 
             board[2][2] ){
                
        winMsg.textContent = 'Draw!!!'
        return 'Draw!!!';
    }
    if (winner === 'X') {
        winMsg.textContent = 'Player X wins';
        return `Player X wins`;
    }
    else if (winner === 'O') {
        winMsg.textContent = 'Player O wins';
        return `Player O wins`;
    }
}

const columns = document.querySelectorAll('.column');

columns.forEach((box) => {
    box.addEventListener('click',()=> {

        if (box.dataset.box === '0' && box.textContent === '') {
            gameboard.board[0][0] = gameBoard.addMark();
        }
        else if (box.dataset.box === '1' && box.textContent === '') {
            gameboard.board[0][1] = gameBoard.addMark();
        }
        else if (box.dataset.box === '2' && box.textContent === '') {
            gameboard.board[0][2] = gameBoard.addMark();
        }
        else if (box.dataset.box === '3' && box.textContent === '') {
            gameboard.board[1][0] = gameBoard.addMark();
        }
        else if (box.dataset.box === '4' && box.textContent === '') {
            gameboard.board[1][1] = gameBoard.addMark();
        }
        else if (box.dataset.box === '5' && box.textContent === '') {
            gameboard.board[1][2] = gameBoard.addMark();
        }
        else if (box.dataset.box === '6' && box.textContent === '') {
            gameboard.board[2][0] = gameBoard.addMark();
        }
        else if (box.dataset.box === '7' && box.textContent === '') {
            gameboard.board[2][1] = gameBoard.addMark();
        }
        else if (box.dataset.box === '8' && box.textContent === '') {
            gameboard.board[2][2] = gameBoard.addMark();
        }
        console.log('click');
        gameBoard.renderArray();
        console.log(checkGame(gameboard.board));
    })
})
