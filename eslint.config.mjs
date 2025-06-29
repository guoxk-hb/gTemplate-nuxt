import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu({
  pnpm: true,
  formatters: true,
  typescript: true,
}).append(
  // ...
  nuxt(),
)
