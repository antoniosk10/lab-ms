module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    "react",
    "promise",
    "import",
    "react-hooks",
    "testing-library",
    "jest-dom",
    "cypress"
  ],
  rules: {
    "import/newline-after-import": ["error"],
    "import/no-unresolved": "off",
    "import/named": "off",
    "import/default": "off",
    "import/no-extraneous-dependencies": ["error"],
    "key-spacing": "off",
    "no-use-before-define": "off",
    "max-len": ['error', 120, 2],
    "comma-dangle": "off",
    "react-hooks/rules-of-hooks": ["error"],
    "react-hooks/exhaustive-deps": ["warn"],
    'quotes': 'off',
    'semi': 'off',
    'no-console': 'error',
    'no-empty': 'off',
    'no-empty-function': 'off',
    'react/react-in-jsx-scope': "off",
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "sibling", "parent"],
        "newlines-between": "always",
        "pathGroups": [
          {
            "pattern": "~/**",
            "group": "internal"
          }
        ]
      }
    ],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/no-adjacent-inline-elements': 'error',
    'react/no-array-index-key': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    "@typescript-eslint/no-use-before-define": ["error"],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  globals: {
    JSX: true
  },
  extends: [
    'eslint:recommended',
    'standard',
    'standard-react',
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@next/next/recommended",
    "prettier",
    'plugin:testing-library/react',
    "plugin:jest-dom/recommended",
    "plugin:cypress/recommended"
  ],
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    }
  }
}
