module.exports = {
  env: {
    browser: false,
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["import"],
  extends: ["eslint:recommended", "prettier"],
  overrides: [
    {
      files: ["**/*.spec.*"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
      },
    },
  ],
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
    "prefer-arrow/prefer-arrow-functions": "off",
    "prefer-const": "error",
    radix: "off",
    "space-in-parens": ["off", "never"],
    "import/no-named-as-default": ["off"],
    "import/prefer-default-export": ["off"],
  },
};
