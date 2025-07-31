import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

// Set auth token if available
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Get all products
const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

// Create product
const createProduct = async (productData) => {
  const response = await axios.post(API_URL, productData);
  return response.data.data;
};

// Update product
const updateProduct = async (id, productData) => {
  const response = await axios.put(`${API_URL}/${id}`, productData);
  return response.data.data;
};

// Delete product
const deleteProduct = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};

export default {
  setAuthToken,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
};