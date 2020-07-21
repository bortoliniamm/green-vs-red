import React, { useState, useEffect } from 'react';

import Grid from './components/Grid.js';
import ChooseCell from './components/ChooseCell.js';
import SetGrid from './components/SetGrid.js';
import ArrayInput from './components/ArrayInput.js';
import RunButton from './components/RunButton.js';
import GenCounter from './components/GenCounter.js';

import { chooseCell, applyRules } from './helpers/GameRules.js';
import { initializeEmptyArray} from './helpers/initializer.js'

function App() {

  let initialArr=[];
  
  const [noRows, setNoRows] = useState(3);
  const [noColumns, setNoColumns] = useState(3);
  
  initializeEmptyArray(initialArr, noRows, noColumns);

  const [gridArr, setGridArr] = useState(initialArr);
  const [strGridArr, setStrGridArr] = useState([])
  const [xPosition, setXPosition] = useState(1);
  const [yPosition, setYPosition] = useState(1);
  const [position, setPosition] = useState(0);
  const [countGen, setCountGen] = useState(0);
  
  let emptyRecordArray=[];
  const [recordArr, setRecordArr] = useState(emptyRecordArray);

  const handleArrayInput = (arr) => {

    let gridArrCopy = gridArr.map(u => Object.assign({}, u, { approved: true }));
    
    let i=0;
    gridArrCopy.forEach((cell) => {
      cell.value=arr[i];
      i++;
    });

    setGridArr(gridArrCopy);

    setRecordArr(emptyRecordArray);
  }; 

  const handleDisplayChange = (arr) => {
    setStrGridArr(arr);
  }
    
  const handleRowChange = (value) => {
    setStrGridArr('');
    setCountGen(0);
    setRecordArr(emptyRecordArray);
    setNoRows(value);
  }; 
  
  const handleColumnChange = (value) => {
    setStrGridArr('');
    setCountGen(0);
    setRecordArr(emptyRecordArray);
    setNoColumns(value);
  }; 
  
  const changeX = (value) => {
    setXPosition(value);
  }; 
  
  const changeY = (value) => {
    setYPosition(value);
  }; 
  
  const handleButtonClick = () => { 
  
    let contAux=countGen;
    contAux++;
    setCountGen(contAux);

    let oldGridArr = gridArr.map(u => Object.assign({}, u, { approved: true }));
    let newRecordArr=recordArr.map(u => Object.assign({}, u, { approved: true }));
    
    newRecordArr.push(oldGridArr);
    setRecordArr(newRecordArr);

    let newGridArr=applyRules(oldGridArr);
    setGridArr(newGridArr);

  }

  useEffect(() => {
    
    let newEmptyArray=[];
    initializeEmptyArray(newEmptyArray, noRows, noColumns);
    setGridArr(newEmptyArray);

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
  
        <h1 style={styles.title}>Green vs. Red</h1>
  
            <div style={styles.half}>
              <div style={styles.inputs}>
                <div style={{marginTop: '50px'}}>
                  <SetGrid rowChange={handleRowChange} columnChange={handleColumnChange}/>
                  <ChooseCell  Xpos={changeX} Ypos={changeY} noRows={noRows} noColumns={noColumns}/>
                  <ArrayInput strGridArray={strGridArr} gridSize={noRows*noColumns} myArr={handleArrayInput} strGrid={handleDisplayChange}/>
                  <div style={styles.btn}>
                    <RunButton getClick={handleButtonClick} />
                  </div>
                </div>
              </div>
              <div style={styles.outputs}>
                  <GenCounter genCount={countGen}/>
                  <Grid recordArr={recordArr} gridArr={gridArr} columns={noColumns} myCell={position}/>
              </div>
            </div>

      </div>
    );

  }  
}

const styles = {
  title: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: '25px',
      marginTop: '25px',
      alignItems: 'center'
    },
  half: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '25px',
    marginTop: '25px',
  },
  inputs: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: '0',
    margin: '0',
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-start', 
  },
  outputs: {
    height: '500px',
    width: '750px',
  },
  btn: {
    marginTop: '30px',
    marginLeft: '350px',
  }
};

export default App;