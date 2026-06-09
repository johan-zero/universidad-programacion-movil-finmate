# Requerimientos actualizados - Entrega 2

## Requerimientos funcionales

| Código | Requerimiento | Descripción | Estado Entrega 2 |
|---|---|---|---|
| RF-01 | Iniciar sesión local simulada | Permitir que el usuario ingrese a la aplicación desde la pantalla inicial. | Implementado |
| RF-02 | Consultar resumen financiero | Mostrar balance, ingresos, gastos y estado financiero general. | Implementado parcial |
| RF-03 | Registrar movimiento financiero | Registrar ingresos o gastos con tipo, categoría, valor y nota. | Implementado parcial |
| RF-04 | Consultar historial de movimientos | Visualizar movimientos registrados o precargados. | Implementado parcial |
| RF-05 | Consultar metas de ahorro | Visualizar metas activas y porcentaje de avance. | Implementado parcial |
| RF-06 | Consultar alertas financieras | Presentar alertas relacionadas con gastos y metas. | Implementado parcial |
| RF-07 | Configurar preferencias locales | Permitir activar alertas, modo oscuro y almacenamiento local. | Implementado parcial |

## Requerimientos no funcionales

| Código | Requerimiento | Criterio de aceptación |
|---|---|---|
| RNF-01 | Usabilidad móvil | La navegación debe ser clara, con botones y menús visibles en pantalla móvil. |
| RNF-02 | Portabilidad | La base técnica debe permitir evolución hacia Android, iOS y web con Ionic/Capacitor. |
| RNF-03 | Mantenibilidad | El código debe organizarse por capas: presentación, dominio, datos y core. |
| RNF-04 | Funcionamiento standalone | La solución debe operar inicialmente sin servidor externo. |
| RNF-05 | Validación de datos | La app debe validar categoría y valor antes de guardar un movimiento. |
| RNF-06 | Trazabilidad | El avance debe quedar documentado en GitHub con archivos y commits verificables. |
