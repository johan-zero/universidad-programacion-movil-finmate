# Diagrama UML de secuencia - Registrar movimiento financiero

```plantuml
@startuml
actor Usuario
participant "AddTransactionPage" as UI
participant "createTransaction" as UC
participant "LocalFinanceRepository" as REPO
database "localStorage" as DB

Usuario -> UI: diligencia tipo, categoría, valor y nota
Usuario -> UI: presiona Guardar
UI -> UC: createTransaction(datos)
UC -> UC: validar categoría y valor
UC --> UI: Transaction
UI -> REPO: saveTransaction(transaction)
REPO -> DB: leer movimientos actuales
DB --> REPO: movimientos existentes
REPO -> DB: guardar movimiento actualizado
REPO --> UI: confirmación
UI --> Usuario: redirige a Movimientos
@enduml
```

## Descripción

El flujo inicia cuando el usuario diligencia el formulario de nuevo movimiento. La pantalla valida la información mediante el caso de uso `createTransaction` y luego delega la persistencia al repositorio local. El repositorio actualiza el almacenamiento local y la interfaz redirige al historial de movimientos.
