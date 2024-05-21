import React, { useEffect, useState } from 'react';
import { getExpenses, deleteExpense, Expense } from '../services/expenseService';

const ExpenseList: React.FC = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        const data = await getExpenses();
        setExpenses(data);
    };

    const handleDelete = async (id: number) => {
        await deleteExpense(id);
        fetchExpenses();
    };

    return (
        <div>
            <h1>Expenses</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Value</th>
                        <th>Day</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map(expense => (
                        <tr key={expense.id}>
                            <td>{expense.description}</td>
                            <td>{expense.value}</td>
                            <td>{expense.day}</td>
                            <td>
                                <button onClick={() => handleDelete(expense.id)}>Delete</button>
                                <button>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;
