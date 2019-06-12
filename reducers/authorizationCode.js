import {CHECK_CODE, CHECK_CODE_SUCCESS, REDEEM_CODE, REDEEM_CODE_SUCCESS} from '../constants/ActionsTypes';


const initialState = {    
    codeValidate: null,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CHECK_CODE:
            return { ...state, codeValidate:null }
        case CHECK_CODE_SUCCESS:            
            return { ...state, codeValidate:action.payload.data}         
        case REDEEM_CODE:
            return { ...state, responseValidate:null }         
        case REDEEM_CODE_SUCCESS:            
            return { ...state, codeValidate:action.payload.data }         
        default:
            return state
    }
}

export default rootReducer