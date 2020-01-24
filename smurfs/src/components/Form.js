import React, {useState, useContext} from 'react'
import axios from 'axios';
import SmurfContext from '../contexts/SmurfContext'
import styled from 'styled-components'

const Input = styled.input`
    padding: 1%;
    font-size: 1.2rem;
    width: 50%;
`;

const TheForm = styled.form`
    background: #eaeaea;
    padding: 1%;
`;

const FormContainer = styled.div`
    width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
`;

const Button = styled.button`
    margin: 4%;
    width: 20%;
    padding: 2% 0;
    font-size: 100%;
    font-weight: 700;
    border: none;
    background: #00A4E5;
    color: white;
`;


const Form = () => {
    const {smurfs} = useContext(SmurfContext);
    const [newSmurf, setNewSmurf] = useState({
        name:'',
        age: '',
        height: '',
        id: ''
    })

    const handleChange = (e) => {
        e.preventDefault();
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value,
            id: Date.now()
        })
        console.log(newSmurf);
    }

    const onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:3333/smurfs', newSmurf)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setNewSmurf({
            name:'',
            age: '',
            height: '',
            id: ''
        })
    }


    return (
        <FormContainer>
            <TheForm onSubmit={onSubmit}>
                <h1>Add a new Smurf</h1>
                <Input name="name" autoComplete="off" placeholder="name" onChange={handleChange} value={newSmurf.name} required/>
                <Input name="age" autoComplete="off" placeholder="age"onChange={handleChange} value={newSmurf.age} required/>
                <Input name="height" autoComplete="off" placeholder="height"onChange={handleChange} value={newSmurf.height} required/><br></br>
                <Button>Add Smurf</Button>
            </TheForm>
        </FormContainer>
    )
}

export default Form