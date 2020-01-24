import React, {useContext} from 'react'
import SmurfContext from '../contexts/SmurfContext'
import SmurfCard from './SmurfCard'

const Smurf = () => {
    const {smurfs} = useContext(SmurfContext);
    // console.log(smurfs);
    return (
        <div>
            {smurfs && smurfs.map(smurf=>{
                return <SmurfCard smurf={smurf}/>
            })}
        </div>
    )
}

export default Smurf