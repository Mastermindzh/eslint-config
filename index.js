const js = require("@eslint/js");
const importPlugin = require("eslint-plugin-import");
const jestPlugin = require("eslint-plugin-jest");
const prettierConfig = require("eslint-config-prettier");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  prettierConfig,
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      "no-console": [
        "error",
        {
          allow: ["debug", "error"],
        },
      ],
      "no-eval": "error",
      "import/first": "error",
      camelcase: [
        "error",
        {
          ignoreImports: true,
          ignoreDestructuring: true,
        },
      ],
      "consistent-return": "warn",
      "comma-dangle": ["warn", "always-multiline"],
      "constructor-super": "error",
      curly: "error",
      "eol-last": "warn",
      eqeqeq: ["error", "smart"],
      "import/order": 1,
      "new-parens": "error",
      "no-debugger": "error",
      "no-fallthrough": "off",
      "max-len": [
        "warn",
        {
          code: 120,
        },
      ],
      "no-shadow": [
        "error",
        {
          hoist: "all",
        },
      ],
      "no-trailing-spaces": "warn",
      "no-underscore-dangle": "error",
      "no-unsafe-finally": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "one-var": ["error", "never"],
      "prefer-const": "error",
      radix: "off",
      "space-in-parens": ["off", "never"],
      "import/no-named-as-default": ["off"],
      "import/prefer-default-export": ["off"],
    },
  },
  {
    files: ["**/*.spec.*", "**/*.test.*"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
];
