import {
    GET_SUBCATEGORIES,
    GET_SUBCATEGORIES_SUCCESS,
    SEARCH_SUBCATEGORIES,
    SEARCH_SUBCATEGORIES_SUCCESS,
    SET_SUBCATEGORY,
    SET_SUBCATEGORY_SUCCESS
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

export const searchSubCategories = (params) => {               
    return {
        type: SEARCH_SUBCATEGORIES,
        payload: params
    }        
};


export const searchSubCategoriesSuccess = (data) => {               
    return {
        type: SEARCH_SUBCATEGORIES_SUCCESS,
        payload:data
    }        
};

export const setSubCategory = (data) => {               
    return {
        type: SET_SUBCATEGORY,
        payload: data
    }        
};

export const setSubCategorySuccess = (response) => {               
    return {
        type: SET_SUBCATEGORY_SUCCESS,
        payload:response
    }        
};

