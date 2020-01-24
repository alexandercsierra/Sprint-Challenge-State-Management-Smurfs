import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const SmurfCardDiv = styled.div`
    border: 1px solid red;
    margin: 4%;
`;

const SmurfCard = (props) => {
    const {smurf, edit, deleteSmurf} = props;
    // const [classes, setClasses] = useState("hide");
    

    // useEffect(()=>{
    //     isEditing ? setClasses("") : setClasses("hide")
    // }, [isEditing])

    return (
        <div>
            <SmurfCardDiv>
                <h1>{smurf.name}</h1>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
                <button id={smurf.id} onClick={edit}>Edit</button>
                <button id={smurf.id} onClick={deleteSmurf}>Delete</button>
                
            </SmurfCardDiv>
            
        </div>
    )
}

export default SmurfCard