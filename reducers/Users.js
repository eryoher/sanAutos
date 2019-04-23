import { ADD_USER, ADD_USER_SUCCESS } from "../constants/ActionsTypes";

const initialState = {    
    response: null,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return { ...state, response:null }
        case ADD_USER_SUCCESS:
            return { ...state, response:action.payload.data}         
        default:
            return state
    }
}

export default rootReducer