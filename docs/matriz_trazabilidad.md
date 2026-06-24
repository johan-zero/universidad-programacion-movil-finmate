# Matriz de trazabilidad - Entrega 2

| Requerimiento | Caso de uso | Componente implementado | Evidencia |
|---|---|---|---|
| RF-01 Iniciar sesión | CU-01 | `LoginPage.tsx` | Navegación al Dashboard |
| RF-02 Consultar resumen | CU-02 | `DashboardPage.tsx`, `calculateBudgetSummary.ts` | Balance calculado desde movimientos locales |
| RF-03 Registrar movimiento | CU-03 | `AddTransactionPage.tsx`, `createTransaction.ts` | Formulario, validación y persistencia local |
| RF-04 Consultar historial | CU-04 | `TransactionsPage.tsx` | Historial actualizado después de guardar |
| RF-05 Consultar metas | CU-05 | `GoalsPage.tsx` | Tarjetas con porcentaje de avance |
| RF-06 Consultar alertas | CU-06 | `AlertsPage.tsx` | Estado calculado desde el nivel de gasto |
| RF-07 Configurar preferencias | CU-07 | `SettingsPage.tsx`, `FinanceContext.tsx` | Toggles para alertas y modo oscuro |

## Cobertura

Los siete requerimientos funcionales definidos cuentan con interfaz implementada. RF-01 a RF-04 incluyen interacción y flujo de datos local; RF-05 a RF-07 implementan consulta o configuración prevista para esta fase de avance.
