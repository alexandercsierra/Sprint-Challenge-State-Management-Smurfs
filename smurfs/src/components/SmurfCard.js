import React from 'react'

const SmurfCard = (props) => {
    const {smurf} = props;
    return (
        <div>
            <h1>{smurf.name}</h1>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
        </div>
    )
}

export default SmurfCard