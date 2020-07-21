import React from 'react'

export default function Cell( { cellValue, cellNo, recordArr, color, chosen } ) {
    
    let borderColor = color;
    let count = 0;

    if (cellValue==1){
        count = 1;
    }

    
    if(chosen){
         borderColor = 'orange';
        
        if(recordArr.length>0){
            recordArr.forEach((array) => {
                if(array[cellNo-1].value===1){
                    count++;
                }
            });
        }
    }

    const styles = {
        cell: {
            width: '50px',
            height: '50px',
            backgroundColor: color,
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            borderRadius: "25%",
            border: `5px solid ${borderColor}`,
        },

        text: {
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '10px',
        }
    }



    return (
        <div style={styles.cell}>
            <div className='container' style={styles.text}>
                {chosen ? count : ''}
            </div>
        </div>
    );
}

