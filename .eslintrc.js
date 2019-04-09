module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jest'],
  rules: {
    'space-before-function-paren': 0,
    'no-plusplus': 0,
    'prefer-template': 0,
    'arrow-parens': 0,
    'max-len': 0,
    camelcase: 0,
    'no-console': 0,
    'implicit-arrow-linebreak': 0,
    'comma-dangle': 0,
    'function-paren-newline': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'no-underscore-dangle': 0,
  },
  parser: 'babel-eslint',
};
