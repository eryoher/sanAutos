import { GET_SUBCATEGORIES, GET_SUBCATEGORIES_SUCCESS, SEARCH_SUBCATEGORIES, SEARCH_SUBCATEGORIES_SUCCESS, SET_SUBCATEGORY, SET_SUBCATEGORY_SUCCESS } from "../constants/ActionsTypes";

const initialState = {
    subcategoriesList: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SUBCATEGORIES:
            return { ...state, subcategoriesList: [] }
        case GET_SUBCATEGORIES_SUCCESS:
            return { ...state, subcategoriesList: action.payload }
        case SEARCH_SUBCATEGORIES:
            return { ...state, search: null, searchParamaters: action.payload }
        case SEARCH_SUBCATEGORIES_SUCCESS:
            return { ...state, search: action.payload.data }
        case SET_SUBCATEGORY:
            return { ...state, success: null }
        case SET_SUBCATEGORY_SUCCESS:
            return { ...state, success: action.payload.data }
        default:
            return state
    }
}

export default rootReducer