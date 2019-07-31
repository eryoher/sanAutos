import {
    SIGNIN_USER_SUCCESS,
    SIGNOUT_USER,
    SIGNOUT_USER_SUCCESS
} from '../constants/ActionsTypes'

const initialState = {
    userId: (typeof window !== 'undefined') ? ((window.localStorage.getItem('userId')) ? window.localStorage.getItem('userId') : undefined) : undefined,
    token: (typeof window !== 'undefined') ? ((window.localStorage.getItem('token')) ? window.localStorage.getItem('token') : undefined) : undefined,
    user: (typeof window !== 'undefined') ? ((window.localStorage.getItem('user')) ? JSON.parse(window.localStorage.getItem('user')) : undefined) : undefined,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SIGNIN_USER_SUCCESS:
            return { ...state, ...action.data }

        case SIGNOUT_USER:
        case SIGNOUT_USER_SUCCESS:
            return {
                ...state,
                userId: null,
                token: null,
                user: null
            }
        default:
            return state
    }
}

export default rootReducer