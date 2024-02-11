import React, { useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import AddPersonForm from './AddPersonForm';
import AddExpenseForm from './AddExpenseForm';
import ExpenseList from './ExpenseList';
import Summary from './Summary';

const BillSplitterApp = () => {
  const [persons, setPersons] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addPerson = (person) => {
    setPersons([...persons, person]);
  };

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Function to calculate total expenses
  const getTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  };

  // Function to calculate amount owed per person
  const calculateAmountOwed = () => {
    const totalExpenses = getTotalExpenses();
    const numPersons = persons.length;
    const amountOwed = totalExpenses / numPersons;
    const amountsOwed = persons.map((person) => ({
      name: person.name,
      amount: amountOwed.toFixed(2),
    }));
    return amountsOwed;
  };

  return (
    <Container maxWidth="lg" mt={4}>
      <Typography variant="h4" gutterBottom>Room Expense Tracker</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <AddPersonForm onAddPerson={addPerson} />
        </Grid>
        <Grid item xs={12} md={6}>
          <AddExpenseForm persons={persons} onAddExpense={addExpense} />
        </Grid>
      </Grid>
      <ExpenseList expenses={expenses} />
      <Summary totalExpenses={getTotalExpenses()} amountsOwed={calculateAmountOwed()} />
    </Container>
  );
};

export default BillSplitterApp;
