const container = document.querySelector('.container');
const winMsg = document.querySelector('h2');
const player1Name = document.querySelector('#player1-name');
const player2Name = document.querySelector('#player2-name');
const startBtn = document.querySelector('.start-btn');
const startContainer = document.querySelector('.start-container');
const playAgainBtn = document.querySelector('.play-again-btn')

let gameboard = {
    board: [['','',''],
            ['','',''],
            ['','','']]
};


let player1;
let player2;


function createUser (name) {
    return {name};
}

playAgainBtn.addEventListener('click',  function playAgain () {
    gameboard.board = [['','',''],
                       ['','',''],
                       ['','','']];
    winMsg.textContent = '';
    gameBoard.renderArray();
    disableMark = false;
    playAgainBtn.style.display = 'none';
});

startBtn.addEventListener('click',() => {
    player1 = createUser(player1Name.value);
    player2 = createUser(player2Name.value);
    console.log(player1.name);
    console.log(player2.name);

    startContainer.style.display = 'none';
    gameBoard.startGame();
    gameBoard.addData();
    play();
})


const gameBoard = (function() {
    
    console.log('run');
    
    const startGame = () => {
      container.style.display = 'flex';  
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
    }
    
    const addData = () => {
        let num = 0;
        const columns = document.querySelectorAll('.column');
        columns.forEach((column) => {
          column.dataset.box = num++;
          console.log('add data');
    })
    }


    const renderArray = () => {
        let i = 0;
        let j = 0;
        const columns = document.querySelectorAll('.column');
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
    

    const playerScore = function (player1, player2) {

    }

    return {renderArray, startGame, addMark, addData};

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
        playAgainBtn.style.display = "block";
        return 'Draw!!!';
    }
    if (winner === 'X') {
        winMsg.textContent = `${player1.name} X wins`;
        playAgainBtn.style.display = "block";
        return `Player X wins`;
    }
    else if (winner === 'O') {
        winMsg.textContent = `${player2.name} O wins`;
        playAgainBtn.style.display = "block";
        return `Player O wins`;
    }
    
}

let disableMark = false;

function play() {
  const columns = document.querySelectorAll('.column');
  columns.forEach((box) => {
    box.addEventListener('click',()=> {
        

        if (box.dataset.box === '0' && box.textContent === '' && !disableMark) {
            gameboard.board[0][0] = gameBoard.addMark();
        }
        else if (box.dataset.box === '1' && box.textContent === '' && !disableMark) {
            gameboard.board[0][1] = gameBoard.addMark();
        }
        else if (box.dataset.box === '2' && box.textContent === '' && !disableMark) {
            gameboard.board[0][2] = gameBoard.addMark();
        }
        else if (box.dataset.box === '3' && box.textContent === '' && !disableMark) {
            gameboard.board[1][0] = gameBoard.addMark();
        }
        else if (box.dataset.box === '4' && box.textContent === '' && !disableMark) {
            gameboard.board[1][1] = gameBoard.addMark();
        }
        else if (box.dataset.box === '5' && box.textContent === '' && !disableMark) {
            gameboard.board[1][2] = gameBoard.addMark();
        }
        else if (box.dataset.box === '6' && box.textContent === '' && !disableMark) {
            gameboard.board[2][0] = gameBoard.addMark();
        }
        else if (box.dataset.box === '7' && box.textContent === '' && !disableMark) {
            gameboard.board[2][1] = gameBoard.addMark();
        }
        else if (box.dataset.box === '8' && box.textContent === '' && !disableMark) {
            gameboard.board[2][2] = gameBoard.addMark();
        }
        console.log('click');
        gameBoard.renderArray();
        if (checkGame(gameboard.board)) {
            disableMark = true;
        };
        console.log(disableMark);
    })
  })
}
