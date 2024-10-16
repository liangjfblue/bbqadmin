import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
	{ files: ['**/*.{js,mjs,cjs,ts,vue}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/essential'],
	{ files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
	{
		name: 'custom-lint-config',
		files: ['*.ts'],
		plugins: {
			prettier: prettier
		},
		rules: {
			'no-useless-assignment': 'error',
			'no-unused-vars': 'error',
			'no-unused-imports': 'error',
			'no-empty-function': 'error',
			'no-empty-pattern': 'error',
			'no-extra-semi': 'error',
			'no-extra-boolean-cast': 'error',
			'no-extra-non-null-assertion': 'error',
			'no-inline-comments': 'error',
			'no-var': 'error',
			'no-const-assign': 'error',
			'no-this-before-super': 'error',
			'no-dupe-class-members': 'error',
			'no-duplicate-imports': 'error',
			'no-new-wrappers': 'error',
			'no-new-symbol': 'error',
			'no-unused-vars': 'warn',
			'no-undef': 'error',
			eqeqeq: 'error',
			indent: ['error', 2],
			quotes: ['error', 'single'],
			semi: ['error', 'always'],
			curly: 'error',
			'no-console': 'warn',
			'prefer-const': 'error',
			complexity: ['warn', { max: 10 }],
			'max-lines': ['warn', { max: 300 }]
		}
	},
	{
		ignores: ['node_modules', 'dist', 'public', '.nuxt']
	},
	eslintConfigPrettier
]
