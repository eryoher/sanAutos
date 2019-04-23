import { CREATE_PREFERENCE, CREATE_PREFERENCE_SUCCESS, CREATE_GIFT_CARD, CREATE_GIFT_CARD_SUCCESS,
    CREATE_TOKEN_CARD,
    CREATE_TOKEN_CARD_SUCCESS,
    GET_PAYMENT,
    GET_PAYMENT_SUCCESS
} from "../constants/ActionsTypes";

const initialState = {    
    preference: null,
    giftCard:null,
    tokenCard:null,
    paymentConfirm:null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_PREFERENCE:
            return { ...state, preference:null }
        case CREATE_PREFERENCE_SUCCESS:
            return { ...state, preference:action.payload.data}         
        case CREATE_GIFT_CARD:
            return { ...state, giftCard:null }
        case CREATE_GIFT_CARD_SUCCESS:
            return { ...state, giftCard:action.payload.data}    
        case CREATE_TOKEN_CARD:
            return { ...state, tokenCard:null }
        case CREATE_TOKEN_CARD_SUCCESS:
            return { ...state, tokenCard:action.payload.data }
        case GET_PAYMENT:
            return { ...state, paymentConfirm:null }
        case GET_PAYMENT_SUCCESS:
            return { ...state, paymentConfirm:action.payload.data }
        default:
            return state
    }
}

export default rootReducer