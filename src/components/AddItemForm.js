// src/components/AddItemForm.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddItemForm = ({ item, onSave, onClose }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    if (item) {
      setName(item.name);
      setCategory(item.category);
      setQuantity(item.quantity);
    }
  }, [item]);

  const handleSubmit = () => {
    onSave({ ...item, name, category, quantity });
  };

  return (
    <Box>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Category"
        fullWidth
        margin="normal"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <TextField
        label="Quantity"
        fullWidth
        margin="normal"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {item?.id ? 'Update Item' : 'Add Item'}
        </Button>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default AddItemForm;
