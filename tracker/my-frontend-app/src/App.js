import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
function App()
{
 
  return (
    <Router>
      <div>
        <Header />
        <div style={containerStyle}>
          <Routes>
            <Route path="/" element={<h2>Welcome to Personal Expense Tracker</h2>} />
            <Route path="/add-expense" element={<ExpenseForm />} />
            <Route path="/expenses" element={<ExpenseList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
};

export default App;
