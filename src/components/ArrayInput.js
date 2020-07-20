import React from 'react'

export default function ArrayInput({ gridSize, myArr }) {

    let str='';
    let arr=[];
    let auxArr=[]

    const handleClick = () => {
        if(arr.length===gridSize){
            myArr(arr);
        }
    }

    const handleChange = (event) => {

        let value=0;
        arr=[];
        auxArr=[];

        str=event.target.value;
        auxArr=str.split(',');

        auxArr.forEach((string)=>{
            if(parseInt(string)===1 || parseInt(string)===0){
                value=parseInt(string)
                arr.push(value);
            }
        });

        if(arr.length===gridSize){
            myArr(arr);
        }

        // console.log(arr);
    }

    return (

        <div>
            <div style={styles.center} className='container'>
                <div>
                    <div className='input-field'>
                        <input style={styles.inputStyle}
                            id='input'
                            type='text'
                            placeholder='0, 1, 1, 0...'
                            autoFocus
                            onChange={handleChange}
                        />
                        <label  className='active' htmlFor='inputArray'>
                            Set your array
                        </label>
                    </div>
                </div>
                <div style={styles.btn}>
                    <a className="waves-effect waves-light btn-small" onClick={handleClick}>Set</a>
                </div>
            </div>
            <div>
                <p>Use simple commas (',') to separate the entries</p>
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
    }
};
