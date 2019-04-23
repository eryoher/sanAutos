import Axios from 'axios';
//const response = await Axios.get('/lineasCatalogos/' + catalogId + '?filter={"include":[ {"relation": "segmentos"},{ "relation":  "lineas", "scope": { "include": "sublinea"}},{"relation":  "marca"}]}');

export const getUser = async (userId) => {
    const response = await Axios.get(`/users/${userId}?filter={"include": {"relation": "Role"}}`);
    return response;
}

export const addUser = async (params) => {
    const response = await Axios.post('/users/createUser', params);
    return response;
}