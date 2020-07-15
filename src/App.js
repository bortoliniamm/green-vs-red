import React from 'react';
import Grid from './components/Grid';
import Cell from './components/Cell';

function App() {


  let gridArr=[];
  gridArr[0]=0;
  gridArr[1]=1;
  gridArr[2]=0;
  gridArr[3]=1;
  gridArr[4]=0;
  gridArr[5]=1;
  gridArr[6]=0;
  gridArr[7]=1;
  gridArr[8]=0;

  return (
    <div className='App'>

      <h1 style={styles.center}>Green vs. Red</h1>

      <div>
          <Grid gridArr={gridArr}/>
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
