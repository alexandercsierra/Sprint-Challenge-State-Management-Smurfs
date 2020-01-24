import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const SmurfCardDiv = styled.div`
    // border: 1px solid red;
    margin: 4%;
    width: 20%;
    padding: 2% 0;
    background: #eaeaea;
    color: #025272;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
`;

const EditBtn = styled.button`
    margin: 4%;
    width: 20%;
    padding: 2% 0;
    font-size: 100%;
    font-weight: 700;
    border: none;
    background: #439664;
    color: white;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
`;
const DeleteBtn = styled.button`
    margin: 4%;
    width: 20%;
    padding: 2% 0;
    font-size: 100%;
    font-weight: 700;
    border: none;
    background: #bf3939;
    color: white;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
`;

const SmurfCard = (props) => {
    const {smurf, edit, deleteSmurf} = props;
    // const [classes, setClasses] = useState("hide");
    

    // useEffect(()=>{
    //     isEditing ? setClasses("") : setClasses("hide")
    // }, [isEditing])

    return (
            <SmurfCardDiv>
                <h1>{smurf.name}</h1>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
                <EditBtn id={smurf.id} onClick={edit}>Edit</EditBtn>
                <DeleteBtn id={smurf.id} onClick={deleteSmurf}>Delete</DeleteBtn>
                
            </SmurfCardDiv>
    )
}

export default SmurfCard