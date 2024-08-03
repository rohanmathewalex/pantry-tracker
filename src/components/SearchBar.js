import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleChange = (event) => {
    setTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        fullWidth
        label="Search Items"
        variant="outlined"
        value={term}
        onChange={handleChange}
        placeholder="Search for items..."
      />
    </Box>
  );
};

export default SearchBar;
