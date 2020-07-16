import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import RowInput from './components/RowInput';
import ColumnInput from './components/ColumnInput';

function App() {

  const [noRows, setNoRows] = useState(3);
  const [noColumns, setNoColumns] = useState(3);
  const [gridArr, setGridArr] = useState([]);
  const [gridArrSize, setGridArrSize] = useState(9);

  const handleRowChange = (value) => {
    setNoRows(value);
  }; 

  const handleColumnChange = (value) => {
    setNoColumns(value);
  }; 

  useEffect(() => {
    console.log(`Rows ${noRows}`);
    console.log(`Cols ${noColumns}`);
    setGridArrSize(noRows*noColumns);
  }, [noRows, noColumns]);

  useEffect(() => {
    setGridArr([gridArrSize]);
    console.log(`gridArrSize ${gridArrSize}`);
  }, [gridArrSize]);

  let auxGridArr=[];
  auxGridArr[0]=0;
  auxGridArr[1]=1;
  auxGridArr[2]=0;
  auxGridArr[3]=1;
  auxGridArr[4]=0;
  auxGridArr[5]=1;
  auxGridArr[6]=0;
  auxGridArr[7]=1;
  auxGridArr[8]=0;

  return (
    <div className='App'>

      <h1 style={styles.center}>Green vs. Red</h1>

      <div>
          <div style={styles.center}>

            <RowInput  handleChange={handleRowChange} />
            <ColumnInput  handleChange={handleColumnChange} />
          </div>
          <Grid gridArr={auxGridArr} columns={noColumns}/>
      </div>

    </div>
  );
}

const styles = {
  center: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    }
};

export default App;
