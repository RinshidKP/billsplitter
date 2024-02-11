import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const Summary = ({ totalExpenses, amountsOwed }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>Total Expenses: {totalExpenses}</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Expense</TableCell>
              {amountsOwed.map((owed, index) => (
                <TableCell key={index}>{owed.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Mess</TableCell>
              {amountsOwed.map((owed, index) => (
                <TableCell key={index}>{(totalExpenses / amountsOwed.length).toFixed(2)}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Summary;
