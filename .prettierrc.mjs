/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  arrowParens: 'always',
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  bracketSpacing: true,
  semi: false,
  trailingComma: 'none',
  printWidth: 128,
  proseWrap: 'never',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
