module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/setup_file.js'],
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
  testURL: 'http://localhost/',
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.vue'],
  coverageDirectory: '<rootDir>/src/coverageReport',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/src/coverageReport',
    '<rootDir>/src/main.js',
    '<rootDir>/src/store.js',
  ],
};
