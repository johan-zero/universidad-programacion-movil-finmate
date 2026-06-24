import type { BudgetSummary } from '../entities/BudgetSummary';
import type { Transaction } from '../entities/Transaction';

export function calculateBudgetSummary(transactions: Transaction[]): BudgetSummary {
  const income = transactions.filter((item) => item.type === 'income').reduce((total, item) => total + item.amount, 0);
  const expenses = transactions.filter((item) => item.type === 'expense').reduce((total, item) => total + item.amount, 0);
  const balance = income - expenses;
  const ratio = income > 0 ? expenses / income : 1;
  const warningLevel = ratio >= 0.9 ? 'critical' : ratio >= 0.7 ? 'attention' : 'ok';
  return { income, expenses, balance, warningLevel };
}
