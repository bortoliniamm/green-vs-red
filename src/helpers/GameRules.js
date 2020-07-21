function applyRules(arr) {

    let auxArr = arr.map(u => Object.assign({}, u, { approved: true }));
    let nextArr = [];
    let countGreen = 0;

    for (let i=0; i<arr.length; i++){

      arr[i].neighbours.forEach((index) =>{
        if (arr[index].value===1){
          countGreen++;
        }
          
      });
  
      if(arr[i].value===1){
        if(countGreen===2 || countGreen===3 || countGreen===6){
          auxArr[i].value=1;
        }else{
          auxArr[i].value=0;
        }
      }else if(arr[i].value===0){
          if(countGreen===3 || countGreen===6){
            auxArr[i].value=1;
          }else{
            auxArr[i].value=0;
          }
      }
  
      countGreen=0;

      nextArr.push(auxArr[i]);
      
    }

    return nextArr;
}

function chooseCell(row, col, noColumns){
    return ((row-1)*noColumns)+col-1;
}

export { chooseCell, applyRules }
