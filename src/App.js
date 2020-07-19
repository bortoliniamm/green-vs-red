import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import StartButton from './components/StartButton';
import ChooseCell from './components/ChooseCell';
import SetGrid from './components/SetGrid';

import { loadInitialArray, reloadArray, chooseCell } from './GameRules'

function App() {

  let auxArr=[];
  let initialArr=[];

  loadInitialArray(initialArr);

  const [noRows, setNoRows] = useState(3);
  const [noColumns, setNoColumns] = useState(3);
  const [gridArr, setGridArr] = useState(initialArr);
  const [xPosition, setXPosition] = useState(1);
  const [yPosition, setYPosition] = useState(1);
  const [position, setPosition] = useState(0);
  
  const handleRowChange = (value) => {
    setNoRows(value);
  }; 
  
  const handleColumnChange = (value) => {
    setNoColumns(value);
  }; 

  const changeX = (value) => {
    setXPosition(value);
  }; 

  const changeY = (value) => {
    setYPosition(value);
  }; 

  const handleButtonClick = (event) => {
    console.log(event);
}
  
  useEffect(() => {

    reloadArray(auxArr, noRows, noColumns);
    setGridArr(auxArr);

    let pos=chooseCell(yPosition, xPosition, noColumns);

    setPosition(pos);

  }, [noRows, noColumns]);

  useEffect(() => {

    let pos=chooseCell(yPosition, xPosition, noColumns);

    setPosition(pos);

  }, [xPosition, yPosition]);

  if (gridArr.length!==0){
    return (
      <div className='App'>
  
        <h1 style={styles.center}>Green vs. Red</h1>
  
        <div>
            <div>
              <SetGrid rowChange={handleRowChange} columnChange={handleColumnChange}/>
            </div>
            <div>
              <ChooseCell  Xpos={changeX} Ypos={changeY} noRows={noRows} noColumns={noColumns}/>
            </div>
            <div style={styles.center}>
              <StartButton handleClick={handleButtonClick}/>
            </div>
            <Grid gridArr={gridArr} columns={noColumns} myCell={position}/>
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
      marginBottom: '30px',
    }
};

export default App;
