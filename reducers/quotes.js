import { SEND_QUOTE_INFORMATION, SEND_QUOTE_INFORMATION_SUCCESS } from "../constants/ActionsTypes";

const initialState = {    
    responseForm: null,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_QUOTE_INFORMATION:
            return { ...state, responseForm:null }
        case SEND_QUOTE_INFORMATION_SUCCESS:            
            return { ...state, responseForm:action.payload}         
        default:
            return state
    }
}

export default rootReducer