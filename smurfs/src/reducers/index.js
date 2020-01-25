import {FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, ADD_SMURF_SUCCESS} from '../actions'

const initialState = {
    isLoading: false,
    isEditing: false,
    smurfs: [],
    error: ""
}


export const reducer = (state=initialState, action) => {
    switch (action.type){
        case FETCHING_SMURFS_START:
            return{
                ...state,
                isLoading:true
            }
        case FETCHING_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: [...action.payload]
            }
        case FETCHING_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]
            }
        default: 
            return state;
    }
}
