module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest'
  },
  testEnvironment: 'node',
  setupFiles: ["<rootDir>/config/jest.setup"],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  preset: 'ts-jest'
};
