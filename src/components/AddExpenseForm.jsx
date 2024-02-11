import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const AddExpenseForm = ({ onAddExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ name, amount, description });
    setName('');
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </Grid>
        <Grid item>
          <TextField label="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </Grid>
        <Grid item>
          <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">Add Expense</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddExpenseForm;
