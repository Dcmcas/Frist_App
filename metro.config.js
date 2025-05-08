// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push('cjs');
// Esta línea  es la que faltaba, a partir de Expo 53 si vas a usar Fireabase toca agregar esto. Siempre
// revisa la documentacioón oficial por cualquier cosa
config.resolver.unstable_enablePackageExports = false;

module.exports = config;
