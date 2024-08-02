import React, { useContext, useEffect } from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import ProductForm from './ProductForm';
import ProductList from '../Products/ProductList';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || user.role !== 'superadmin') {
      // Redirect to login page if user is not authenticated or not a superadmin
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <ProductForm />
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Manage Products
      </Typography>
      <ProductList />
    </Box>
  );
};

export default AdminDashboard;
