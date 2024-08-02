import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { createProduct, updateProduct } from '../../utils/api'; // Implement these functions

const ProductForm = ({ selectedProduct, onProductUpdate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (selectedProduct) {
      setTitle(selectedProduct.title);
      setDescription(selectedProduct.description);
      setPrice(selectedProduct.price);
      // Set image file input to null initially, it will be updated on file selection
      setImage(null);
    }
  }, [selectedProduct]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    if (image) {
      formData.append('image', image);
    }

    try {
      if (selectedProduct) {
        await updateProduct(selectedProduct._id, formData);
        onProductUpdate();
        alert('Product updated successfully.');
      } else {
        await createProduct(formData);
        alert('Product added successfully.');
      }
      // Clear form fields
      setTitle('');
      setDescription('');
      setPrice('');
      setImage(null);
    } catch (error) {
      alert('Error saving product. Please try again.');
    }
  };

  return (
    <Box p={3} mb={4} border={1} borderRadius={2} borderColor="grey.300">
      <Typography variant="h5" gutterBottom>
        {selectedProduct ? 'Edit Product' : 'Add Product'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Price"
          type="number"
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          component="label"
          fullWidth
          sx={{ mb: 2 }}
        >
          {image ? image.name : 'Upload Image'}
          <input
            type="file"
            hidden
            onChange={handleImageChange}
          />
        </Button>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          {selectedProduct ? 'Update Product' : 'Add Product'}
        </Button>
      </form>
    </Box>
  );
};

export default ProductForm;
