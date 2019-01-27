
/** Funcion crear tablero **/

function board(height, width){
  let board = []; 
    for (let i = 0; i < height; i++) {     
          board.push([]);
        for(let j = 0; j < width; j++){   
            board[i].push('~');    
    }  
  }
    console.table(board);
    return board; 
}
board(8,8);


/** Objeto que contien mis barcos  **/ 
let ships = {
    ship1:{
      lenght: 2
    },
    ship2:{
      lenght: 2
    },
    ship3:{
      lenght: 2
    },
    ship4:{
      lenght: 3
    },
    ship5:{
      lenght: 3
    },
    ship6:{
      lenght: 4
    }
}
console.table(ships);

/** Random para buscar X - Y para poder posicionar mis barcos **/
function shipPositioning(){

  let hori = Math.floor(Math.random() * 8);
  console.log(hori);
  let vert = Math.floor(Math.random() * 8);
  console.log(vert);
  let shipPositioning = hori + vert;
  console.log(shipPositioning);
  return shipPositioning;
}
shipPositioning();


