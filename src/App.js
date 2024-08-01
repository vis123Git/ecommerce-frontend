// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Login from './components/auth/Login.js';
import ProductList from './components/Products/ProductList';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div>
            <h1>E-commerce App</h1>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
