import React, { useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';

const Checkout = () => {
  const [address, setAddress] = useState('');
  const { cart, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const handleCheckout = async () => {
    if (!address) {
      alert('Please enter a shipping address.');
      return;
    }

    try {
      await axios.post('/api/checkout', { cart, address, user });
      alert('Checkout successful');
      clearCart();
    } catch (error) {
      alert('Checkout failed');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <input
        type="text"
        placeholder="Shipping Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default Checkout;
