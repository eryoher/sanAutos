import {
    GET_SUBCATEGORIES,
    GET_SUBCATEGORIES_SUCCESS
} from '../constants/ActionsTypes';  
  

export const getSubCategories = (params) => {               
    return {
        type: GET_SUBCATEGORIES,
        payload: {params}
    }        
};

export const getSubCategoriesSuccess = (response) => {               
    return {
        type: GET_SUBCATEGORIES_SUCCESS,
        payload: response
    }        
};