import { definePositions } from './definePositions.js';

function initializeEmptyArray(initialArr, noRows, noCols){

    let flag=0;

    for(let i=0; i<(noRows*noCols); i++){
        if(flag===0){
            initialArr.push({
              "value": flag,
              "position": 'middle',
              "neighbours":{},
            });
            flag=1;
          }else{
            initialArr.push({
              "value": flag,
              "position": 'middle',
              "neighbours":{},
            });
            flag=0;
          }
        }
        
        definePositions(initialArr, noRows, noCols);
}

export {initializeEmptyArray}