import type { Transaction, TransactionType } from '../entities/Transaction';

interface CreateTransactionInput {
  type: TransactionType;
  category: string;
  amount: number;
  note?: string;
}

export function createTransaction(input: CreateTransactionInput): Transaction {
  if (!input.category.trim()) {
    throw new Error('La categoría es obligatoria.');
  }

  if (input.amount <= 0) {
    throw new Error('El valor debe ser mayor que cero.');
  }

  return {
    id: `${Date.now()}`,
    type: input.type,
    category: input.category.trim(),
    amount: input.amount,
    note: input.note?.trim(),
    createdAt: new Date().toISOString()
  };
}
