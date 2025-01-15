import { baseConfig } from '../../eslint.config'

export default [
  ...baseConfig,
  {
    ignores: ['index.js'],
  },
]
