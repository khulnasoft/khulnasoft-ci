import { baseConfig } from '../../eslint.config'

export default [
  ...baseConfig, {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['lib/*.js', 'app/*.js', 'index.js', 'test/*.js', 'eslint.config.ts'],
        },
      },
    },
  },
]
