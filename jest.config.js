module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/*.styles.{ts,tsx}',
    '!<rootDir>/src/theme/**/*',
    '!<rootDir>/src/styles/**/*',
    '!<rootDir>/src/config/**/*',
    '!<rootDir>/src/**/index.ts',
  ],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/src/config/jest-setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.spec.json',
    },
  },
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
};
