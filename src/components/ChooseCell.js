import React from 'react'
import Xposition from './Xposition';
import Yposition from './YPosition';

export default function ChooseCell({ Xpos, Ypos, noRows, noColumns }) {
    const handleXChange = (value) => {
        Xpos(value);
    }
    const handleYChange = (value) => {
        Ypos(value);
    }
    
    return (
        
            <div style={styles.center} className='container'>
                <Yposition yMax={noRows} handleChange={handleYChange} />
                <Xposition xMax={noColumns} handleChange={handleXChange} />
            </div>
    )
}

const styles = {
    inputStyle: {
        display: 'flex',
        flexDirection: 'row',
        width: '150px',
        alignItems: 'center',
        marginLeft: '10px',
    },
    center: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }
};
