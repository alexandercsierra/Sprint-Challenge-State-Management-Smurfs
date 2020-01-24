import React, { useState, useEffect } from "react";
import "./App.css";
import Smurf from './Smurf'
import SmurfContext from '../contexts/SmurfContext'
import axios from 'axios'
import Form from '../components/Form'
import styled from 'styled-components'

const H1 = styled.h1`
text-shadow: 0px 0px 6px rgba(255,255,255,0.7);


`;

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
        <H1>SMURFS 2.0! Now with <span class="redux">Redux</span> useContext!</H1>
        <SmurfContext.Provider value={{smurfs, isEditing, setIsEditing}}>
          <Form/>
          <Smurf/>
        </SmurfContext.Provider>
        
        
      </div>
  );
}

export default App;
