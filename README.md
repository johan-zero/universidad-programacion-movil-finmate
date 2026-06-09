# FinMate Mobile - Énfasis en Programación Móvil

Repositorio académico para las entregas del módulo **Énfasis en Programación Móvil**.

## Descripción del proyecto

FinMate Mobile es una aplicación móvil híbrida y multiplataforma propuesta con **Ionic + React + Capacitor**. Su objetivo es apoyar el control financiero personal mediante registro de ingresos, gastos, metas de ahorro y alertas básicas desde un dispositivo móvil.

La aplicación se plantea como una solución principalmente **standalone**: el procesamiento inicial y la persistencia básica se realizan localmente, sin depender de un servidor externo en esta fase.

## Estado de la Entrega 2

La Entrega 2 incorpora la realimentación recibida por el tutor y agrega formalización técnica mediante:

- Requerimientos funcionales y no funcionales codificados.
- Diagrama UML de casos de uso.
- Fichas de casos de uso.
- Diagrama UML de secuencia.
- Diagrama UML de clases de dominio.
- Evidencia de avance funcional en navegación y pantallas base.

## Estructura del repositorio

```text
.
├── README.md
├── package.json
├── capacitor.config.ts
├── index.html
├── src/
│   ├── app/
│   ├── core/
│   ├── data/
│   ├── domain/
│   ├── presentation/
│   └── theme/
├── public/
│   └── preview.html
├── docs/
│   ├── entrega_1_diseno.md
│   ├── entrega_2_diseno.md
│   ├── requerimientos.md
│   ├── fichas_casos_uso.md
│   ├── rubrica_checklist.md
│   ├── repo_publico_checklist.md
│   ├── uml/
│   │   ├── casos_uso.md
│   │   ├── secuencia_registrar_movimiento.md
│   │   └── clases_dominio.md
│   ├── assets/
│   ├── evidencias/
│   └── mockups/
└── scripts/
    ├── validate-structure.mjs
    └── run-domain-tests.mjs
```

## Instalación local

```bash
npm install
```

## Ejecución del prototipo

```bash
npm run dev
```

También se incluye una vista previa estática para evidenciar el flujo visual del prototipo:

```text
public/preview.html
```

## Validaciones locales

Validar estructura por capas:

```bash
npm run validate
```

Ejecutar pruebas de dominio:

```bash
npm run test
```

## Arquitectura propuesta

| Capa | Responsabilidad |
|---|---|
| `presentation` | Pantallas, componentes visuales y navegación. |
| `domain` | Entidades, reglas de negocio y casos de uso. |
| `data` | Repositorios y persistencia local. |
| `core` | Utilidades transversales, validaciones y formateo. |

## Relación con la Entrega 2

| Requisito solicitado | Evidencia en el repositorio |
|---|---|
| Requerimientos codificados | `docs/requerimientos.md` |
| Diagrama UML de casos de uso | `docs/uml/casos_uso.md` |
| Fichas de casos de uso | `docs/fichas_casos_uso.md` |
| Diagrama de secuencia | `docs/uml/secuencia_registrar_movimiento.md` |
| Diagrama de clases | `docs/uml/clases_dominio.md` |
| Avance funcional | `src/` y `public/preview.html` |

## Autor

**Johan Sebastian Rodriguez**

## Materia

Énfasis en Programación Móvil
