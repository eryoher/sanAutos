import {
    SEARCH_COMPANIES,
    SEARCH_COMPANIES_SUCCESS,
    CREATE_COMPANY,
    CREATE_COMPANY_SUCCESS,
    GET_COMPANY,
    GET_COMPANY_SUCCESS,
    GET_COMPANIES,
    GET_COMPANIES_SUCCESS
} from '../constants/ActionsTypes';  
  
  
export const searchCompanies = (params) => {               
    return {
        type: SEARCH_COMPANIES,
        payload:params
    }        
};


export const searchCompaniesSuccess = (data) => {               
    return {
        type: SEARCH_COMPANIES_SUCCESS,
        payload:data
    }        
};

export const createCompany = (params) => {               
    return {
        type: CREATE_COMPANY,
        payload:params
    }        
};

export const createCompanySuccess = (response) => {               
    return {
        type: CREATE_COMPANY_SUCCESS,
        payload:response
    }        
};

export const getCompany = (companyId) => {               
    return {
        type: GET_COMPANY,
        payload: {companyId}
    }        
};

export const getCompanySuccess = (response) => {               
    return {
        type: GET_COMPANY_SUCCESS,
        payload:response
    }        
};

export const getCompanies = () => {               
    return {
        type: GET_COMPANIES,        
    }        
};

export const getCompaniesSuccess = (response) => {               
    return {
        type: GET_COMPANIES_SUCCESS,
        payload:response
    }        
};