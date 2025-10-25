const path = require('path');

function createBaseConfig() {
  return {
    name: 'Recetas Peruanas',
    slug: 'recetas-peruanas',
    version: '1.0.0',
    orientation: 'portrait',
    assetBundlePatterns: ['**/*'],
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#f2c65b',
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      package: 'com.recetas.peru',
      versionCode: 1,
      permissions: ['INTERNET', 'ACCESS_NETWORK_STATE'],
      icon: './assets/icon-android.png',
      intentFilters: [
        {
          action: 'VIEW',
          category: ['BROWSABLE', 'DEFAULT'],
          data: [
            {
              scheme: 'recetasperuanas',
              host: 'app',
              pathPrefix: '/',
            },
          ],
        },
      ],
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon-foreground.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      bundler: 'metro',
    },
  };
}

function addBuildPropertiesPlugin(config) {
  const pluginConfig = [
    'expo-build-properties',
    {
      android: {
        compileSdkVersion: 34,
        targetSdkVersion: 34,
        abiFilters: ['arm64-v8a', 'armeabi-v7a', 'x86_64'],
      },
    },
  ];

  try {
    require.resolve('expo-build-properties', { paths: [path.resolve(__dirname)] });
    config.plugins = [...(config.plugins ?? []), pluginConfig];
  } catch (error) {
    console.warn(
      'expo-build-properties no está instalado; se omitió la configuración personalizada de Android. ' +
        'Instala expo-build-properties para aplicar compileSdkVersion, targetSdkVersion y abiFilters personalizados.'
    );
  }

  return config;
}

module.exports = () => {
  const config = createBaseConfig();
  return addBuildPropertiesPlugin(config);
};
