import React from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import CreateExpense from './components/CreateExpense';

function App() {
    return (
        <div className="App">
            <h1>Expense Management</h1>
            <CreateExpense />
            <ExpenseList />
        </div>
    );
}

export default App;
