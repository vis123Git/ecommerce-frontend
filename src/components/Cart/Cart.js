import React, { useContext } from 'react';
import { Typography, Box, Button, Grid } from '@mui/material';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      <Grid container spacing={3}>
        {cart.map((item) => (
          <Grid item xs={12} key={item._id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <Box mt={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCheckout}
          disabled={cart.length === 0}
        >
          Checkout
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={clearCart}
          disabled={cart.length === 0}
          sx={{ ml: 2 }}
        >
          Clear Cart
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
