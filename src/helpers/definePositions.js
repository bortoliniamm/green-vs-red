function definePositions(arr, noRows, noCols){

    defineCorners(arr, noRows, noCols);
    defineTopWall(arr, noCols);
    defineBottomWall(arr, noRows, noCols);
    defineLeftWall(arr, noRows, noCols);
    defineRighttWall(arr, noRows, noCols);
    defineMiddle(arr, noCols);
    
}

function defineCorners(arr, noRows, noCols){
    //corners 
    // i===0
    // i===noColumns
    // (noRows-1)*noColumns + 1
    // noRows*noCols
    
    for (let i=0; i<arr.length; i++) {
      if(i+1===1){
        arr[i].position='top-left-corner';
        arr[i].neighbours=[i+1, i+noCols, i+noCols+1];
      }else if(i+1===noCols){
        arr[i].position='top-right-corner';
        arr[i].neighbours=[i-1, i+noCols-1, i+noCols];
      }else if(i+1===((noRows-1)*noCols +1)){
        arr[i].position='bottom-left-corner';
        arr[i].neighbours=[i-noCols, i-noCols+1, i+1];
      }else if(i+1===(noRows*noCols)){
        arr[i].position='bottom-right-corner';
        arr[i].neighbours=[i-noCols-1,i-noCols, i-1];
      }
    }
}
  
function defineTopWall(arr, noCols){
// top wall excluding corners
// 1 < i < noCols

    for(let i=1; i+1<noCols; i++){
        arr[i].position='top-wall';
        arr[i].neighbours=[i-1, i+1, i+noCols-1, i+noCols, i+noCols+1];
    };
}

function defineBottomWall(arr, noRows, noCols){
// bottom wall excluding corners
    // ((noRows-1)*noCols)+1<i<((noRows-1)*noCol)+noCol

    for(let i=((noRows-1)*noCols + 1); i<(noRows*noCols - 1); i++){
        arr[i].position='bottom-wall';
        arr[i].neighbours=[ i-noCols-1, i-noCols, i-noCols+1, i-1, i+1];
    };
}

function defineLeftWall(arr, noRows, noCols){
// left wall excluding corners
    // 1 + (row-1)*noCols || 1<row<noRows

    for(let row=2; row<noRows; row++){
        let pos = (row-1)*noCols;

        for(let j=0; j<arr.length; j++){
            if(j===pos){
                arr[j].position='left-wall';
                arr[j].neighbours=[j-noCols, j-noCols+1, j+1, j+noCols, j+noCols+1];
            }
        }
    }
}

function defineRighttWall(arr, noRows, noCols){
    
    // right wall excluding corners
    // row*noCols || 1<row<noRows

    for(let row=2; row<noRows; row++){
        let pos = row*noCols -1;

        for(let j=0; j<arr.length; j++){
            if(j===pos){
                arr[j].position='right-wall';
                arr[j].neighbours=[j-noCols-1, j-noCols, j-1, j+noCols-1, j+noCols];
            }
        }
    }
}

function defineMiddle(arr, noCols) {
    for(let i=0; i<arr.length; i++){
        if(arr[i].position==='middle'){
        arr[i].neighbours=[i-noCols-1, i-noCols, i-noCols+1, i-1, i+1, i+noCols-1, i+noCols, i+noCols+1];
        };
    };
}

export { definePositions }
  