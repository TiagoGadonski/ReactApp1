import React, { useState } from 'react';
import { createExpense, Expense, ExpenseType } from '../services/expenseService';

const CreateExpense: React.FC = () => {
    const [expense, setExpense] = useState<Expense>({
        id: 0,
        description: '',
        value: 0,
        day: '',
        type: ExpenseType.Fixed,
        isPaidThisMonth: false,
        categoryId: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setExpense({ ...expense, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createExpense(expense);
        setExpense({
            id: 0,
            description: '',
            value: 0,
            day: '',
            type: ExpenseType.Fixed,
            isPaidThisMonth: false,
            categoryId: 0,
        });
    };

    return (
        <div>
            <h1>Create Expense</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Description:</label>
                    <input type="text" name="description" value={expense.description} onChange={handleChange} />
                </div>
                <div>
                    <label>Value:</label>
                    <input type="number" name="value" value={expense.value} onChange={handleChange} />
                </div>
                <div>
                    <label>Day:</label>
                    <input type="text" name="day" value={expense.day} onChange={handleChange} />
                </div>
                <div>
                    <label>Type:</label>
                    <select name="type" value={expense.type} onChange={handleChange}>
                        <option value={ExpenseType.Fixed}>Fixed</option>
                        <option value={ExpenseType.CreditCard}>Credit Card</option>
                        <option value={ExpenseType.Temporary}>Temporary</option>
                    </select>
                </div>
                <div>
                    <label>Category Id:</label>
                    <input type="number" name="categoryId" value={expense.categoryId} onChange={handleChange} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateExpense;
