import { ADD_USER, ADD_USER_SUCCESS, ACTIVATION_CODE, ACTIVATION_CODE_SUCCESS, CHANGE_PASSWORD_USER, CHANGE_PASSWORD_USER_SUCCESS, EMAIL_RECOVER_USER , EMAIL_RECOVER_USER_SUCCESS, SEARCH_USERS, SEARCH_USERS_SUCCESS, GET_ROLES, GET_ROLES_SUCCESS, GET_USER, GET_USER_SUCCESS} from "../constants/ActionsTypes";

const initialState = {    
    response: null,
    activateCode:null,
    changeSuccess:null,
    recoverSuccess:null,
    roles:[]
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
        case SEARCH_USERS:
            return {...state, search:null}
        case SEARCH_USERS_SUCCESS:
            return {...state, search:action.payload}
        case GET_ROLES:
            return {...state, roles:[]}
        case GET_ROLES_SUCCESS:
            return {...state, roles:action.payload}        
        case GET_USER:
            return {...state, user:null}        
        case GET_USER_SUCCESS:
            return {...state, user:action.payload.data}        
        default:
            return state
    }
}

export default rootReducer