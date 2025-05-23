import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
export default tseslint.config(
    { ignores: ['dist', 'pkg'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts, js}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        },
    }
)
