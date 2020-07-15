import React from 'react'
import Cell from './Cell.js'

export default function Grid( { gridArr } ) {
    let color='green';
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

const styles = {
    grid: {
        display: 'flex',
        flexDirection: 'row',
        align: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        width: '210px', 
        // as celulas possuem 70px incluindo as margens 
        // de distanciamento. O número de linhas e colunas 
        // deve ser calculado com base nisso.
        // Para 4 colunas, width=280 etc
        // para x colunas, width=70*x
        // colocar array styles antes do return para 
        // que este possa receber width como variavel
      }
  };
