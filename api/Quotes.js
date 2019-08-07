import Axios from 'axios';

export const sendQuoteInformation = async (params) => {  
    const response = await Axios.post('/quotes', params ) ;
    return response.data;
}