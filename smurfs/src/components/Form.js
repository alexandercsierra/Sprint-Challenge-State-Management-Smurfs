import React, {useState, useContext} from 'react'
import axios from 'axios';
import SmurfContext from '../contexts/SmurfContext'

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
        <div>
            <form onSubmit={onSubmit}>
                <input name="name" placeholder="name" onChange={handleChange} value={newSmurf.name}/>
                <input name="age" placeholder="age"onChange={handleChange} value={newSmurf.age}/>
                <input name="height" placeholder="height"onChange={handleChange} value={newSmurf.height}/>
                <button>Add Smurf</button>
            </form>
        </div>
    )
}

export default Form