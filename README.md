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
npm test                      # ejecuta la suite de pruebas de Jest (modo CI con --ci)
npm run build:android:production  # genera el .aab de Play Console con EAS
```

## Integración continua

El repositorio incluye un workflow de GitHub Actions que se ejecuta en cada _push_ y _pull request_. La pipeline instala las dependencias con `npm ci` y luego ejecuta:

- `npm run lint` para validar la calidad del código con las reglas de Expo/ESLint.
- `npm test -- --ci` para correr la suite de pruebas de Jest en modo no interactivo.

Esto garantiza que los cambios nuevos respeten la convención de estilos y no rompan la lógica existente antes de fusionarse.

## Pruebas manuales de humo (smoke tests)

Antes de publicar una nueva versión en la Play Console, genera un build de Android en modo release localmente con:

```bash
expo run:android --variant release
```

Con la aplicación instalada en un dispositivo físico o emulador representativo, valida estos flujos críticos:

1. **Navegación principal:** abrir la app, avanzar desde la pantalla de bienvenida y regresar sin errores.
2. **Selección de ingredientes:** marcar y desmarcar ingredientes asegurando que el estado persista y que las tarjetas respondan correctamente.
3. **Resultados:** generar la receta sugerida, revisar el detalle (pasos, coincidencias, sugerencias) y compartir o cerrar el flujo.

Documenta cualquier hallazgo en el informe de QA adjunto al release.

## Play Console (closed testing)

Usa el perfil `production` (`npm run build:android:production`) para generar el `.aab` destinado a la Play Console. Configura una pista interna o cerrada (_Closed Testing_) para distribuir la app a evaluadores internos:

1. Sube el `.aab` y define notas de la versión enfocadas en los cambios validados.
2. Invita a testers internos (correo corporativo o grupos) y establece fechas límite para recibir feedback.
3. Consolida los comentarios en tu herramienta de seguimiento (Jira, Linear, etc.) antes de promover el build a producción.

## Observabilidad en dispositivos

Durante las pruebas en Android 12/13 y gama media-baja, monitorea los siguientes indicadores:

- **Logs:** captura eventos y errores con `adb logcat` mientras ejecutas los smoke tests.
- **Tamaño del bundle:** verifica el peso final del `.aab` generado por EAS para detectar incrementos inesperados.
- **Uso de memoria:** utiliza _Android Studio Profiler_ u `adb shell dumpsys meminfo` para asegurar que el consumo se mantenga dentro de los límites esperados.

Registra hallazgos relevantes para facilitar regresiones futuras y priorizar optimizaciones.

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
