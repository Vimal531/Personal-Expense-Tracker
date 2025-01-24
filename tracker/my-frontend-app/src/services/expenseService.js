import axios from 'axios';

const API_URL = '/api/expenses';

export const fetchExpenses = async () => {
  return await axios.get(API_URL);
};

export const addExpense = async (expense) => {
  return await axios.post(API_URL, expense);
};
