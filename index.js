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
      ecmaVersion: 2022,
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

      // Modern ES2019+ Rules
      "prefer-object-spread": "error",
      "prefer-regex-literals": "error",
      "no-useless-catch": "error",
      "no-misleading-character-class": "error",
      "require-unicode-regexp": "off",

      // ES2020+ Optional Chaining & Nullish Coalescing
      "no-unused-private-class-members": "error",
      "prefer-exponentiation-operator": "error",
      "no-constructor-return": "error",
      "no-dupe-else-if": "error",
      "no-setter-return": "error",
      "default-case-last": "error",
      "no-unreachable-loop": "error",
      "no-useless-backreference": "error",

      // ES2021+ Logical Assignment
      "logical-assignment-operators": ["error", "always"],
      "no-promise-executor-return": "error",
      "no-unsafe-optional-chaining": "error",
      "no-nonoctal-decimal-escape": "error",

      // ES2022+ Class Fields & Top-level await
      "no-constant-binary-expression": "error",
      "prefer-named-capture-group": "warn",
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
