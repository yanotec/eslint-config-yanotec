module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.json'],
      rules: {
        'no-unused-expressions': 'off',
        'prettier/prettier': [
          'error',
          {
            printWidth: 80,
            singleQuote: false,
            tabs: false,
            tabWidth: 4,
            trailingComma: 'none',
          },
        ],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'import/extensions': ['error', 'ignorePackages', { js: 'never' }],
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
    'no-console': ['error', { allow: ["warn", "error"] }],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        printWidth: 80,
        singleQuote: true,
        tabs: false,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
  },
};
