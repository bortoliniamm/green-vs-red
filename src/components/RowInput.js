import React from 'react'

export default function RowInput({ handleChange}) {
    const handleInputChange = (event) => {
        if(event.target.value != '' && event.target.value != '0' && event.target.value.indexOf('-')===-1){

            handleChange(Number(event.target.value));
        }
    }
    
    return (
        
            <div style={styles.center} className='container'>
                <div className='input-field'>
                    <input style={styles.inputStyle}
                        id='input'
                        type='number'
                        placeholder='Set a value'
                        autoFocus
                        min={3}
                        max={10}
                        onChange={handleInputChange}
                    />
                    <label  className='active' htmlFor='inputRow'>
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
