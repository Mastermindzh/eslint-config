# eslint-config

My personal (base) eslint-config

**Compatible with ESLint 9+ using the new flat config format.**

## Table of Contents

<!-- toc -->

- [install](#install)
- [usage](#usage)
- [migration-from-legacy-eslintrc](#migration-from-legacy-eslintrc)

<!-- tocstop -->

## install

```sh
npm install --save-dev @mastermindzh/eslint-config
```

## usage

### ESLint 9+ Flat Config (Recommended)

Create an `eslint.config.js` file (or `eslint.config.mjs`) in your project root:

```javascript
const mastermindzhConfig = require('@mastermindzh/eslint-config');

module.exports = [
  ...mastermindzhConfig,
  {
    // Your custom rules here
    rules: {
      // Example: override a rule
      'no-console': 'warn',
    },
  },
];
```

### TypeScript Projects

For TypeScript projects, you may also want to add TypeScript-specific configuration:

```javascript
const mastermindzhConfig = require('@mastermindzh/eslint-config');
const tseslint = require('typescript-eslint');

module.exports = [
  ...mastermindzhConfig,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // TypeScript-specific rules
    },
  },
];
```

## migration-from-legacy-eslintrc

If you're migrating from an older version (2.x) that used `.eslintrc` format:

1. **Remove** your `.eslintrc.*` files
2. **Remove** your `.eslintignore` file  
3. **Create** an `eslint.config.js` file with the flat config format shown above
4. **Add ignores** directly in the config:

```javascript
const mastermindzhConfig = require('@mastermindzh/eslint-config');

module.exports = [
  // Global ignores
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**'],
  },
  ...mastermindzhConfig,
  {
    // Your custom rules
  },
];
```
