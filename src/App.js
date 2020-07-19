import React, { useState, useEffect } from 'react';
import Grid from './components/Grid.js';
import ChooseCell from './components/ChooseCell.js';
import SetGrid from './components/SetGrid.js';

import { loadInitialArray, reloadArray, chooseCell, applyRules } from './GameRules.js'

function App() {

  let auxArr=[];
  let initialArr=[];

  const [noRows, setNoRows] = useState(3);
  const [noColumns, setNoColumns] = useState(3);

  loadInitialArray(initialArr, noRows, noColumns);

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

  const handleButtonClick = () => {

    auxArr=Object.assign([], gridArr);

    let newArr=applyRules(auxArr);

    setGridArr(newArr);
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
              <div>
                  <a className="waves-effect waves-light btn-small" onClick={handleButtonClick}>Start</a>
              </div>
              {/* <StartButton handleClick={handleButtonClick}/> */}
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
