// eslint.config.mjs

import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'

export default withNuxt(
  eslintConfigPrettier,
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'off',
      'vue/require-v-for-key': 'off',
      'vue/no-mutating-props': 'off',
      'vue/no-dupe-keys': 'off',

      '@typescript-eslint/unified-signatures': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',

      'preserve-caught-error': 'off',
      'no-misleading-character-class': 'off',

      
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off'
    }
  }
)