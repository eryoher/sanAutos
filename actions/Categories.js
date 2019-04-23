
import {
    GET_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_WITH_PRODUCT,
    GET_CATEGORIES_WITH_PRODUCT_SUCCESS,
    SEARCH_CATEGORIES,
    SEARCH_CATEGORIES_SUCCESS,
    SET_CATEGORY,
    SET_CATEGORY_SUCCESS,
    REMOVE_CATEGORY,
    REMOVE_CATEGORY_SUCCESS
    
} from '../constants/ActionsTypes';
  
  
  
export const getCategories = () => {               
    return {
        type: GET_CATEGORIES
    }        
};


export const getCategoriesSuccess = (data) => {               
    return {
        type: GET_CATEGORIES_SUCCESS,
        payload:data
    }        
};

export const getCategoriesWithProduct = () => {               
    return {
        type: GET_CATEGORIES_WITH_PRODUCT
    }        
};


export const getCategoriesWithProductSuccess = (data) => {               
    return {
        type: GET_CATEGORIES_WITH_PRODUCT_SUCCESS,
        payload:data
    }        
};

export const searchCategories = (params) => {               
    return {
        type: SEARCH_CATEGORIES,
        payload: params
    }        
};


export const searchCategoriesSuccess = (data) => {               
    return {
        type: SEARCH_CATEGORIES_SUCCESS,
        payload:data
    }        
};


export const setCategory = (data) => {               
    return {
        type: SET_CATEGORY,
        payload: data
    }        
};


export const setCategorySuccess = (response) => {               
    return {
        type: SET_CATEGORY_SUCCESS,
        payload:response
    }        
};

export const removeCategory = (categoryId) => {               
    return {
        type: REMOVE_CATEGORY,
        payload: {categoryId}
    }        
};


export const removeCategorySuccess = (response) => {               
    return {
        type: REMOVE_CATEGORY_SUCCESS,
        payload:response
    }        
};