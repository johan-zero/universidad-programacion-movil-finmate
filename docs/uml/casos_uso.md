# Diagrama UML de casos de uso

```plantuml
@startuml
left to right direction
actor Usuario
rectangle "FinMate Mobile" {
  usecase "CU-01 Iniciar sesión" as CU01
  usecase "CU-02 Consultar resumen financiero" as CU02
  usecase "CU-03 Registrar movimiento financiero" as CU03
  usecase "CU-04 Consultar historial" as CU04
  usecase "CU-05 Consultar metas" as CU05
  usecase "CU-06 Consultar alertas" as CU06
  usecase "CU-07 Configurar preferencias" as CU07
  usecase "Validar datos" as VAL
  usecase "Calcular balance" as BAL
}
Usuario -- CU01
Usuario -- CU02
Usuario -- CU03
Usuario -- CU04
Usuario -- CU05
Usuario -- CU06
Usuario -- CU07
CU03 .. VAL : include
CU02 .. BAL : include
@enduml
```

## Descripción

El actor principal es el Usuario. El sistema FinMate Mobile agrupa los casos de uso principales de la aplicación. El caso Registrar movimiento financiero incluye la validación de datos, mientras que Consultar resumen financiero incluye el cálculo del balance.
