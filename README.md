# Recetas Peruanas (MVP)

Aplicación móvil creada con Expo + React Native que permite seleccionar ingredientes y obtener una receta peruana sugerida basada en coincidencias locales.

## Características iniciales

- Pantalla de bienvenida con llamada a la acción.
- Selector de ingredientes en formato de tarjetas con estado persistente en contexto global.
- Dataset local de ingredientes y recetas representativos de la gastronomía peruana.
- Motor de coincidencias simple que calcula la cobertura de ingredientes y ordena las recetas sugeridas.
- Pantalla de resultados con detalle de la receta, pasos, coincidencias y sugerencias opcionales.

## Requisitos previos

- Node.js 18+
- Expo CLI (`npm install -g expo-cli`) opcional si quieres usar los comandos globales.

## Scripts

```bash
npm install                   # instala dependencias
npm start                     # abre el menú de Expo
npm run android               # compila en Android (requiere emulador o dispositivo)
npm run ios                   # compila en iOS (solo macOS)
npm run web                   # vista previa web
npm run build:android:production  # genera el .aab de Play Console con EAS
```

## Distribución con EAS (Android)

1. Instala las herramientas de Expo Application Services de manera local:

   ```bash
   npm install --save-dev eas-cli
   ```

2. Genera la configuración de perfiles en `eas.json`. Este repositorio ya incluye perfiles `preview` y `production` que crean paquetes Android App Bundle (`buildType: app-bundle`).
3. Ejecuta `npx expo prebuild` solo cuando necesites sincronizar cambios nativos o agregar módulos que requieran configuración nativa. Los archivos generados no deben editarse manualmente.
4. Administra las credenciales con `npx eas credentials`. Durante el asistente:
   - Crea o sube la keystore de producción.
   - Descarga la keystore y la contraseña que genere Expo.
   - Guarda ambas en un gestor de secretos corporativo y en un repositorio seguro interno. Este proyecto ignora el directorio `credentials/` para evitar exponer llaves en Git.
5. Lanza la compilación automatizada para la Play Console con:

   ```bash
   npm run build:android:production
   ```

   El comando ejecuta `eas build --platform android --profile production` y almacenará el `.aab` generado en tu cuenta de EAS. Descárgalo desde los artefactos de la build y súbelo manualmente o automatiza la subida con `eas submit` usando las credenciales de servicio de Google Play.

## Próximos pasos sugeridos

- Añadir persistencia local (SQLite/MMKV) para historial y favoritos.
- Incorporar búsqueda por nombre o categoría de ingredientes.
- Preparar servicios para futura integración con generación IA de recetas.
