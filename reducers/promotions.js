import { GET_PROMOTIONS, GET_PROMOTIONS_SUCCESS, GET_PROMOTION, GET_PROMOTION_SUCCESS, UPDATE_PROMOTION, UPDATE_PROMOTION_SUCCESS, CREATE_PROMOTION, CREATE_PROMOTION_SUCCESS, GET_TOP_PROMOTIONS, GET_TOP_PROMOTIONS_SUCCESS, SEARCH_PROMOTIONS, SEARCH_PROMOTIONS_SUCCESS } from "../constants/ActionsTypes";


const initialState = {    
    search: null,
    promotion:null,
    success:null,
    toppromotions:null,
    searchparamaters:null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROMOTIONS:
            return { ...state, searchparamaters:action.payload, search:null }
        case GET_PROMOTIONS_SUCCESS:
            return { ...state, search:action.payload.data}
        case GET_PROMOTION:
            return { ...state, promotion:null}
        case GET_PROMOTION_SUCCESS:
            return { ...state, promotion:action.payload.data }
        case CREATE_PROMOTION:
            return { ...state, success:null }
        case CREATE_PROMOTION_SUCCESS:
            return { ...state, success:action.payload.data.response}
        case UPDATE_PROMOTION:
            return { ...state, success:null }
        case UPDATE_PROMOTION_SUCCESS:
            return { ...state, success:action.payload.data}
        case GET_TOP_PROMOTIONS:
            return { ...state, toppromotions:null }
        case GET_TOP_PROMOTIONS_SUCCESS:
            return { ...state, toppromotions:action.payload.data.data}        
        case SEARCH_PROMOTIONS:
            return {...state, search:null }
        case SEARCH_PROMOTIONS_SUCCESS:
            return { ...state, search:action.payload.data }
        default:
            return state
    }
}

export default rootReducer