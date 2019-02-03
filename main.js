function getRandomNumber() {
  return Math.floor(Math.random() * 8);
}

/** Buscar dos posiciones random para posicionarse **/
function addBoat(board) {
  let added = false;
  while(!added){  
    let x = getRandomNumber();
    let y = getRandomNumber();

    if(x + 1 < board.length && board[x][y] === '~' && board[x+1][y] === '~'){
      board[x][y] = 'O';
      board[x + 1][y] = 'O';
      added = true;
    }
  }
}

function initBoard() {
  const board = [];
  for (let i = 0; i < 8; i++) {
      board.push([]);
      for (let j = 0; j < 8; j++) {
          board[i].push('~');
      }
  }

  for (let i = 0; i < 4; i++) {
      addBoat(board);
  }
  console.table(board);
  return board;
}

function playProof(){
  let x = parseInt(prompt('X Coordenate'),10);
  let y = parseInt(prompt('Y Coordenate'),10);

  while(true){
    const res = prompt('Dame un numero');
    if(!isNaN(res) && parseInt(res,10) >= 0 && parseInt(res) < 8){
      return parseInt(res);
    }  
  }
}

function play(board){
    let numTurn = 0;
    let numSeat = 0;

    while(numTurn < 25 && numSeat < 8){
    let playerX = playProof(); /** El 10 es la base decimal **/
    let playerY = playProof();

    if(board[playerX][playerY] === 'O'){
      alert('Hit');
      board[playerX][playerY] = 'X';
      numSeat++;
    }else{
      alert('Miss');
    }
    numTurn++;
  }
  if (numSeat === 8){
    alert('You Win')
  }else{
    alert('You Lost')
  }
}

const board = initBoard();
play(board);
playProof(board);


