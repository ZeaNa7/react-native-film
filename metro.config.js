const {withNativeWind} = require('nativewind/metro');
// @ts-ignore
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = mergeConfig(getDefaultConfig(__dirname), {});

// @ts-ignore
module.exports = withNativeWind(config, {
  input: './global.css',
});
