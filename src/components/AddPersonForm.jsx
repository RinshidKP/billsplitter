import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const AddPersonForm = ({ onAddPerson }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return; // Prevent empty submissions
    onAddPerson({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={9}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Person
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddPersonForm;
