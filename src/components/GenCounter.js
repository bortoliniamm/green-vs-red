import React from 'react'

export default function GenCounter({ genCount }) {
    return (
        <div style={styles.flexBox}>    
            <div>
                <strong>Generation Count: </strong> 
            </div>
            <div className='container' style={styles.cell}>
                <div style={styles.text}>
                    {genCount}
                </div>
            </div>
        </div>
    )
}

const styles = {
    cell: {
        width: '50px',
        height: '50px',
        backgroundColor: 'blue',
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        marginRight: "10px",
        borderRadius: "25%",
    },
    text: {
        alignItems: 'center',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        height: '7.5vh',
    },
    flexBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '530px',
    }
};
