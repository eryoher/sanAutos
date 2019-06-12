import {
    CHECK_CODE,
    CHECK_CODE_SUCCESS,
    REDEEM_CODE,
    REDEEM_CODE_SUCCESS
} from '../constants/ActionsTypes';  
  

export const checkCodes = (params) => {               
    return {
        type: CHECK_CODE,      
        payload:params
    }        
};

export const checkCodesSuccess = (response) => {               
    return {
        type: CHECK_CODE_SUCCESS,
        payload: response
    }        
};

export const redeemCode = (code) => {                   
    return {
        type: REDEEM_CODE,      
        payload:code
    }        
};

export const redeemCodeSuccess = (response) => {               
    return {
        type: REDEEM_CODE_SUCCESS,
        payload: response
    }        
};