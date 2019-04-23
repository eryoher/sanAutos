import {
    SIGNIN_USER,
    SIGNIN_USER_SUCCESS,
    SIGNOUT_USER,
    SIGNOUT_USER_SUCCESS,
} from '../constants/ActionsTypes';
  
export const userSignIn = (credentials) => {
    return {
        type: SIGNIN_USER,
        payload: credentials
    };
};

export const userSignInSuccess = (authUser) => {
    return {
        type: SIGNIN_USER_SUCCESS,
        payload: authUser
    }
};

export const userSignOut = () => {
    return {
        type: SIGNOUT_USER,
    };
};

export const userSignOutSuccess = () => {
    return {
        type: SIGNOUT_USER_SUCCESS,
    }
};