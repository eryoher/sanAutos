import {    
    SEND_QUOTE_INFORMATION,
    SEND_QUOTE_INFORMATION_SUCCESS
} from '../constants/ActionsTypes';

export const sendQuoteInformation = (params) => {               
    return {
        type: SEND_QUOTE_INFORMATION,
        payload: params
    }        
};

export const sendQuoteInformationSuccess = (data) => {               
    return {
        type: SEND_QUOTE_INFORMATION_SUCCESS,
        payload:data
    }        
};

