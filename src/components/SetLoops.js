import React from 'react'

export default function SetLoops({ getClick, noGenerations }) {

    let counter=1;

    const handleButtonClick = () => {
        getClick();
    }
    
    const handleChange = (event) => {
        counter = event.target.value;
        noGenerations(counter);
    }
    
    return (

        <div>
            <div style={styles.center} className='container'>
                <div>
                    <div className='input-field'>
                        <input style={styles.inputStyle}
                            id='input'
                            type='number'
                            placeholder='Number of generations'
                            autoFocus
                            onChange={handleChange}
                        />
                        <label  className='active' htmlFor='inputArray'>
                            Set N
                        </label>
                    </div>
                </div>
                <div style={styles.btn}>
                    <a className="waves-effect waves-light btn-small" onClick={handleButtonClick}>RUN</a>
                </div>
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
    },
    btn: {
        marginLeft: '30px',
        width: '100px'
    }
};
