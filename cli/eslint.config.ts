/*
{
  "rules": {
    "no-restricted-syntax": [
      "error",
      {
        "selector": "CallExpression[callee.name='arch']",
        "message": "Do not use `arch()` to detect the user's machine architecture. Use util.getRealArch() instead."
      },
      {
        "selector": "CallExpression[callee.object.name='os'][callee.property.name='arch']",
        "message": "Do not use `os.arch()` to detect the user's machine architecture. Use util.getRealArch() instead."
      },
      {
        "selector": "MemberExpression[object.name='process'][property.name='arch']",
        "message": "Do not use `process.arch` to detect the user's machine architecture. Use util.getRealArch() instead."
      }
    ]
  }
}
*/
import path from 'path'
import { baseConfig } from "../eslint.config"
import globals from 'globals'

export default [
  ...baseConfig,
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: path.join(__dirname, '../packages/ts/tsconfig.json'),
      },
      globals: {
        ...globals.node
      }
    }
  },
  {
    ignores: [
      '__snapshots__/**/*',
      'angular/**/*',
      'build/**/*',
      'mount-utils/**/*',
      'node_modules/**/*',
      'react/**/*',
      'svelte/**/*',
      'vue/**/*',
      'types/**/*',
    ]
  },
  {
    files: ['test/**/*.{ts,js}'],
    languageOptions: {
      globals: {
        sinon: 'readonly',
        lib: 'readonly',
      }
    }
  }
]