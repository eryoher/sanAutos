import Axios from 'axios';


export const getCategories = async () => {  
    const response = await Axios.get('/categories');
    return response;
}
  
export const getCategoriesWithProduct = async () => {  
    const response = await Axios.get('/categories/getCategoriesWithProduct');
    return response;
}

export const searchCategories = async (params) => {  
    const response = await Axios.post('/categories/search', params);
    return response;
}

export const setCategory = async (params) => {  
    const response = await Axios.put('/categories', params);
    return response;
}

export const removeCategory = async (categoryId) => {  
    const response = await Axios.delete(`/categories/${categoryId}`);
    return response;
}