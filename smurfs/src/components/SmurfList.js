import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getSmurfs} from '../actions'
import EditSmurfForm from './EditSmurfForm'

const SmurfList = (props) => {
 
    useEffect(()=>{
        props.getSmurfs()
    },[props.state])





    return (
        <div>
            I am the smurf list
            <div>
                {props.isEditing && <EditSmurfForm/>}
                {props.smurfs && props.smurfs.map(smurf => {
                    return (
                        <div key={smurf.id}>
                            <h1>{smurf.name}</h1>
                            <p>{smurf.age}</p>
                            <p>{smurf.height}</p>
                            <button id={smurf.id}>Edit</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        isEditing: state.isEditing,
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfList)