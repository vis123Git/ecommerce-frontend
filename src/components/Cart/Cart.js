import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    // Implement checkout logic here, such as sending the cart data to the backend
    alert('Checkout successful');
    clearCart();
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          ))}
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
