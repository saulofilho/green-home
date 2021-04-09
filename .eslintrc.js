module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
}
