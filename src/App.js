import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import RowInput from './components/RowInput';
import ColumnInput from './components/ColumnInput';

function App() {

  let auxArr=[];
  let initialArr=[];
  let flag=0;

  for(let i=0; i<9; i++){
    if(flag===0){
      initialArr.push(flag);
      flag=1;
    }else{
      initialArr.push(flag);
      flag=0;
    }
  }

  const [noRows, setNoRows] = useState(3);
  const [noColumns, setNoColumns] = useState(3);
  const [gridArr, setGridArr] = useState(initialArr);
  
  const handleRowChange = (value) => {
    setNoRows(value);
  }; 
  
  const handleColumnChange = (value) => {
    setNoColumns(value);
  }; 
  
  useEffect(() => {
    
    flag = 0;
    
    for(let i=0; i<(noRows*noColumns); i++){
      if(flag===0){
        auxArr.push(flag);
        flag=1;
      }else{
        auxArr.push(flag);
        flag=0;
      }
    }
    setGridArr(auxArr);
  }, [noRows, noColumns]);

  if (gridArr.length!==0){
    return (
      <div className='App'>
  
        <h1 style={styles.center}>Green vs. Red</h1>
  
        <div>
            <div style={styles.center}>
              <RowInput  handleChange={handleRowChange} />
              <ColumnInput  handleChange={handleColumnChange} />
            </div>
            <Grid gridArr={gridArr} columns={noColumns}/>
        </div>
  
      </div>
    );

  }
  
}

const styles = {
  center: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    }
};

export default App;
