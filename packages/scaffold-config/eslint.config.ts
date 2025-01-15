import { baseConfig } from '../../eslint.config'

export default [
  ...baseConfig,
  {
    ignores: ['index.js'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts'],
        },
      },
    },
  },
]
