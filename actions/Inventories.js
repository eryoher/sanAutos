
import {
    CREATE_INVENTORY,
    CREATE_INVENTORY_SUCCESS,
} from '../constants/ActionsTypes';
  
  
  
export const createInventory = (params) => {               
    return {
        type: CREATE_INVENTORY,
        payload:params
    }        
};


export const createInventorySuccess = (response) => {               
    return {
        type: CREATE_INVENTORY_SUCCESS,
        payload:response
    }        
};