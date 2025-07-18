import axios from "axios";

const API_PRODUCTS = import.meta.env.VITE_API_URL_PRODUCTS;

export const getProducts = () => axios.get(API_PRODUCTS);
export const getProductById = (id) => axios.get(`${API_PRODUCTS}/${id}`);
export const createProduct = (data) => axios.post(API_PRODUCTS, data);
export const updateProduct = (id, data) => axios.put(`${API_PRODUCTS}/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${API_PRODUCTS}/${id}`);
