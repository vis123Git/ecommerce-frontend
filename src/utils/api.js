
import axios from 'axios';

// Create an instance of Axios with default configurations
const api = axios.create({
  baseURL: 'https://ecom-test-xs6s.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include token in headers if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Correctly append token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

// Login function
export const loginUser = async (email, password) => {
  const response = await api.post('/api/login', { email, password });
  return response.data; 
};

// Signup function
export const signupUser = async (email, password) => {
  const response = await api.post('/api/signup', { email, password });
  return response.data; 
};

// Fetch all products
export const fetchProducts = async () => {
  const response = await api.get('/api/products');
  return response.data; // Assuming response data is an array of products
};

// Fetch a single product by ID
export const fetchProductById = async (productId) => {
  const response = await api.get(`/api/products/${productId}`);
  return response.data; // Assuming response data is the product details
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

// Remove product from cart
export const removeFromCart = async (productId) => {
  const response = await api.delete(`/cart/${productId}`);
  return response.data; // Assuming response data is the updated cart
};

// Checkout
export const checkoutCart = async (cart, address) => {
  const response = await api.post('/checkout', { cart, address });
  return response.data; // Assuming response data is the order confirmation
};

// Create a new product (Admin only)
export const createProduct = async (formData) => {
  const response = await api.post('/api/admin/product', formData, {
    headers: {
      'Content-Type': 'multipart/form-data', // Ensure multipart/form-data is used
    },
  });
  return response.data; // Assuming response data is the created product
};

// Update a product (Admin only)
export const updateProduct = async (productId, productData) => {
  const response = await api.patch(`/products/${productId}`, productData);
  return response.data; // Assuming response data is the updated product
};

// Delete a product (Admin only)
export const deleteProduct = async (productId) => {
  const response = await api.delete(`/products/${productId}`);
  return response.data; // Assuming response data is the deletion confirmation
};

// Fetch all users (Admin only)
export const fetchUsers = async () => {
  const response = await api.get('/users');
  return response.data; // Assuming response data is an array of users
};

// Update user role (Admin only)
export const updateUserRole = async (userId, role) => {
  const response = await api.put(`/users/${userId}`, { role });
  return response.data; // Assuming response data is the updated user
};

// Export the Axios instance to use directly if needed
export default api;
