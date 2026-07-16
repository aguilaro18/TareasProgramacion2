module.exports = {
  preset: 'jest-expo',
  transform: {
    '^.+\\.(js|ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './jest.setup.js'
  ],
  globals: {
    unknown: {}
  }
};