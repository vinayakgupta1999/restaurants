module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:vue/recommended'
    ],
    rules: {
    //   'vue/no-unused-vars': 'error',
      'vue/multi-word-component-names': 0,
      "vue/no-multiple-template-root": 0,
  }
}