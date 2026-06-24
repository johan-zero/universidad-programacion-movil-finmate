import { Preferences } from '@capacitor/preferences';
import type { Transaction } from '../../domain/entities/Transaction';
import type { FinanceRepository } from '../../domain/repositories/FinanceRepository';

const STORAGE_KEY = 'finmate.transactions';

export class LocalFinanceRepository implements FinanceRepository {
  async listTransactions(): Promise<Transaction[]> {
    const result = await Preferences.get({ key: STORAGE_KEY });
    return result.value ? JSON.parse(result.value) as Transaction[] : [];
  }

  async saveTransaction(transaction: Transaction): Promise<void> {
    const current = await this.listTransactions();
    await Preferences.set({ key: STORAGE_KEY, value: JSON.stringify([transaction, ...current]) });
  }

  async clear(): Promise<void> {
    await Preferences.remove({ key: STORAGE_KEY });
  }
}
