# Compilación Android

La aplicación web se valida con `npm run build`. Para generar un instalador Android se requiere Android Studio con Android SDK y Java configurados.

Pasos:

```bash
npm install
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

En Android Studio se debe ejecutar Build > Build APK(s). El resultado se genera normalmente en `android/app/build/outputs/apk/debug/app-debug.apk`.

El proyecto usa Capacitor y `@capacitor/preferences` para persistencia local.
