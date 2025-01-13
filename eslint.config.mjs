// filepath: /Users/jesseanderson/Developer/react-shape-editor/eslint.config.mjs
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import babelParser from '@babel/eslint-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends('prettier'),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    rules: {
      'import/prefer-default-export': 0,
      'react/destructuring-assignment': 0,
      'react/jsx-filename-extension': 0,
      'react/prefer-stateless-function': 0,
      'react/no-did-mount-set-state': 0,
      'react/sort-comp': 0,
    },
  },
];
