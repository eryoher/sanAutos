import { CREATE_INVENTORY, CREATE_INVENTORY_SUCCESS } from "../constants/ActionsTypes";


const initialState = {    
    inventory: null,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_INVENTORY:
            return { ...state, inventory:null }
        case CREATE_INVENTORY_SUCCESS:
            return { ...state, inventory:action.payload.data}         
        default:
            return state
    }
}

export default rootReducer