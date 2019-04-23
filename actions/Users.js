import {
    ADD_USER,
    ADD_USER_SUCCESS
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

