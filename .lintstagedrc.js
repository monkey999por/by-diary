/**
 * @see https://nextjs.org/docs/app/building-your-application/configuring/eslint#lint-staged
 */
const path = require('path');

const buildNextlintCommand = filenames =>
  `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const buildEslintCommand = filenames =>
  `eslint src --fix ${filenames
    .map(f => path.relative(process.cwd(), f).replaceAll('\\', '/'))
    .join(' ')}`;

const buildPrettierCommand = filenames =>
  `prettier --write ${filenames
    .map(f => path.relative(process.cwd(), f).replaceAll('\\', '/'))
    .join(' ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildNextlintCommand],
  '**/src/**/*.{ts,tsx}': [
    buildEslintCommand,
    buildPrettierCommand,
    'jest ./src',
  ],
};
