import { GET_SUBCATEGORIES, GET_SUBCATEGORIES_SUCCESS } from "../constants/ActionsTypes";

const initialState = {
    subcategoriesList: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SUBCATEGORIES:
            return { ...state, subcategoriesList: [] }
        case GET_SUBCATEGORIES_SUCCESS:
            return { ...state, subcategoriesList: action.payload }
        default:
            return state
    }
}

export default rootReducer