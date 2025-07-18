import axios from 'axios';

const API_USERS = import.meta.env.VITE_API_URL_USERS;

export const getUsers = () => axios.get(API_USERS);
export const getUserById = (id) => axios.get(`${API_USERS}/${id}`);
export const getUserByEmail = (email) => axios.get(`${API_USERS}?email=${email}`);
export const loginUser = (email, password) => axios.get(`${API_USERS}?email=${email}&password=${password}`);
export const createUser = (data) => axios.post(API_USERS, data);
export const updateUser = (id, data) => axios.put(`${API_USERS}/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API_USERS}/${id}`);
