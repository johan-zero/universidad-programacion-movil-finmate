import type { BudgetSummary } from '../entities/BudgetSummary';
import type { Transaction } from '../entities/Transaction';

export function calculateBudgetSummary(transactions: Transaction[]): BudgetSummary {
  const totalIncome = transactions
    .filter((item) => item.type === 'income')
    .reduce((total, item) => total + item.amount, 0);

  const totalExpense = transactions
    .filter((item) => item.type === 'expense')
    .reduce((total, item) => total + item.amount, 0);

  const balance = totalIncome - totalExpense;
  const expenseRatio = totalIncome === 0 ? 0 : totalExpense / totalIncome;

  return { totalIncome, totalExpense, balance, expenseRatio };
}
