import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  {
    ...js.configs.recommended,
    ignores: ['node_modules', 'dist', 'coverage', 'eslint.config.js'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', 
    },
    rules: {
      // your rules here
    },
  },
  prettier,
];
