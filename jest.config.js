module.exports = {
    // This tells Jest to use ts-jest for TypeScript files
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      // This maps any import paths that start with "~" to the "src" directory
      '^~/(.*)$': '<rootDir>/src/$1',
    },
  };
  