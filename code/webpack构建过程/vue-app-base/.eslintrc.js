module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true
  },
  extends: [
    'plugin:vue/essential',
    'standard',
    'plugin:css-modules/recommended'
  ],
  parserOptions: {
    ecmaVersion: 11
  },
  plugins: [
    'vue',
    'css-modules'
  ],
  rules: {
  }
}
