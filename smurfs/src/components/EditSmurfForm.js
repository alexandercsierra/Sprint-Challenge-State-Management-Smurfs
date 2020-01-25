import React, {useState} from 'react'
import {addSmurf} from '../actions'
import {connect} from 'react-redux'

const EditSmurfForm = (props) => {
    const [addedSmurf, setAddedSmurf] = useState({
        name: "",
        age: "",
        height: "",
        id: ""
    })
    const handleChange = (e) => {
        setAddedSmurf({
            ...addedSmurf,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        props.addSmurf(addedSmurf);

    }

    return(
        <form onSubmit={onSubmit}>
            <input name="name" placeholder="name" required value={addedSmurf.name} onChange={handleChange}/>
            <input name="age" placeholder="age" required value={addedSmurf.age} onChange={handleChange}/>
            <input name="height" placeholder="height" required value={addedSmurf.height} onChange={handleChange}/>
            <button>Add Smurf</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, {addSmurf})(EditSmurfForm)