# FinMate Mobile

Repositorio académico público del proyecto FinMate Mobile.

- URL: https://github.com/johan-zero/universidad-programacion-movil-finmate
- Rama principal: main
- Autor: Johan Sebastián Rodríguez
- Tutor: Víctor Fabián Castro Pérez

## Entrega 3

La versión final incluye registro local de movimientos, resumen financiero, historial, metas, alertas, ajustes, UML, fichas de casos de uso, trazabilidad, validaciones y documentación de publicación.

## Ejecución

```bash
npm install
npm run validate
npm test
npm run build
npx cap sync android
npm run dev
```

## Documentación

- `docs/entrega_3_final.md`
- `docs/analisis_publicacion_monetizacion.md`
- `docs/matriz_validacion_final.md`
- `docs/guion_video_demostracion.md`
- `docs/release_checklist.md`

## Arquitectura

La app usa Ionic, React, Capacitor y persistencia local. El código se separa en presentation, app, domain, data y core.

## Android

El proyecto Android se sincroniza con Capacitor. Para compilarlo se requiere Android Studio y Android SDK.
