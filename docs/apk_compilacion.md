# Compilación de APK

Para compilar Android se requiere Android Studio, Android SDK y Java compatibles con Gradle.

```bash
npm install
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

En Android Studio ejecutar Build > Build APK(s). El archivo esperado se ubica en `android/app/build/outputs/apk/debug/app-debug.apk`.
