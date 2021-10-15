module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  extends: ['plugin:vue/recommended', 'airbnb-base', 'prettier'],

  rules: {
    'no-shadow': ['error', { allow: ['state'] }],
    'no-underscore-dangle': 'off',
    'global-require': 'off',
    'func-names': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'prefer-rest-params': 'off',
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'vue/no-v-html': 'off',
  },

  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
    },
  },

  overrides: [
    {
      files: ['*.spec.js'],
      rules: {
        quotes: [2, 'single'],
      },
      globals: {
        jest: true,
        expect: true,
        afterEach: true,
        beforeEach: true,
        afterAll: true,
        beforeAll: true,
        describe: true,
        it: true,
        test: true,
      },
    },
  ],
};
