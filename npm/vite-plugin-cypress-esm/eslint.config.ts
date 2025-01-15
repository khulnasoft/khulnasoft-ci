import { baseConfig } from '../../eslint.config'

export default [
  ...baseConfig,
  {
    ignores: ['index.d.ts', 'index.js'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts', 'cypress.config.ts', 'client/moduleCache.js'],
        },
      },
    },
  },
]
