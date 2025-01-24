import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const expense = { description, amount, category };
    
    try {
      await axios.post('/api/expenses', expense);
      alert('Expense added successfully');
    } catch (error) {
      console.error('Error adding expense', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Bills">Bills</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
