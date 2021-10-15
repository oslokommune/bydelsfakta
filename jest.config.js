module.exports = {
  transform: {
    '^-+\\.vue$': 'vue-jest',
    '^-+\\.js$': 'vue-jest',
    '^.+\\.svg$': '<rootDir>/svgTransform.js',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.svg\\?inline?$': '<rootDir>/empty-module.js',
  },
  setupFiles: ['<rootDir>/setup_file.js'],
  testURL: 'http://localhost/',
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  // collectCoverage: true,
  // coverageReporters: ['json', 'html'],
  // collectCoverageFrom: ['src/**/*.js', 'src/**/*.vue'],
  // coverageDirectory: '<rootDir>/src/coverageReport',
  // coveragePathIgnorePatterns: [
  //   '<rootDir>/node_modules',
  //   '<rootDir>/src/coverageReport',
  //   '<rootDir>/src/main.js',
  //   '<rootDir>/src/i18n.js',
  // ],
};
