import Axios from 'axios';

export const getImagesByContainer = async (container) => {  
    const response = await Axios.get( `/Images/${container}/files`) ;
    return response.data;
}