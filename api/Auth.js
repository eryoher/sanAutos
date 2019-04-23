import Axios from 'axios';

export const signInUserRequest = async (username, password) => {
    const response = await Axios.post('/users/login?include=user', {
        username,
        password
    });
    return response.data;
}

export const signOutUserRequest = async () => {
    const response = await Axios.post('/users/logout');
    return response.data;
}
