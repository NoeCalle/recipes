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
npm install      # instala dependencias
npm start        # abre el menú de Expo
npm run android  # compila en Android (requiere emulador o dispositivo)
npm run ios      # compila en iOS (solo macOS)
npm run web      # vista previa web
```

## Próximos pasos sugeridos

- Añadir persistencia local (SQLite/MMKV) para historial y favoritos.
- Incorporar búsqueda por nombre o categoría de ingredientes.
- Preparar servicios para futura integración con generación IA de recetas.
