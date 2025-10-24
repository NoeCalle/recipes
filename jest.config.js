module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|expo(nent)?|@expo|@unimodules|unimodules|expo-.*|@expo-.*)/)'
  ]
};
