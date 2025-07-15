# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2025-07-15

### BREAKING CHANGES

- **ESLint 9 Migration**: Updated to ESLint v9 compatibility
- **Flat Config Structure**: Migrated from legacy `.eslintrc` format to ESLint's new flat configuration format
- **Configuration Format**: The exported configuration is now an array of config objects instead of a single object
- **Minimum ESLint Version**: Now requires ESLint v9.31.0 or higher

### Added

- New dependency: `@eslint/js` v9.31.0 for ESLint recommended rules
- New dependency: `globals` v16.3.0 for environment-specific global variables
- Support for both `*.spec.*` and `*.test.*` test file patterns

### Changed

- **Configuration Structure**: Completely restructured to use ESLint flat config format
- **Environment Configuration**: Replaced `env` property with `languageOptions.globals`
- **Parser Options**: Migrated `parserOptions` to `languageOptions`
- **Plugin References**: Updated plugin syntax for flat config compatibility
- **Dependencies**: Moved `eslint-config-prettier` from devDependencies to dependencies
- **ECMAScript Version**: Updated from ES6 to ES2018

### Removed

- **Legacy Format**: No longer supports `.eslintrc`-style configuration
- **Deprecated Rule**: Removed `prefer-arrow/prefer-arrow-functions` rule (plugin was not installed)

### Migration Guide

If you're upgrading from v2.x to v3.0.0:

1. **Update ESLint**: Ensure you're using ESLint v9.31.0 or higher
2. **Configuration Files**: The exported config is now an array, not an object
3. **Extends Syntax**: No longer uses `extends` - rules are directly applied
4. **Test Files**: Now supports both `*.spec.*` and `*.test.*` patterns

**Before (v2.x)**:

```javascript
module.exports = {
  extends: ['@mastermindzh/eslint-config'],
  // your custom rules
};
```

**After (v3.0.0)**:

```javascript
const mastermindzhConfig = require('@mastermindzh/eslint-config');

module.exports = [
  ...mastermindzhConfig,
  {
    // your custom rules
  }
];
```

## [2.x and earlier]

Previous versions used the legacy ESLint configuration format and are compatible with ESLint v8 and earlier.
