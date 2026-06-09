# Fichas de casos de uso - FinMate Mobile

## CU-01 - Iniciar sesión

| Campo | Descripción |
|---|---|
| Actor principal | Usuario |
| Objetivo | Acceder a la aplicación desde una pantalla inicial. |
| Precondiciones | La aplicación se encuentra instalada o disponible en navegador. |
| Flujo principal | 1. El usuario abre la app. 2. Ingresa correo y contraseña. 3. Presiona Entrar. 4. La app redirige al resumen financiero. |
| Flujo alterno | Si los campos están vacíos, se debe mostrar validación antes de continuar. |
| Postcondición | Usuario ubicado en la pantalla Dashboard. |
| Requerimientos asociados | RF-01, RNF-01 |

## CU-02 - Consultar resumen financiero

| Campo | Descripción |
|---|---|
| Actor principal | Usuario |
| Objetivo | Consultar balance, ingresos, gastos y estado financiero. |
| Precondiciones | El usuario ingresó a la aplicación. |
| Flujo principal | 1. La app carga el Dashboard. 2. Consulta movimientos disponibles. 3. Calcula resumen. 4. Muestra balance y estado. |
| Flujo alterno | Si no existen movimientos, se muestra resumen en cero o valores iniciales. |
| Postcondición | El usuario visualiza su estado financiero. |
| Requerimientos asociados | RF-02, RNF-03, RNF-04 |

## CU-03 - Registrar movimiento financiero

| Campo | Descripción |
|---|---|
| Actor principal | Usuario |
| Objetivo | Registrar un ingreso o gasto local. |
| Precondiciones | El usuario ingresó a la aplicación. |
| Flujo principal | 1. El usuario abre Nuevo movimiento. 2. Selecciona tipo. 3. Ingresa categoría. 4. Ingresa valor. 5. Agrega nota opcional. 6. Presiona Guardar. 7. La app valida datos. 8. La app guarda el movimiento localmente. |
| Flujo alterno | Si el valor es menor o igual a cero, se muestra mensaje de error. Si la categoría está vacía, se solicita corrección. |
| Postcondición | Movimiento almacenado y disponible para historial/resumen. |
| Requerimientos asociados | RF-03, RF-04, RNF-05 |

## CU-04 - Consultar historial de movimientos

| Campo | Descripción |
|---|---|
| Actor principal | Usuario |
| Objetivo | Ver ingresos y gastos registrados. |
| Precondiciones | El usuario ingresó a la aplicación. |
| Flujo principal | 1. El usuario abre Movimientos. 2. La app consulta lista de movimientos. 3. Muestra categoría, tipo y valor. |
| Flujo alterno | Si no hay movimientos, se presenta mensaje informativo. |
| Postcondición | El usuario identifica sus movimientos recientes. |
| Requerimientos asociados | RF-04, RNF-01 |

## CU-05 - Consultar metas de ahorro

| Campo | Descripción |
|---|---|
| Actor principal | Usuario |
| Objetivo | Revisar metas y porcentaje de avance. |
| Precondiciones | El usuario ingresó a la aplicación. |
| Flujo principal | 1. El usuario abre Metas. 2. La app muestra metas activas. 3. Se visualiza porcentaje de avance. |
| Flujo alterno | Si no existen metas, se muestra mensaje para crear una meta futura. |
| Postcondición | El usuario conoce el avance de sus metas. |
| Requerimientos asociados | RF-05 |

## CU-06 - Consultar alertas financieras

| Campo | Descripción |
|---|---|
| Actor principal | Usuario |
| Objetivo | Visualizar alertas relacionadas con gasto y metas. |
| Precondiciones | El usuario ingresó a la aplicación. |
| Flujo principal | 1. El usuario abre Alertas. 2. La app evalúa reglas básicas. 3. Muestra alertas de gasto variable y metas pendientes. |
| Flujo alterno | Si no hay alertas, se muestra estado sin novedades. |
| Postcondición | El usuario identifica posibles riesgos financieros. |
| Requerimientos asociados | RF-06 |

## CU-07 - Configurar preferencias locales

| Campo | Descripción |
|---|---|
| Actor principal | Usuario |
| Objetivo | Ajustar preferencias básicas de la aplicación. |
| Precondiciones | El usuario ingresó a la aplicación. |
| Flujo principal | 1. El usuario abre Ajustes. 2. Activa o desactiva alertas locales. 3. Revisa almacenamiento local. |
| Flujo alterno | Si una opción no está disponible, se muestra deshabilitada. |
| Postcondición | Preferencias visualizadas o actualizadas. |
| Requerimientos asociados | RF-07, RNF-04 |
