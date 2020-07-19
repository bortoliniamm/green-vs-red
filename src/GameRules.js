function loadInitialArray(initialArr){

    let flag=0;

    for(let i=0; i<9; i++){
        if(flag===0){
            initialArr.push(flag);
            flag=1;
        }else{
            initialArr.push(flag);
            flag=0;
        }
    }
}

function reloadArray(gridArr, noRows, noColumns){
    
    let flag = 0;

    for(let i=0; i<(noRows*noColumns); i++){
      if(flag===0){
        gridArr.push(flag);
        flag=1;
      }else{
        gridArr.push(flag);
        flag=0;
      }
    }
}

function chooseCell(row, col, noColumns){
    return ((row-1)*noColumns)+col-1;
}

// function test (gridArr, noRows, noColumns){
    
// }

export { loadInitialArray, reloadArray, chooseCell }
