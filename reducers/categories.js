import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_WITH_PRODUCT, GET_CATEGORIES_WITH_PRODUCT_SUCCESS, SEARCH_CATEGORIES, SEARCH_CATEGORIES_SUCCESS, SET_CATEGORY, SET_CATEGORY_SUCCESS, REMOVE_CATEGORY, REMOVE_CATEGORY_SUCCESS } from '../constants/ActionsTypes'

const initialState = {    
    categories: null,
    categoriesCount:null,
    searchParamaters:null,
    search :null,
    success:null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return { ...state, categories:null }
        case GET_CATEGORIES_SUCCESS:
            return { ...state, categories:action.payload.data}
        case GET_CATEGORIES_WITH_PRODUCT:
            return { ...state, categoriesCount:null }
        case GET_CATEGORIES_WITH_PRODUCT_SUCCESS:
            return { ...state, categoriesCount:action.payload.data}
        case SEARCH_CATEGORIES:
            return { ...state, search: null, searchParamaters:action.payload }
        case SEARCH_CATEGORIES_SUCCESS:
            return { ...state, search:action.payload.data }
        case SET_CATEGORY:
            return { ...state, success:null }
        case SET_CATEGORY_SUCCESS:
            return {...state, success:action.payload.data}
        case REMOVE_CATEGORY:
            return { ...state, success:null }
        case REMOVE_CATEGORY_SUCCESS:
            return { ...state, success: action.payload.data }
        default:
            return state
    }
}

export default rootReducer