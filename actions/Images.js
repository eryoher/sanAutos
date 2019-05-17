import {
    GET_IMAGES_BY_CONTAINER,
    GET_IMAGES_BY_CONTAINER_SUCCESS
} from '../constants/ActionsTypes';  
  

export const getImagesByContainer = (container) => {               
    return {
        type: GET_IMAGES_BY_CONTAINER,
        payload: {container}
    }        
};

export const getImagesByContainerSuccess = (response) => {               
    return {
        type: GET_IMAGES_BY_CONTAINER_SUCCESS,
        payload: response
    }        
};