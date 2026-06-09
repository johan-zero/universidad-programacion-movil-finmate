# Arquitectura y SDK de ejecución

FinMate Mobile usa una estructura por capas para separar interfaz, lógica de negocio, acceso a datos y utilidades comunes.

## Capas

- Presentación: src/presentation. Contiene pantallas, componentes visuales y navegación.
- Aplicación: src/app. Define rutas y flujo principal.
- Dominio: src/domain. Contiene entidades, contratos y casos de uso.
- Datos: src/data. Maneja persistencia local y repositorios.
- Core: src/core. Contiene utilidades transversales.

## Herramientas necesarias

- Node.js 20 LTS o superior: permite ejecutar dependencias, scripts y servidor local de desarrollo.
- npm: instala paquetes y ejecuta comandos del proyecto.
- Ionic Framework: permite construir interfaz móvil híbrida con componentes UI.
- React: soporta la implementación de pantallas y componentes.
- Capacitor: permite preparar la app para plataformas móviles.
- Android Studio y Android SDK: necesarios para generar APK en fases posteriores.

## Comandos básicos

npm install
npm run dev
npm run validate
npm run test

## Justificación técnica

La combinación Ionic, React y Capacitor permite conservar una base de código web y prepararla para ejecución móvil. En esta fase se usa ejecución en navegador para validar navegación, pantallas y flujos antes de generar un APK. Android Studio y Android SDK serán necesarios para la compilación Android.
