module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.json'],
      rules: {
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
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
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: ['typeAlias', 'typeParameter'],
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: true,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-useless-constructor': 'warn',
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
    'no-console': ['error', { allow: ["warn", "error"] }],
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
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
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
