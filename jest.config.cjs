module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/',
    customExportConditions: ['node', 'node-addons'],
  },
  rootDir: './',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!axios)'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/setup_file.js'],
  globals: {
    'vue-jest': {
      compilerOptions: {
        comments: false,
      },
    },
  },
};
