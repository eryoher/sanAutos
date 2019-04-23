import { SEARCH_COMPANIES, SEARCH_COMPANIES_SUCCESS, CREATE_COMPANY, CREATE_COMPANY_SUCCESS, GET_COMPANY, GET_COMPANY_SUCCESS, GET_COMPANIES, GET_COMPANIES_SUCCESS } from "../constants/ActionsTypes";


const initialState = {    
    searchParamater: null,
    search:null,
    success:null,
    company:null,
    companies:null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_COMPANIES:
            return { ...state, search:null, searchParamater:action.payload }
        case SEARCH_COMPANIES_SUCCESS:
            return { ...state, search:action.payload.data} 
        case CREATE_COMPANY:
            return {...state, success:null}        
        case CREATE_COMPANY_SUCCESS:
            return {...state, success: action.payload.data}
        case GET_COMPANY:
            return { ...state, company:null }
        case GET_COMPANY_SUCCESS:
            return {...state, company:action.payload.data}
        case GET_COMPANIES:
            return {...state, companies:null }
        case GET_COMPANIES_SUCCESS:
            return { ...state, companies:action.payload }
        default:
            return state
    }
}

export default rootReducer