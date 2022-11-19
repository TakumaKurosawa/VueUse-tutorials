/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  'root': true,
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': '@typescript-eslint/parser'
  },
  'plugins': [
    '@typescript-eslint',
    'import'
  ],
  'rules': {
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off',
    'lines-between-class-members': 'off',
    'func-names': 'error',
    'func-style': [
      'error',
      'expression',
      {
        'allowArrowFunctions': true
      }
    ],
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/array-type': [
      'error',
      {
        'default': 'array-simple'
      }
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        'newlines-between': 'always',
        'pathGroupsExcludedImportTypes': [
          'builtin'
        ],
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        },
        'pathGroups': [
          {
            'pattern': '@/components/**',
            'group': 'internal',
            'position': 'before'
          }
        ]
      }
    ],
    'eqeqeq': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': ['variable'],
        'format': ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
        'leadingUnderscore': 'allow'
      },
      {
        'selector': ['function', 'parameter', 'method', 'accessor'],
        'format': ['strictCamelCase'],
        'leadingUnderscore': 'allow'
      },
      {
        'selector': ['enum', 'class'],
        'format': ['StrictPascalCase']
      },
      {
        'selector': ['enumMember'],
        'format': ['StrictPascalCase', 'UPPER_CASE']
      },
      {
        'selector': ['typeAlias', 'interface'],
        'format': ['PascalCase']
      }
    ]
  },
  'globals': {
    'defineProps': 'readonly',
    'defineEmits': 'readonly',
    'defineExpose': 'readonly',
    'withDefaults': 'readonly',
    'NodeJS': 'readonly',
    'MutationCallback': 'readonly'
  },
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ]
}
