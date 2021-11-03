module.exports = {
    'env': {
        'browser': true,
        'node':true,
        'es2021': true
    },
    'plugins': ['testcafe'],
    'extends': [
        'eslint:recommended',
        'plugin:testcafe/recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 13,
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ]
    }
}
