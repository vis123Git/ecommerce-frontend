// src/utils/api.js

import axios from 'axios';

// Create an instance of Axios with default configurations
const api = axios.create({
  baseURL: 'https://ecom-test-xs6s.onrender.com', // Set this to your actual backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include token in headers if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Assuming the token is stored in local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Login function
export const loginUser = async (email, password) => {
  const response = await api.post('/login', { email, password });
  return response.data; // Assuming response data contains token and user info
};

// Fetch all products
export const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data; // Assuming response data is an array of products
};

// Add product to cart
export const addToCart = async (productId) => {
  const response = await api.post('/cart', { productId });
  return response.data; // Assuming response data is the updated cart
};

// Fetch cart
export const fetchCart = async () => {
  const response = await api.get('/cart');
  return response.data; // Assuming response data is the cart contents
};

// Checkout
export const checkoutCart = async (cart, address, user) => {
  const response = await api.post('/checkout', { cart, address, user });
  return response.data; // Assuming response data is the order confirmation
};

// Export the Axios instance to use directly if needed
export default api;
