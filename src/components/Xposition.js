import React from 'react'

export default function Xposition( {handleChange, xMax} ) {
    const handleXChange = (event) => {
        handleChange(Number(event.target.value));
    }
    
    return (
        
            <div style={styles.center} className='container'>
                <div className='input-field'>
                    <input style={styles.inputStyle}
                        id='input'
                        type='number'
                        min={1}
                        max={xMax}
                        placeholder='Set X position'
                        autoFocus
                        onChange={handleXChange}
                    />
                    <label  className='active' htmlFor='col'>
                        Cell column number
                    </label>
                </div>
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