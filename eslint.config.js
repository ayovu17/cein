import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  typescript: true,
  stylistic: true,
  imports: true,
  extends: ['plugin:storybook/recommended'],

}, {
  rules: {
    'eslint-comments/no-unlimited-disable': 'off',
  },
})
