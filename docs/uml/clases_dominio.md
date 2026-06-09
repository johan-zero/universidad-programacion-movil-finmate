# Diagrama UML de clases - Dominio FinMate Mobile

```plantuml
@startuml
class Transaction {
  +id: string
  +type: TransactionType
  +category: string
  +amount: number
  +note: string
  +createdAt: string
}

class BudgetSummary {
  +totalIncome: number
  +totalExpense: number
  +balance: number
  +expenseRatio: number
}

interface FinanceRepository {
  +listTransactions(): Promise<Transaction[]>
  +saveTransaction(transaction: Transaction): Promise<void>
}

class LocalFinanceRepository {
  +listTransactions(): Promise<Transaction[]>
  +saveTransaction(transaction: Transaction): Promise<void>
}

class createTransaction
class calculateBudgetSummary

LocalFinanceRepository ..|> FinanceRepository
FinanceRepository ..> Transaction
createTransaction ..> Transaction
calculateBudgetSummary ..> Transaction
calculateBudgetSummary ..> BudgetSummary
@enduml
```

## Descripción

El diagrama separa entidades, contrato de repositorio, implementación local y casos de uso. Esta organización responde a una arquitectura por capas y facilita mantenimiento, validación y evolución del proyecto.
