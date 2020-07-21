import React, { useState, useEffect } from 'react';

import Grid from './components/Grid.js';
import ChooseCell from './components/ChooseCell.js';
import SetGrid from './components/SetGrid.js';
import ArrayInput from './components/ArrayInput.js';
import SetLoops from './components/SetLoops.js';
import GenCounter from './components/GenCounter.js';

import { loadInitialArray, reloadArray, chooseCell, applyRules, countGreen } from './GameRules.js'


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
  const [generations, setGenerations] = useState(1);
  const [countGen, setCountGen] = useState(0);
  
  let recAux=[]
  const [recordArr, setRecordArr] = useState(recAux);

  let auxArr2=gridArr.map(u => Object.assign({}, u, { approved: true }));
  let newArr=[];

  const handleArrayInput = (arr) => {
    let i=0;
    let auxArr = gridArr.map(u => Object.assign({}, u, { approved: true }));
    
    auxArr.forEach((cell) => {
      cell.value=arr[i];
      i++;
    });

    setGridArr(auxArr);

    setRecordArr(recAux);
  }; 
  
  const handleGenerationsChange = (value) => {
    setGenerations(value);
  }
  
  const handleRowChange = (value) => {
    setRecordArr(recAux);
    setNoRows(value);
  }; 
  
  const handleColumnChange = (value) => {
    setRecordArr(recAux);
    setNoColumns(value);
  }; 
  
  const changeX = (value) => {
    setXPosition(value);
  }; 
  
  const changeY = (value) => {
    setYPosition(value);
  }; 

  function loadNextGeneration() {
    
    let contAux=countGen;
    contAux++;
    setCountGen(contAux);

    let aux=recordArr.map(u => Object.assign({}, u, { approved: true }));
    aux.push(auxArr2);
    setRecordArr(aux);

    newArr=applyRules(auxArr2);
    setGridArr(newArr);
  }

  const handleButtonClick = () => { 
    
    if(generations!=1){

      // let int = 1000;
      // for(let i=0; i < generations; i++){
      //   setTimeout(function () {
          loadNextGeneration();
      //   }, i*int);
      // }

    }else{

      loadNextGeneration();
    }
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
      <div className='App' style={styles.backgroud}>
  
        <h1 style={styles.center}>Green vs. Red</h1>
  
        <div>
            <div>
              <SetGrid rowChange={handleRowChange} columnChange={handleColumnChange}/>
            </div>
            <div>
              <ChooseCell  Xpos={changeX} Ypos={changeY} noRows={noRows} noColumns={noColumns}/>
            </div>
                <div style={styles.center}>
                    <ArrayInput gridSize={noRows*noColumns} myArr={handleArrayInput}/>
                </div>
            <div style={styles.center}>
              <div>
                  <SetLoops getClick={handleButtonClick} noGenerations={handleGenerationsChange}/>
              </div>
              <GenCounter genCount={countGen}/>
            </div>
            <Grid recordArr={recordArr} gridArr={gridArr} columns={noColumns} myCell={position}/>
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
      marginBottom: '25px',
      marginTop: '25px',
    },
};

export default App;