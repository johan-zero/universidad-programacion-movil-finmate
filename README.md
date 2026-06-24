# FinMate Mobile - Énfasis en Programación Móvil

Repositorio académico del proyecto **FinMate Mobile**, desarrollado para el módulo Énfasis en Programación Móvil.

## Repositorio público

- URL: `https://github.com/johan-zero/universidad-programacion-movil-finmate`
- Rama principal: `main`

## Propósito

FinMate Mobile es una aplicación móvil híbrida y multiplataforma construida con **Ionic, React y Capacitor**. Apoya el control financiero personal mediante registro local de ingresos y gastos, consulta de balance, historial, metas, alertas y preferencias.

La propuesta es principalmente **standalone**: los movimientos y preferencias se gestionan localmente, sin depender de un servidor externo durante esta fase académica.

## Avance de Entrega 2

Esta versión incorpora la realimentación del tutor y evidencia:

- Requerimientos funcionales y no funcionales codificados.
- Diagrama UML de casos de uso.
- Fichas de casos de uso.
- Diagrama UML de secuencia.
- Diagrama UML de clases de dominio.
- Arquitectura por capas y SDK de ejecución.
- Navegación finalizada entre interfaces.
- Implementación parcial de los requerimientos mediante persistencia local con Capacitor Preferences.
- Proyecto Android de Capacitor preparado para compilación en Android Studio.

## Arquitectura

| Capa | Responsabilidad |
|---|---|
| `src/presentation` | Pantallas, componentes visuales y navegación. |
| `src/app` | Rutas, contexto de aplicación y coordinación de estado. |
| `src/domain` | Entidades, contratos y casos de uso. |
| `src/data` | Persistencia local y repositorios. |
| `src/core` | Utilidades transversales. |

La organización separa la interfaz de la lógica de negocio y de la persistencia, facilitando pruebas, mantenimiento y evolución hacia Android.

## Requisitos de ejecución

- Node.js 20 LTS o superior.
- npm.
- Android Studio y Android SDK para compilar APK.

## Ejecución local

```bash
npm install
npm run dev
```

## Validaciones

```bash
npm run validate
npm run test
npm run build
npx cap sync android
```

## Compilación APK

El proyecto Android se genera con Capacitor. Para crear el APK en un equipo con Android Studio y Android SDK:

```bash
npx cap open android
```

En Android Studio, ejecutar **Build > Build APK(s)**. La guía completa está disponible en `docs/apk_compilacion.md`.

## Evidencias y documentación

| Elemento | Ubicación |
|---|---|
| Documento técnico Entrega 2 | `docs/entrega_2_diseno.md` |
| Requerimientos | `docs/requerimientos.md` |
| Fichas de casos de uso | `docs/fichas_casos_uso.md` |
| Matriz de trazabilidad | `docs/matriz_trazabilidad.md` |
| Arquitectura y SDK | `docs/arquitectura_sdk.md` |
| Casos de uso UML | `docs/uml/casos_uso.puml` |
| Secuencia UML | `docs/uml/secuencia_registrar_movimiento.puml` |
| Clases UML | `docs/uml/clases_dominio.puml` |
| Guía de APK | `docs/apk_compilacion.md` |

## Autor

**Johan Sebastian Rodríguez**

## Tutor

**Víctor Fabián Castro Pérez**
