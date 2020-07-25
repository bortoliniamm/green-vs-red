import React from 'react'
import Cell from './Cell.js'

export default function Grid( { recordArr, gridArr, columns, myCell } ) {
    let color='green';

    let gridWidth = 70*columns;

    const styles = {
        grid: {
            display: 'flex',
            flexDirection: 'row',
            align: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            width: gridWidth, // Each cell has a 70px width including its margins. The number of columns must be calculated based on that.
          }
      };

    let j=0;
    let chosen=false;

    return (
        <div>
            <div className='container' style={styles.grid}>
                {gridArr.map(element => {

                    if(element.value===0){
                        color='red'
                    }else{
                        color='green'
                    };

                    if(myCell===j){
                        chosen=true;
                    }else{
                        chosen=false;
                    };

                    j++;
                    
                    return <Cell cellValue={element.value} recordArr={recordArr} key={j} cellNo={j} color={color} chosen={chosen}/>;
                })}
            </div>
        </div>
    )
}

