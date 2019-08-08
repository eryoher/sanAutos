import Axios from 'axios';

export const getSubCategories = async (container) => {  
    const response = await Axios.get('/subCategories') ;
    return response.data;
}

export const searchSubCategories = async (params) => {  
    const response = await Axios.post('/subCategories/search', params);
    return response;
}

export const setSubCategory = async (params) => {  
    const response = await Axios.put('/subCategories', params);
    return response;
}