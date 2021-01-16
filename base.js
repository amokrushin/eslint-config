module.exports = {
    extends: [
        'airbnb-base',
        ...[
            './rules/best-practices',
            './rules/style',
            './rules/es6',
            './rules/imports',
        ].map(require.resolve),
    ],
    env: {
        es2020: true,
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {},
};
