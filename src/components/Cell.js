import React from 'react'

export default function Cell( { color } ) {
    const styles = {
        cell: {
            width: '50px',
            height: '50px',
            backgroundColor: color,
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            borderRadius: "25%"
        }
    }
    return (
        <div style={styles.cell}></div>
    );
}

