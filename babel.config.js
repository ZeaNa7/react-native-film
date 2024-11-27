module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        safe: true,
        moduleName: '@env',
        path: '.env',
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
