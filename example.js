
function board(){

   let array = [];  
   let calc = Math.floor(Math.random() * 8;

   for (let i = 0; i < calc; i++){
        array.push([]);
        for (let j = 0; j < calc; j++){
          array[i].push(1);
        }   
      }
   console.table(array);
}

board();