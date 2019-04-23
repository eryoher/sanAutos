import {
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ERROR,
    CLEAR_ERROR,
    SHOW_MESSAGE,
    CLEAR_MESSAGE,
  } from '../constants/ActionsTypes';
  
  export const showLoader = () => {
    return {
      type: SHOW_LOADER
    };
  };
  
  export const hideLoader = () => {
    return {
      type: HIDE_LOADER
    }
  };
  
  export const showError = (error) => {
    return {
      type: SHOW_ERROR,
      payload: error
    };
  };
  
  export const clearError = () => {
    return {
      type: CLEAR_ERROR
    }
  };
  
  export const showMessage = (message) => {
    return {
      type: SHOW_MESSAGE,
      payload: message
    };
  };
  
  export const clearMessage = () => {
    return {
      type: CLEAR_MESSAGE
    }
  };