module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'warn',
        'prefer-template': 'warn',
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'react/prop-types': 'off'
    }
}
