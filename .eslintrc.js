module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 无法使用console，如果使用生产环境会警告
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off' // 无法使用debugger，如果使用生产环境会警告
  }
}
