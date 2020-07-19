import React from 'react'

import RowInput from './RowInput';
import ColumnInput from './ColumnInput';

export default function SetGrid({ rowChange, columnChange }) {

    const handleRowChange = (value) => {
        rowChange(value);
      }; 
      
      const handleColumnChange = (value) => {
        columnChange(value);
      }; 

    return (
        <div style={styles.center} className='container'>
            <RowInput  handleChange={handleRowChange} />
            <ColumnInput  handleChange={handleColumnChange} />
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
