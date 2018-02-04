module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
  },
  extends: 'eslint:recommended',
  rules: {
    camelcase: 'error',
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'arrow-parens': ['error', 'as-needed'],
    'no-underscore-dangle': 0,
    'no-unreachable': 2,
    'comma-dangle': ['error', 'never'],
    'object-curly-newline': ['error', { 'multiline': true }],
    'no-unreachable': 'error',
    'no-param-reassign': 0,
    'no-restricted-syntax': ['off', 'ForInStatement'],
    'no-console': 2,
    'no-confusing-arrow': ['error', { allowParens: true }]
  }
}
