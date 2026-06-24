export type WarningLevel = "ok" | "attention" | "critical";

export interface BudgetSummary {
  income: number;
  expenses: number;
  balance: number;
  warningLevel: WarningLevel;
}
