<div align="center">

<img alt="ESLint Plugin Evelyn icon" width="128" height="128" align="center" src=".github/icon.png"/>

# ESLint Plugin Evelyn

**ESLint plugin for my projects with my preferred code style**

[![npm version](https://badgen.net/npm/v/eslint-plugin-evelyn?icon=npm)](https://www.npmjs.com/package/eslint-plugin-evelyn)
[![check status](https://badgen.net/github/checks/evelynhathaway/eslint-plugin-evelyn/main?icon=github)](https://github.com/evelynhathaway/eslint-plugin-evelyn/actions)
[![license: MIT](https://badgen.net/badge/license/MIT/blue)](/LICENSE)

</div>

## Description

These are my boilerplate ESLint flat configs.

My code style is very opinionated, so I only use this package on my projects. However, others are welcome to use, copy, or fork this project.

## Installation

Save this project to your dev dependencies.

```bash
npm install --save-dev eslint-plugin-evelyn
```

If you are using an `--legacy-peer-deps`, you will have to install peer dependencies manually. See the
`peerDependencies` in [package.json](./package.json) for recommended dependency version ranges.

## Usage

Include as many configs as you'd like to use in your config. Extend them in the order that they should be applied, in
order of importance, lowest to highest.

### Configs Applied to All Files

**`eslint.config.js`**

```js
import eslintPluginEvelyn from "eslint-plugin-evelyn";

export default [
	...eslintPluginEvelyn.configs.base,
	...eslintPluginEvelyn.configs.node,
];
```

### Configs applied to a specific path

`tseslint.config` offers support for `extends`, which is similar can be used with `files` similarly to ESLint legacy config's
`overrides`.

**`eslint.config.js`**

```js
import eslintPluginEvelyn from "eslint-plugin-evelyn";
import tseslint from "typescript-eslint";

export default tseslint.config(
	...eslintPluginEvelyn.configs.base,
	{
		files: [
			"src/**/*.js",
		],
		extends: [
			...eslintPluginEvelyn.configs.node,
		],
	},
);
```

### ESM TypeScript Next.js React App Example

**`eslint.config.js`**

```js
import eslintPluginEvelyn from "eslint-plugin-evelyn";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Optionally add global ignore file patterns
	{
		ignores: [
			"my-optional-ignored-pattern",
		],
	},
	...eslintPluginEvelyn.configs.base,
	...eslintPluginEvelyn.configs.esm,
	...eslintPluginEvelyn.configs.react,
	...eslintPluginEvelyn.configs.next,
	...eslintPluginEvelyn.configs.typescript,
	...eslintPluginEvelyn.configs.jest,
	...eslintPluginEvelyn.configs.testingLibraryReact,
);
```

**`package.json`** (snippet)

Make sure to remove any references to old ESLint plugins or configs and replace the lint script with `eslint`.

```json
{
  "name": "my-app",
  "type": "module",
  "...": "...",
  "scripts": {
    "...": "...",
    "lint": "eslint"
  }
}
```

**`tsconfig.json`** (snippet)

Strict TypeScript config is recommended for type safety. Consider `allowImportingTsExtensions` or
`rewriteRelativeImportExtensions` for ESM.

```json
{
  "compilerOptions": {
    "strict": true,
    "allowImportingTsExtensions": true,
    "...": "..."
  }
  "...": "..."
}
```

## Linting

```bash
npm run lint
```

## Debugging

- Make sure you're using the local version of eslint using `npm run` or `npx eslint`
- Use the `--debug` ESLint CLI flag for determining things like the modules that get loaded
- Use the `--print-config` ESLint CLI flag for a minimal computed config

---

## Configs

- [base](./lib/configs/base.js)
- [esm](./lib/configs/esm.js)
- [jest](./lib/configs/jest.js)
- [next](./lib/configs/next.js)
- [node](./lib/configs/node.js)
- [react](./lib/configs/react.js)
- [testing-library](./lib/configs/testing-library.js)
- [testing-library-react](./lib/configs/testing-library-react.js)
- [typescript](./lib/configs/typescript.js)

---

## Semantic Versioning Policy

This plugin follows semantic versioning [a-la-ESLint](https://github.com/eslint/eslint#semantic-versioning-policy).

- Patch release (not intended to break your lint build)
    - A bug fix in a rule that results in ESLint reporting fewer or the same amount of errors
    - Improvements to documentation
    - Non-user-facing changes such as refactoring code
    - Re-releasing after a failed release
- Minor release (might break your lint build)
    - A new config or rule is added
    - A new non-default option is added to an existing rule
    - A bug fix in a rule that results in ESLint reporting more errors
    - An existing rule, config, or part of the public API is deprecated, but still runs/works
    - New capabilities to the public API are added
    - A config is updated in a way that results in ESLint fewer or the same amount of errors
        - The hypothetical removal of `semi` would be a good example as not enforcing it could create the potential to break your code
- Major release (likely to break your lint build)
    - A config or rule is removed
    - A config is updated in a way that results in ESLint reporting more errors
    - A newer version of ESLint, a plugin, or Node.js may be required
        - Any changes to the low end of any of the `peerDependencies` or the `engines`
    - A rule's default behavior is changed
    - Part of the public API is removed or changed in an incompatible way

## License

Copyright Evelyn Hathaway, [MIT License](/LICENSE)
