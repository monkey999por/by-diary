This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Packages

- Main Framework

  - Next.js@14.0.1

- Sub Framework
  - typescript@5
  - pathpida@0.22.0
  - tailwindcss@3.3.0

## Create develop Enveloiment

- require: install `node@20.9.0`.

1. install package

```sh
npm install
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

2. run localhost server

```bash
npm run dev
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result. 3. vscode setting

- plugins (require)
  - [pretter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Some scripts

### Code format

Format code with [Prettier](https://prettier.io/) when you run "save action" with vscode or run this command. The rule is defined by `.prettierrc` and `.prettierignore`.

```bash
npm run format
```

- `.prettierrc`: defines the format rule.
- `.prettierignore`: defines the file is ignore format.

### Code static analysis

1. check coding rule.

to use [ESlint](https://eslint.org/)
this checks source file in `src` directory. The rule is defined by `.eslintrc.json`.

```bash
npm run lint:fix
```

- `.eslintrc.json`: define setting(ex. rule, plugin) in eslint.

  2.Type check

to use [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html#handbook-content) with typescript compiler. the rule is defined by `tsconfig.json`.

```bash
npm run tsc
```

- `tsconfig.json`: setting in Typescript.

### Run Test

Run test with [jest](https://jestjs.io/ja/docs/api)

```bash
npm run test
```

## Checking code before `git commit`

Your source file that is staged by command `git add` is checked static
to use [lint-staged](https://github.com/lint-staged/lint-staged) and [husky](https://github.com/typicode/husky).
the target is defined in `.husky/pre-commit`.

- `.lintstagedrc.js`: setting lint-staged for Next.js

## (Memo) initial readme.md to use `create-next-app`

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
