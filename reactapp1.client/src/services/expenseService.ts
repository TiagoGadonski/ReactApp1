export interface Expense {
    id: number;
    description: string;
    value: number;
    day: string;
    purchaseDate?: string;
    installments?: number;
    currentInstallment?: number;
    type: ExpenseType;
    isPaidThisMonth: boolean;
    lastPaymentDate?: string;
    categoryId: number;
    category?: CategoryFinance;
}

export interface CategoryFinance {
    id: number;
    name: string;
}

export enum ExpenseType {
    Fixed,
    CreditCard,
    Temporary
}

const apiUrl = "https://localhost:7131/api/Expense"; // Atualize com sua URL real

export async function getExpenses(): Promise<Expense[]> {
    const response = await fetch(apiUrl);
    return await response.json();
}

export async function getExpense(id: number): Promise<Expense> {
    const response = await fetch(`${apiUrl}/${id}`);
    return await response.json();
}

export async function createExpense(expense: Expense): Promise<Expense> {
    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(expense)
    });
    return await response.json();
}

export async function updateExpense(expense: Expense): Promise<void> {
    await fetch(`${apiUrl}/${expense.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(expense)
    });
}

export async function deleteExpense(id: number): Promise<void> {
    await fetch(`${apiUrl}/${id}`, {
        method: "DELETE"
    });
}
