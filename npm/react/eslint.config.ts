import { baseConfig } from '../../eslint.config'
import globals from 'globals'

export default [
  ...baseConfig,
  {
    files: ['src/createMount.ts'],
    rules: {
      'cypress/no-unnecessary-waiting': 'warn',
    }
  }
]