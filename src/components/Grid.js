import React from 'react'
import Cell from './Cell.js'

export default function Grid( { gridArr, columns } ) {
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
            width: gridWidth, // Each cell has a 70px including its margins. The number of columns must be calculated based on that.
          }
      };

    return (
        <div>
            <div className='container' style={styles.grid}>
                {gridArr.map(element => {
                    if(element==1){color='red'}else{color='green'};
                    return <Cell color={color}/>;
                })}
            </div>
        </div>
    )
}

