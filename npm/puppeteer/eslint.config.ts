import { baseConfig } from '../../eslint.config'

export default [
  ...baseConfig,
  {
    ignores: ['support/index.js'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts', 'cypress.config.ts'],
        },
      },
    },
  },
]
