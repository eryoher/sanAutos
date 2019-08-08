import Axios from 'axios';

export const getSubCategories = async (container) => {  
    const response = await Axios.get('/subCategories') ;
    return response.data;
}