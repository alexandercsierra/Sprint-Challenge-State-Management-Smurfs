import React, { useState, useEffect } from "react";
import "./App.css";
import Smurf from './Smurf'
import SmurfContext from '../contexts/SmurfContext'
import axios from 'axios'
import Form from '../components/Form'

const App = () => {

  const [smurfs, setSmurfs] = useState();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(()=>{
    axios.get('http://localhost:3333/smurfs')
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err))
  }, [smurfs])

  return (
    <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfContext.Provider value={{smurfs, isEditing, setIsEditing, setSmurfs}}>
          <Form/>
          <Smurf/>
        </SmurfContext.Provider>
        
        
      </div>
  );
}

export default App;
