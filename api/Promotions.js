import Axios from 'axios';


export const getPromotions = async (params) => {  
    const response = await Axios.post('/products/adminSearch', params);
    return response;
}

export const getPromotion = async (productsId) => {      
    const response = await Axios.get(`/products/${productsId}?filter={"include": [{"relation": "assets"}]}`);
    return response;
}  

export const updatePromotion = async (promotionId, params) => {  
    const response = await Axios.post(`/products/${promotionId}/updateProduct`, params);
    return response;
}

export const createPromotion = async (params) => {  
    const response = await Axios.post(`/products/createProduct`, params);
    return response;
}

export const getTopPromotions = async () => {  
    const response = await Axios.get('/promotions/getTopPromotions');
    return response;
}

export const searchPromotions = async (params) => {  
    const response = await Axios.post('/products/adminSearch', params);
    return response;
}

export const getPromotionsCategory = async (params) => {  
    const response = await Axios.post('/promotions/getPromotionsCategory', params);
    return response;
}

export const getPromotionsInterest = async (params) => {  
    const response = await Axios.post('/promotions/getPromotionsInterest', params);
    return response;
}