# Documento de diseño - Entrega 1

FinMate Mobile se propone como una aplicación móvil multiplataforma desarrollada sobre Ionic, con orientación híbrida y arquitectura standalone. Su procesamiento y almacenamiento se realizan principalmente sobre el dispositivo móvil.

## Justificación

La aplicación busca facilitar el registro personal de ingresos, gastos, metas de ahorro y alertas financieras básicas desde un dispositivo móvil. Es pertinente como aplicación móvil porque el usuario requiere acceso frecuente, rápido y portátil a su información financiera.

Se propone como aplicación multiplataforma e híbrida porque Ionic permite construir una única base de código para Android, iOS y web, reduciendo esfuerzo de desarrollo y manteniendo consistencia visual y funcional.

## Objetivo general

Diseñar una aplicación móvil híbrida y multiplataforma para apoyar el control financiero personal mediante registro local de movimientos, consulta de resumen, seguimiento de metas y alertas básicas.

## Objetivos específicos

1. Definir los requerimientos funcionales y no funcionales de la aplicación.
2. Diseñar el flujo de navegación principal.
3. Elaborar mockups o wireframes de las pantallas principales.
4. Proponer una arquitectura standalone por capas.
5. Preparar una base técnica en Ionic para continuar hacia la implementación parcial.

## Requerimientos funcionales

| Código | Requerimiento |
|---|---|
| RF01 | Registrar ingreso o gasto. |
| RF02 | Consultar resumen financiero. |
| RF03 | Consultar historial de movimientos. |
| RF04 | Registrar metas de ahorro. |
| RF05 | Visualizar alertas financieras básicas. |
| RF06 | Configurar preferencias locales. |

## Requerimientos no funcionales

| Código | Requerimiento |
|---|---|
| RNF01 | La aplicación debe funcionar principalmente sin servidor externo. |
| RNF02 | La interfaz debe ser clara y usable desde móvil. |
| RNF03 | El diseño debe permitir evolución hacia Android e iOS. |
| RNF04 | El código debe estar separado por capas para evitar monolito. |
| RNF05 | La solución debe estar documentada en repositorio público. |

## Arquitectura propuesta

La solución se organiza en capas: presentación, dominio, datos y utilidades transversales. Esta separación permite aplicar responsabilidad única, desacoplar reglas de negocio y preparar el proyecto para pruebas y mantenimiento.

## Observaciones de la grabación incorporadas

Se incorporan principios SOLID, patrones de diseño y separación modular. La solución evita concentrar todo en una sola pantalla o archivo, y deja preparada una estructura por módulos funcionales.
