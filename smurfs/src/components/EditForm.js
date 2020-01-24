import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios';
import SmurfContext from '../contexts/SmurfContext'

const EditForm = (props) => {
    const {editSmurf} = props;
    const {smurfs} = useContext(SmurfContext);
    const [newSmurf, setNewSmurf] = useState({
        name:'',
        age: '',
        height: '',
        id: ''
    })

    useEffect(()=>{
        console.log(editSmurf)
        if (editSmurf){
            setNewSmurf(editSmurf)
        }
    },[editSmurf])


    const handleChange = (e) => {
        e.preventDefault();
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value,
        })
        console.log(newSmurf);
    }

    const onSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:3333/smurfs/${editSmurf.id}`, newSmurf)
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
                <input name="name" placeholder="name" onChange={handleChange} value={newSmurf.name} required/>
                <input name="age" placeholder="age"onChange={handleChange} value={newSmurf.age} required/>
                <input name="height" placeholder="height"onChange={handleChange} value={newSmurf.height} required/>
                <button>Edit Smurf</button>
            </form>
        </div>
    )
}

export default EditForm