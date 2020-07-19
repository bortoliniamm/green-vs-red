import React from 'react'
import Cell from './Cell.js'

export default function Grid( { gridArr, columns, myCell } ) {
    let color='green';
    let borderColor=color;

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

    return (
        <div>
            <div className='container' style={styles.grid}>
                {gridArr.map(element => {
                    if(element.value===0){color='red'}else{color='green'};
                    if(myCell===j){borderColor='orange'}else{borderColor=color};
                    j++;
                    return <Cell key={j} position={element.position} color={color} borderColor={borderColor}/>;
                })}
            </div>
        </div>
    )
}

