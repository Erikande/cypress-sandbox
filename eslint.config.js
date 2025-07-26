import js from '@eslint/js';
import cypress from 'eslint-plugin-cypress';
import prettier from 'eslint-config-prettier';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  {
    ...js.configs.recommended,
    ignores: ['node_modules', 'dist', 'coverage', 'eslint.config.js'],
  },
  // 🟡 JS-specific block (no TS parser)
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
      // JS rules (if any)
    },
  },
  // 🔵 TS-specific block with project setting
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: new URL('./tsconfig.json', import.meta.url).pathname,
      },
    },
    plugins: {
      cypress,
      '@typescript-eslint': tseslint,
    },
    rules: {
      // TS rules (if any)
    },
  },
  prettier,
];
