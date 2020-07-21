import React from 'react'
import ArrayStringDisplay from './ArrayStringDisplay.js'

export default function ArrayInput({ strGridArray, gridSize, myArr, strGrid }) {

    let str='';
    let arr=[];
    let auxArr=[];
    let strArr=[];

    const handleClick = () => {

        if(arr.length===gridSize){
            myArr(arr);
            strGrid(strArr);
        }else{
            strGrid([]);
        }
    }

    const handleChange = (event) => {

        arr=[];
        auxArr=[];
        strArr=[];

        str=event.target.value;
        auxArr=str.split(',');


        auxArr.forEach((string)=>{
            if(parseInt(string)===1 || parseInt(string)===0){
                let value=parseInt(string);
                strArr.push(string);
                arr.push(value);
            }
        });

    }

    return (
        <div>
              <div style={styles.center} className='container'>
                
                <div>
                    <div style={styles.tipCell}>
                        <p style={{color: 'white'}}>
                            Use simple commas to separate the entries (",").
                        </p>
                    </div>
                </div>

                <div style={styles.controllers}>
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
                    
                    <div style={styles.btn}>
                        <a className="waves-effect waves-light btn-small" onClick={handleClick}>Set</a>
                    </div>
                    
                </div>
            </div>
            <div>
                <ArrayStringDisplay strGridArray={strGridArray}/>
            </div>
        </div>
    )
}

const styles = {
    inputStyle: {
        width: '160px',
    },
    controllers: {
        marginLeft: '50px',
    },
    tipCell: {
        width: '125px',
        height: '125px',
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "50px",
        padding: '15px',
        backgroundColor: 'darkgreen',
        borderRadius: "25%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontColor: 'white'
    },
    center: {
        width: '500px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: '35px'
    },
    btn: {
        marginLeft: '110px',
    }
}
