module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
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
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never' },
    ],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        pathGroups: [
          {
            pattern:
              '{react,react-native,react-dom}',
            group: 'external',
            position: 'before',
          },
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          ['index', 'sibling', 'parent'],
          'object',
          'type',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['react'],
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
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
  },
};
