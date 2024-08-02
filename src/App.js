import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import AuthProvider from './context/AuthContext';
import CartProvider from './context/CartContext';
import ProductList from './components/Products/ProductList';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import AdminDashboard from './components/Admin/AdminDashboard';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <CssBaseline />
        <Router>
          <Container>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Container>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
