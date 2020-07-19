import React from 'react'

export default function Yposition( {handleChange, yMax} ) {
    const handleYChange = (event) => {
        handleChange(Number(event.target.value));
    }
    
    return (
        
            <div style={styles.center} className='container'>
                <div className='input-field'>
                    <input style={styles.inputStyle}
                        id='input'
                        type='number'
                        min={1}
                        max={yMax}
                        placeholder='Set Y position'
                        autoFocus
                        onChange={handleYChange}
                    />
                    <label  className='active' htmlFor='inputSalary'>
                        Cell row number
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
