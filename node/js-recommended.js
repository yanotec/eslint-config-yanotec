module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.json'],
      rules: { 'no-unused-expressions': 'off' },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'import/extensions': ['error', 'ignorePackages', { ts: 'never' }],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          ['index', 'sibling', 'parent'],
          'object',
          'type',
        ],
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': 'error',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        printWidth: 80,
        singleQuote: true,
        tabs: false,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
  },
};
