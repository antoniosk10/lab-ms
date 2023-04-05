module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    "react",
    "promise",
    "import",
    "react-hooks"
  ],
  rules: {
    "import/newline-after-import": ["error"],
    "import/no-unresolved": "off",
    "import/named": "off",
    "import/default": "off",
    "import/no-extraneous-dependencies": ["error"],
    "react/jsx-indent": ['error', 2],
    "key-spacing": "off",
    "no-use-before-define": "off",
    "jsx-quotes": ['error', "prefer-double"],
    "max-len": ['error', 120, 2],
    "object-curly-spacing": ['error', "always"],
    "indent": ['error', 2, { "SwitchCase": 1 }],
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
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-tag-spacing': ['error', {
      'beforeSelfClosing': 'always'
    }],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/no-adjacent-inline-elements': 'error',
    'react/no-array-index-key': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    "@typescript-eslint/semi": ['error', 'never'],
    '@typescript-eslint/space-infix-ops': 'error',
    "@typescript-eslint/no-use-before-define": ["error"],
    '@typescript-eslint/space-before-function-paren': 'error',
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
    "plugin:import/warnings"
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
