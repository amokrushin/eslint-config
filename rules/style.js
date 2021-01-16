const airbnbBase = require('eslint-config-airbnb-base/rules/style');

const last = (arr) => arr[arr.length - 1];

module.exports = {
    rules: {
        // require function expressions to have a name
        // https://eslint.org/docs/rules/func-names
        'func-names': ['off'],

        // this option sets a specific tab width for your code
        // https://eslint.org/docs/rules/indent
        indent: ['error', 4, last(airbnbBase.rules.indent)],

        // specify the maximum length of a line in your program
        // https://eslint.org/docs/rules/max-len
        'max-len': ['error', {
            ...last(airbnbBase.rules['max-len']),
            code: 120,
            tabWidth: 4,
            ignoreComments: true,
        }],

        // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
        // https://eslint.org/docs/rules/no-multiple-empty-lines
        'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 0 }],

        // disallow use of multiple spaces
        'no-multi-spaces': ['error', {
            ignoreEOLComments: true,
            exceptions: {
                ImportDeclaration: true,
            },
        }],

        // disallow use of unary operators, ++ and --
        // https://eslint.org/docs/rules/no-plusplus
        'no-plusplus': ['off'],

        // disallow certain syntax forms
        // https://eslint.org/docs/rules/no-restricted-syntax
        'no-restricted-syntax': [
            'error',
            ...airbnbBase.rules['no-restricted-syntax'].slice(1).filter((rule) => rule.selector !== 'ForOfStatement'),
        ],
    },
};
