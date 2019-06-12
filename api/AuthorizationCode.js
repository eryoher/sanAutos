import Axios from 'axios';

export const checkCode = async (params) => {  
    const response = await Axios.post('/AuthorizationCodes/checkCode', params);
    return response.data;
}


export const redeemCode = async (code) => {  
    const response = await Axios.post('/AuthorizationCodes/validateCode', {code});
    return response.data;
}
