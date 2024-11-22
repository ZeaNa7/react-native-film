'use strict';

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  ignorePatterns: ['.nuxt', '.output', 'coverage', 'dist', 'node_modules'],
  overrides: [
    {
      extends: ['hardcore', 'hardcore/ts'],
      files: ['*.mts', '*.ts', '*.cjs', '*.js'],
      parserOptions: {
        project: './tsconfig.lint.json',
      },
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off', // viewed together, not interesting for all situations
        'import/no-unused-modules': 'off', // fail
        'no-magic-numbers': 'off', // viewed together, not interesting for all situations
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                message: 'Please import types from #ui/types instead.',
                name: '@nuxt/ui/dist/runtime/types',
              },
            ],
          },
        ],
        'unicorn/filename-case': 'off', // we have too many exceptions (╯°□°）╯︵ ┻━┻,
      },
    },
    {
      files: ['test/**/*', '*.test.ts'],
      rules: {
        '@stylistic/max-len': 'off',
        '@stylistic/quotes': 'off', // annoying with vitest snaps
        '@typescript-eslint/ban-ts-comment': 'off', // try to remove me later
        '@typescript-eslint/no-invalid-this': 'off', // try to remove me later
        '@typescript-eslint/no-shadow': 'off', // try to remove me later
        '@typescript-eslint/no-unsafe-assignment': 'off', // try to remove me later
        '@typescript-eslint/no-unsafe-member-access': 'off', // try to remove me later
        '@typescript-eslint/prefer-readonly-parameter-types': 'off', // not important in this context
        '@typescript-eslint/prefer-ts-expect-error': 'off', // try to remove me later
        'func-names': 'off', // try to remove me later
        'max-len': 'off',
        'promise/always-return': 'off', // try to remove me later
        'promise/catch-or-return': 'off', // try to remove me later
        'promise/prefer-await-to-then': 'off', // try to remove me later
        'unicorn/consistent-function-scoping': 'off', // annoying in mock
      },
    },
    {
      extends: [
        'plugin:tailwindcss/recommended',
        'plugin:unicorn/all',
        'hardcore',
        'hardcore/vue',
        '@nuxt/eslint-config',
      ],
      files: ['*.tsx'],
      rules: {
        '@stylistic/max-len': [
          'error',
          {
            code: 150,
            comments: 300,
          },
        ],
        '@stylistic/quotes': ['error', 'single', {avoidEscape: true}],
        '@stylistic/comma-dangle': ['error', 'always-multiline'], // better for git diffs
        '@stylistic/lines-around-comment': 'off', // style, useless
        '@stylistic/padding-line-between-statements': 'off', // style, useless
        '@stylistic/semi': ['error', 'always'],
        '@typescript-eslint/explicit-function-return-type': 'off', // we don't need this
        '@typescript-eslint/consistent-indexed-object-style': 'off', // annoying, convert Record<FieldsMappingKey, string> to { [key in FieldsMappingKey]: string }
        '@typescript-eslint/naming-convention': 'off', // re-enable me later :)
        '@typescript-eslint/no-misused-promises': 'off', // slow, but could be interesting
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off', // else we can't do : value === false
        'guard-for-in': 'off', // old rule that require myObject.hasOwnProperty which is deprecated
        'lines-around-comment': 'off', // style, useless
        'typescript-compat/compat': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/prefer-destructuring': 'off', // no super important
        'comma-dangle': ['error', 'always-multiline'],
        'compat/compat': 'off',
        curly: 'off', // up to you
        'eslint-comments/no-use': 'off',
        'etc/no-commented-out-code': 'off', // up to you
        'etc/no-deprecated': 'off',
        'etc/no-enum': 'off', // re-enable me later :)
        'etc/no-internal': 'off',
        'etc/no-misused-generics': 'off', // can be problematic
        'etc/prefer-interface': 'off', // up to you even if there is slight differences between interface & type
        'ext/lines-between-object-properties': 'off', // style, useless
        'id-length': [
          'error',
          {
            exceptions: ['t'],
            min: 2,
          },
        ],
        'import/default': 'off', // slow
        'import/extensions': 'off', // because we import('~/some-path/file.vue')
        'import/named': 'off', // slow
        'import/namespace': 'off', // slow
        'import/newline-after-import': 'off', // style, useless
        'import/no-cycle': 'off', // slow, handled by dependency-cruiser
        'import/no-deprecated': 'off', // slow
        'import/no-duplicates': 'off', // slow
        'import/no-extraneous-dependencies': 'off',
        'import/no-named-as-default-member': 'off', // slow
        'import/no-named-as-default': 'off', // slow
        'import/no-unresolved': 'off', // because we import('~/some-path/file.vue')
        'import/order': 'off', // slow and conflicts with vscode import sort
        'import/prefer-default-export': 'off', // slow
        'logical-assignment-operators': 'off', // weird syntax
        'multiline-comment-style': 'off', // style, useless
        'no-undef-init': 'off',
        'padding-line-between-statements': 'off',
        'prettier/prettier': 'off', // not needed because we use prettier extension
        'putout/putout': 'off',
        quotes: 'off', // conflicts with prettier
        'regexp/require-unicode-sets-regexp': 'off',
        semi: ['error', 'always'],
        'simple-import-sort/imports': 'off', // imports sort already handled by vscode
        'space-before-function-paren': 'off', // up to you
        'total-functions/no-unsafe-readonly-mutable-assignment': 'off', // see if this is interesting
        'unicorn/filename-case': [
          'error',
          {
            case: 'kebabCase',
          },
        ],
        'unicorn/no-keyword-prefix': [
          'error',
          {
            checkProperties: false,
          },
        ],
        'unicorn/no-unnecessary-polyfills': 'off', // slow, not sure if interesting
        'unicorn/prefer-string-replace-all': 'off', // we don't need this
        'unicorn/prefer-spread': 'off',
        'unicorn/prevent-abbreviations': [
          'error',
          {
            allowList: {
              args: true,
              pkg: true,
              props: true,
              str: true,
            },
          },
        ],
        'unicorn/switch-case-braces': 'off',
        '@typescript-eslint/no-magic-numbers': 'off', // viewed together, not interesting for all situations
        'arrow-parens': 'off', // conflicts with prettier
        'import/no-unused-modules': 'off', // fail
        'no-magic-numbers': 'off', // viewed together, not interesting for all situations
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                message: 'Please import types from #ui/types instead.',
                name: '@nuxt/ui/dist/runtime/types',
              },
            ],
          },
        ],
        'prefer-destructuring': 'off',
        'vue/html-indent': 'off', // conflicts with prettier
        'vue/max-attributes-per-line': 'off', // formatting, not important
        'vue/no-lone-template': 'off', // useful but slow
        'vue/no-setup-props-reactivity-loss': 'off', // see if this is interesting
        'vue/no-v-html': 'off', // slow, can be easily spotted on code review
        'vue/require-explicit-slots': 'off', // do we need it?
        'vue/singleline-html-element-content-newline': 'off', // formatting, not important
        'vue/static-class-names-order': 'off', // see if this is interesting
        'vue/v-on-handler-style': 'off', // remove me later :)
        'vuejs-accessibility/click-events-have-key-events': 'off', // remove me later :)
        'vuejs-accessibility/no-static-element-interactions': 'off', // remove me later :)
      },
    },
  ],
  root: true,
  settings: {
    tailwindcss: {
      whitelist: [String.raw`ct-[a-z\d-]+`],
    },
  },
};
