import type { Transaction } from '../../domain/entities/Transaction';
import type { FinanceRepository } from '../../domain/repositories/FinanceRepository';

const STORAGE_KEY = 'finmate.transactions';

export class LocalFinanceRepository implements FinanceRepository {
  async listTransactions(): Promise<Transaction[]> {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as Transaction[] : [];
  }

  async saveTransaction(transaction: Transaction): Promise<void> {
    const current = await this.listTransactions();
    localStorage.setItem(STORAGE_KEY, JSON.stringify([transaction, ...current]));
  }
}
