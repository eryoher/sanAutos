import Axios from 'axios';

export const getUser = async (userId) => {
    const response = await Axios.get(`/users/${userId}?filter={"include": {"relation": "Role"}}`);
    return response;
}

export const addUser = async (params) => {
    const response = await Axios.post('/users/createUser', params);
    return response;
}

export const activationCode = async (code) => {
    const response = await Axios.post('/users/checkCode', {code});
    return response.data;
}

export const emailToRecoverUser = async (params) => {
    const response = await Axios.post('/users/emailToRecoverUser', params);
    return response.data;
}

export const changePasswordUser = async (params) => {
    const response = await Axios.post('/users/changePasswordUser', params);
    return response.data;
}
