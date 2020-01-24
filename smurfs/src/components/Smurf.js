import React, {useContext, useState} from 'react'
import SmurfContext from '../contexts/SmurfContext'
import SmurfCard from './SmurfCard'
import EditForm from './EditForm'

const Smurf = () => {
    const {smurfs, isEditing, setIsEditing} = useContext(SmurfContext);
    const [editSmurf, setEditSmurf] = useState();

    const edit = (e) => {
        setIsEditing(!isEditing);
        console.log(isEditing);
        console.log(e.target.id);
        const filtered = smurfs.filter(smurf => smurf.id === Number(e.target.id))
        setEditSmurf(filtered[0])
    }


    return (
        <div>
            <EditForm editSmurf={editSmurf}/>
            {smurfs && smurfs.map(smurf=>{
                return <SmurfCard edit={edit} smurf={smurf} isEditing={isEditing} setIsEditing={setIsEditing}/>
            })}

        </div>
    )
}

export default Smurf