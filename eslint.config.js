import importResolver from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import { fixupPluginRules } from '@eslint/compat'

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    { languageOptions: { globals: globals.browser } },
    ...tseslint.configs.recommended,
    {
        plugins: {
            'react-hooks': fixupPluginRules(reactHooks),
            'simple-import-sort': simpleImportSort,
            react: fixupPluginRules(react),
            import: fixupPluginRules(importResolver),
            prettier: prettier,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        ['^react', '^\\w'],
                        ['^src(/.*|$)', '^\\.'],
                        ['^[^.]'],
                    ],
                },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            'react/react-in-jsx-scope': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'import/first': 'error',
            '@typescript-eslint/no-unsafe-function-type': 'off',
            '@typescript-eslint/no-this-alias': 'off',
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',
            'prefer-const': 'warn',
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            'sort-imports': [
                'error',
                {
                    ignoreCase: true,
                    ignoreDeclarationSort: true,
                    ignoreMemberSort: false,
                    memberSyntaxSortOrder: [
                        'none',
                        'all',
                        'multiple',
                        'single',
                    ],
                    allowSeparatedGroups: true,
                },
            ],
            'react/self-closing-comp': [
                'error',
                {
                    component: true,
                    html: false,
                },
            ],
        },
    },
    {
        ignores: ['dist/*', '.yarn', '.pnp.cjs', 'storybook-static/*'],
    },
]
