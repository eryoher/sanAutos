import Axios from 'axios';

export const searchCompanies = async (params) => {  
    const response = await Axios.post('/companies/search', params);
    return response;
}

export const createCompany = async (params) => {  
    const response = await Axios.put('/companies', params);
    return response;
}

export const getCompany = async (companyId) => {  
    const response = await Axios.get( `/companies/${companyId}`) ;
    return response;
}

export const getCompanies = async (companyId) => {  
    const response = await Axios.get('/companies') ;
    return response.data;
}