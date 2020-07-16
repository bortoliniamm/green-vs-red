import React from 'react'

export default function RowInput({ handleChange}) {
    const handleInputChange = (event) => {
        handleChange(event.target.value);
    }
    
    return (
        
            <div style={styles.center} className='container'>
                <div className='input-field'>
                    <input style={styles.inputStyle}
                        id='input'
                        type='number'
                        placeholder='Escolha um valor'
                        autoFocus
                        min={3}
                        max={10}
                        onChange={handleInputChange}
                    />
                    <label  className='active' htmlFor='inputSalary'>
                        Rows
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
