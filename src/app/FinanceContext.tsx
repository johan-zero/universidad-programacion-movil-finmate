import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Transaction } from '../domain/entities/Transaction';
import type { TransactionType } from '../domain/entities/Transaction';
import { LocalFinanceRepository } from '../data/repositories/LocalFinanceRepository';
import { createTransaction } from '../domain/usecases/createTransaction';
import { calculateBudgetSummary } from '../domain/usecases/calculateBudgetSummary';

export interface AppSettings { alertsEnabled: boolean; darkMode: boolean; }
export interface Goal { id: string; title: string; target: number; saved: number; }

interface FinanceContextValue {
  loading: boolean;
  transactions: Transaction[];
  goals: Goal[];
  settings: AppSettings;
  addTransaction: (input: { type: TransactionType; category: string; amount: number; note?: string }) => Promise<void>;
  updateSettings: (patch: Partial<AppSettings>) => void;
  summary: ReturnType<typeof calculateBudgetSummary>;
}

const FinanceContext = createContext<FinanceContextValue | undefined>(undefined);
const repository = new LocalFinanceRepository();
const seedTransactions: Transaction[] = [
  { id: 'seed-1', type: 'income', category: 'Salario', amount: 1500000, note: 'Ingreso mensual', date: '2026-06-01T12:00:00.000Z' },
  { id: 'seed-2', type: 'expense', category: 'Alimentación', amount: 245000, note: 'Compras del hogar', date: '2026-06-03T12:00:00.000Z' },
  { id: 'seed-3', type: 'expense', category: 'Transporte', amount: 98000, note: 'Movilidad mensual', date: '2026-06-04T12:00:00.000Z' }
];
const defaultGoals: Goal[] = [
  { id: 'goal-1', title: 'Fondo de emergencia', target: 2000000, saved: 1040000 },
  { id: 'goal-2', title: 'Certificación profesional', target: 1200000, saved: 360000 }
];

function initialSettings(): AppSettings {
  try {
    const raw = localStorage.getItem('finmate.settings');
    return raw ? { alertsEnabled: true, darkMode: false, ...JSON.parse(raw) } : { alertsEnabled: true, darkMode: false };
  } catch { return { alertsEnabled: true, darkMode: false }; }
}

export function FinanceProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [settings, setSettings] = useState<AppSettings>(initialSettings);

  useEffect(() => {
    let mounted = true;
    async function load() {
      const stored = await repository.listTransactions();
      if (!mounted) return;
      if (stored.length === 0) {
        for (const item of [...seedTransactions].reverse()) await repository.saveTransaction(item);
        setTransactions(seedTransactions);
      } else setTransactions(stored);
      setLoading(false);
    }
    load();
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', settings.darkMode);
    localStorage.setItem('finmate.settings', JSON.stringify(settings));
  }, [settings]);

  const addTransaction = useCallback(async (input: { type: TransactionType; category: string; amount: number; note?: string }) => {
    const tx = createTransaction(input);
    await repository.saveTransaction(tx);
    setTransactions((current) => [tx, ...current]);
  }, []);

  const updateSettings = useCallback((patch: Partial<AppSettings>) => setSettings((current) => ({ ...current, ...patch })), []);
  const summary = useMemo(() => calculateBudgetSummary(transactions), [transactions]);
  const value = useMemo<FinanceContextValue>(() => ({ loading, transactions, goals: defaultGoals, settings, addTransaction, updateSettings, summary }), [loading, transactions, settings, addTransaction, updateSettings, summary]);

  return <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>;
}

export function useFinance() {
  const value = useContext(FinanceContext);
  if (!value) throw new Error('useFinance must be used within FinanceProvider');
  return value;
}
