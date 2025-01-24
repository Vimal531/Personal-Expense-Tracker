import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Personal Expense Tracker</h1>
      <nav>
        <Link style={linkStyle} to="/">Home</Link> | 
        <Link style={linkStyle} to="/add-expense">Add Expense</Link> | 
        <Link style={linkStyle} to="/expenses">View Expenses</Link>
      </nav>
    </header>
  );
};

const headerStyle = {
  background: '#282c34',
  color: 'white',
  padding: '10px',
  textAlign: 'center',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 15px',
};

export default Header;
