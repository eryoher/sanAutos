import {
    ADD_USER,
    ADD_USER_SUCCESS,
    ACTIVATION_CODE,
    ACTIVATION_CODE_SUCCESS,
    EMAIL_RECOVER_USER,
    EMAIL_RECOVER_USER_SUCCESS,
    CHANGE_PASSWORD_USER,
    CHANGE_PASSWORD_USER_SUCCESS,
    SEARCH_USERS,
    SEARCH_USERS_SUCCESS,
    GET_ROLES,
    GET_ROLES_SUCCESS,
    GET_USER,
    GET_USER_SUCCESS
} from '../constants/ActionsTypes';


export const addUser = (params) => {     
    return {
        type: ADD_USER,
        payload: params
    }        
};

export const addUserSuccess = (response) => {               
    return {
        type: ADD_USER_SUCCESS,
        payload: response
    }        
};

export const activationCode = (params) => {     
    return {
        type: ACTIVATION_CODE,
        payload: params
    }        
};

export const activationCodeSuccess = (response) => {               
    return {
        type: ACTIVATION_CODE_SUCCESS,
        payload: response
    }        
};

export const emailToRecoverUser = (params) => {     
    return {
        type: EMAIL_RECOVER_USER,
        payload: params
    }        
};

export const emailToRecoverUserSuccess = (response) => {               
    return {
        type: EMAIL_RECOVER_USER_SUCCESS,
        payload: response
    }        
};


export const changePasswordUser = (params) => {     
    return {
        type: CHANGE_PASSWORD_USER,
        payload: params
    }        
};

export const changePasswordUserSuccess = (response) => {               
    return {
        type: CHANGE_PASSWORD_USER_SUCCESS,
        payload: response
    }        
};


export const searchUsers = (params) => {     
    return {
        type: SEARCH_USERS,
        payload: params
    }        
};

export const searchUsersSuccess = (response) => {               
    return {
        type: SEARCH_USERS_SUCCESS,
        payload: response
    }        
};


export const getUser = (userId) => {     
    return {
        type: GET_USER,
        payload: {userId}
    }        
};

export const getUserSuccess = (response) => {               
    return {
        type: GET_USER_SUCCESS,
        payload: response
    }        
};

export const getRoles = () => {     
    return {
        type: GET_ROLES        
    }        
};

export const getRolesSuccess = (response) => {               
    return {
        type: GET_ROLES_SUCCESS,
        payload: response
    }        
};