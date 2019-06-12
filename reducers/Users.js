import { ADD_USER, ADD_USER_SUCCESS, ACTIVATION_CODE, ACTIVATION_CODE_SUCCESS, CHANGE_PASSWORD_USER, CHANGE_PASSWORD_USER_SUCCESS, EMAIL_RECOVER_USER , EMAIL_RECOVER_USER_SUCCESS} from "../constants/ActionsTypes";

const initialState = {    
    response: null,
    activateCode:null,
    changeSuccess:null,
    recoverSuccess:null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return { ...state, response:null }
        case ADD_USER_SUCCESS:
            return { ...state, response:action.payload.data}         
        case ACTIVATION_CODE:
            return { ...state, activateCode:null}         
        case ACTIVATION_CODE_SUCCESS:
            return { ...state, activateCode:action.payload}         
        case CHANGE_PASSWORD_USER:
            return { ...state, changeSuccess:null}         
        case CHANGE_PASSWORD_USER_SUCCESS:
            return {...state, changeSuccess:action.payload}
        case EMAIL_RECOVER_USER:
            return { ...state, recoverSuccess:null}         
        case EMAIL_RECOVER_USER_SUCCESS:
            return {...state, recoverSuccess:action.payload}

        default:
            return state
    }
}

export default rootReducer