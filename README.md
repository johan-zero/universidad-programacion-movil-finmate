# FinMate Mobile - Énfasis en Programación Móvil

Repositorio académico para la **Entrega 1** del módulo **Énfasis en Programación Móvil**.

## Descripción del proyecto

FinMate Mobile es una aplicación móvil multiplataforma de baja complejidad propuesta para desarrollarse con **Ionic + React + Capacitor**. Su propósito es permitir que un usuario registre ingresos, gastos, metas de ahorro y alertas financieras básicas desde el dispositivo móvil.

La propuesta se diseñó como una aplicación principalmente **standalone**, de acuerdo con la guía de la asignatura: el procesamiento y almacenamiento inicial de la información se realiza localmente en el móvil, sin depender de un servidor externo.

## Objetivo académico

Diseñar una aplicación móvil multiplataforma e híbrida, sustentada mediante un documento de diseño, flujo de navegación, mockups, requerimientos funcionales y no funcionales, y una base técnica inicial que permita avanzar hacia la implementación parcial de la Entrega 2.

## Alcance de la Entrega 1

Esta entrega se centra en el **diseño del proyecto**, por lo que incluye:

1. Justificación de la aplicación.
2. Objetivo general y objetivos específicos.
3. Requerimientos funcionales y no funcionales.
4. Flujo de navegación.
5. Mockups o wireframes.
6. Propuesta de arquitectura Ionic standalone.
7. Evidencias de estructura técnica y control de versiones.

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
│   ├── github_publication_commands.md
│   ├── rubrica_checklist.md
│   ├── repo_publico_checklist.md
│   ├── assets/
│   ├── evidencias/
│   └── mockups/
├── scripts/
│   ├── validate-structure.mjs
│   └── run-domain-tests.mjs
└── .github/
    ├── ISSUE_TEMPLATE/
    │   └── task.md
    └── pull_request_template.md
```

## Requisitos previos

Para ejecutar o revisar la base técnica se requiere:

- Node.js 20 o superior.
- npm.
- Git.
- Ionic CLI, opcional para continuar la implementación.

## Instalación local

```bash
npm install
```

## Ejecución del prototipo

```bash
npm run dev
```

También se incluye una vista previa estática en:

```text
public/preview.html
```

## Validaciones locales

Validar estructura por capas:

```bash
npm run validate:structure
```

Ejecutar pruebas de dominio:

```bash
npm run test:domain
```

## Arquitectura propuesta

La aplicación se organiza por capas para evitar una implementación monolítica:

| Capa | Responsabilidad |
|---|---|
| `presentation` | Pantallas, componentes visuales y navegación. |
| `domain` | Entidades, reglas de negocio y casos de uso. |
| `data` | Repositorios y persistencia local. |
| `core` | Utilidades transversales, validaciones y formateo. |

## Relación con la rúbrica

| Requisito de Entrega 1 | Evidencia en el repositorio |
|---|---|
| Justificación | `docs/entrega_1_diseno.md` |
| Objetivos | `docs/entrega_1_diseno.md` |
| Requerimientos funcionales/no funcionales | `docs/entrega_1_diseno.md` y `docs/rubrica_checklist.md` |
| Flujo de navegación | `docs/assets/flujo_navegacion.png` |
| Mockups o wireframes | `docs/mockups/` |
| Base técnica Ionic | `package.json`, `capacitor.config.ts`, `src/` |

## Autor

**Johan Sebastian Rodriguez**

## Materia

Énfasis en Programación Móvil

## Nota académica

Este repositorio corresponde a la Entrega 1. La prioridad de esta fase es el diseño del proyecto y la justificación de su pertinencia como aplicación móvil híbrida y multiplataforma. La implementación parcial y el APK corresponden a entregas posteriores según la guía del módulo.
