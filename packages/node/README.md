# Yanotec ESLint config for node apps

## Whats included?

- Airbnb config base;
- Prettier;

## Setup

1. Install the dependencies

```bash
  npm i -D eslint @yanotec/eslint-config-node
```

2. Create a `.eslintrc.json` file extending the config:

for ts project

```json
{
  "extends": "@yanotec/eslint-config-node/ts-recommended"
}
```

or js project

```json
{
  "extends": "@yanotec/eslint-config-node/js-recommended"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
