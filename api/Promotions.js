import Axios from 'axios';


export const getPromotions = async (params) => {  
    const response = await Axios.post('/promotions/search', params);
    return response;
}

export const getPromotion = async (promotionId) => {  
    const response = await Axios.get(`/promotions/${promotionId}?filter={"include": [{"relation": "assets"}, {"relation": "inventory"}]}`);
    return response;
}  

export const updatePromotion = async (promotionId, params) => {  
    const response = await Axios.post(`/promotions/${promotionId}/updatePromotion`, params);
    return response;
}

export const createPromotion = async (params) => {  
    const response = await Axios.post(`/promotions/createPromotion`, params);
    return response;
}

export const getTopPromotions = async () => {  
    const response = await Axios.get('/promotions/getTopPromotions');
    return response;
}

export const searchPromotions = async (params) => {  
    const response = await Axios.post('/promotions/adminSearch', params);
    return response;
}