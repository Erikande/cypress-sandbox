import js from '@eslint/js';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        // Add Cypress and Mocha globals
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        cy: 'readonly',
        Cypress: 'readonly',
      },
    },
    plugins: { js },
    rules: {
      // your rules here
    },
  },
];
