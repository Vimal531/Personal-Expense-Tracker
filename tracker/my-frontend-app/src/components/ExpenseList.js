import React, { useEffect, useState } from 'react';
import { fetchExpenses } from '../services/expenseService';


const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses()
      .then((response) => setExpenses(response.data))
      .catch((error) => console.error('Error fetching expenses:', error));
  }, []);

  return (
    <div>
      <h2>Expense List</h2>
      {expenses.length > 0 ? (
        <table border="1" width="100%">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>${expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No expenses recorded.</p>
      )}
    </div>
  );
};

export default ExpenseList;
