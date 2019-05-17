import { GET_IMAGES_BY_CONTAINER, GET_IMAGES_BY_CONTAINER_SUCCESS } from "../constants/ActionsTypes";

const initialState = {    
    listImages: null,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_IMAGES_BY_CONTAINER:
            return { ...state, listImages:null }
        case GET_IMAGES_BY_CONTAINER_SUCCESS:            
            return { ...state, listImages:action.payload}         
        default:
            return state
    }
}

export default rootReducer