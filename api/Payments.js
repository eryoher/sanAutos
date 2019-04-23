import Axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const createPreference = async (params) => {
    const instance = Axios.create();
    instance.defaults.headers.common['Authorization'] = publicRuntimeConfig.mercadoPagoToken;    
    const response = await instance.post( `https://api.mercadopago.com/checkout/preferences?access_token=${publicRuntimeConfig.mercadoPagoToken}`, params );
    return response;
}

export const getPayment = async (paymentId) => {
    const instance = Axios.create();
    instance.defaults.headers.common['Authorization'] = publicRuntimeConfig.mercadoPagoToken;    
    const response = await instance.get(`https://api.mercadopago.com/v1/payments/${paymentId}?access_token=${publicRuntimeConfig.mercadoPagoToken}`);
    return response;
}


export const createGiftCard = async (data, token) => {
    const instance = Axios.create();
    const params = new URLSearchParams();
    params.append('data', JSON.stringify(data));
    params.append('token', token.auth_token);   

    const response = instance.post('http://localhost/giftCard/giftCard.php', params);    
    
    return response;
}

export const createTokenCard = async () => {        
    const params = new URLSearchParams();
    params.append('api_key_merchant', "eD_FLBp1mJU1yoYkX1ld7QDj4qE");
    params.append('api_key_entity', "P7Iu8hcrP6q0A2-JGQk-fUxKCxE");   
    const response  = Axios.post('http://localhost/giftCard/getToken.php', params);       
    return response;
}
