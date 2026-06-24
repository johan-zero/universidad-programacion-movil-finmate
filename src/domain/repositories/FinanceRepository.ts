import type { Transaction } from '../entities/Transaction';

export interface FinanceRepository {
  listTransactions(): Promise<Transaction[]>;
  saveTransaction(transaction: Transaction): Promise<void>;
  clear(): Promise<void>;
}
