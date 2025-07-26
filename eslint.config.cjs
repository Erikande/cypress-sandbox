const js = require('@eslint/js');
const cypress = require('eslint-plugin-cypress');
const prettier = require('eslint-config-prettier');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');
const path = require('path');

const cypressGlobals = {
  // Cypress and Mocha globals
  cy: 'readonly',
  Cypress: 'readonly',
  describe: 'readonly',
  context: 'readonly',
  it: 'readonly',
  specify: 'readonly',
  before: 'readonly',
  after: 'readonly',
  beforeEach: 'readonly',
  afterEach: 'readonly',
  expect: 'readonly',
  assert: 'readonly',
};

module.exports = [
  {
    ...js.configs.recommended,
    ignores: ['node_modules', 'dist', 'coverage', 'eslint.config.cjs'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: cypressGlobals,
    },
    plugins: {
      cypress,
    },
    rules: {},
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: path.resolve(__dirname, 'tsconfig.json'),
      },
      globals: cypressGlobals,
    },
    plugins: {
      cypress,
      '@typescript-eslint': tseslint,
    },
    rules: {},
  },
  prettier,
];
