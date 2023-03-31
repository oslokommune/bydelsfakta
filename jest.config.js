module.exports = {
  testEnvironment: 'jsdom',
  rootDir: './',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue2-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/setup_file.js'],
  testURL: 'http://localhost/',
};
