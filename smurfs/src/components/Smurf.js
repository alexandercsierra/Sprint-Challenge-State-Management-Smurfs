import React, {useContext, useState} from 'react'
import SmurfContext from '../contexts/SmurfContext'
import SmurfCard from './SmurfCard'
import EditForm from './EditForm'
import axios from 'axios'

const Smurf = () => {
    const {smurfs, isEditing, setIsEditing, setSmurfs} = useContext(SmurfContext);
    const [editSmurf, setEditSmurf] = useState();

    const edit = (e) => {
        setIsEditing(!isEditing);
        console.log(isEditing);
        console.log(e.target.id);
        const filtered = smurfs.filter(smurf => smurf.id === Number(e.target.id))
        setEditSmurf(filtered[0])
    }

    const deleteSmurf = (e) => {
        console.log(e.target.id);
        axios.delete(`http://localhost:3333/smurfs/${e.target.id}`)
            .then(res=>console.log(res))
            .catch(err=> console.log(err))
    }


    return (
        <div>
            <EditForm editSmurf={editSmurf}/>
            {smurfs && smurfs.map(smurf=>{
                return <SmurfCard edit={edit} smurf={smurf} isEditing={isEditing} setIsEditing={setIsEditing} deleteSmurf={deleteSmurf}/>
            })}

        </div>
    )
}

export default Smurf