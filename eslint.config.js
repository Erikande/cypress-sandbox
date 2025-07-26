// eslint.config.js

import js from '@eslint/js';
import cypress from 'eslint-plugin-cypress';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      cypress,
    },
    rules: {
      // Add Cypress-specific rules if needed
    },
  },
  {
    ignores: ['node_modules', 'dist', 'coverage'],
  },
  prettier,
];
