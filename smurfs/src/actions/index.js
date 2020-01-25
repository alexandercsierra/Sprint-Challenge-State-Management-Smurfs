import axios from 'axios'

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';


export const getSmurfs = () => dispatch => {
    dispatch({type: FETCHING_SMURFS_START});
    axios.get('http://localhost:3333/smurfs')
        .then(res=>dispatch({type: FETCHING_SMURFS_SUCCESS, payload: res.data}))
        .catch(err=>dispatch({type: FETCHING_SMURFS_FAILURE, payload: err}))
}

export const addSmurf = (smurf) => dispatch => {
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(res=>{
            dispatch({type: ADD_SMURF_SUCCESS, payload: smurf})
            
        })
        .catch(err=>console.log(err))
}