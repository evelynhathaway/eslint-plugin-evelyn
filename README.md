# eslint-plugin-evelyn

[![npm version](https://badgen.net/npm/v/eslint-plugin-evelyn?icon=npm)](https://www.npmjs.com/package/eslint-plugin-evelyn)
[![build status](https://badgen.net/travis/evelynhathaway/eslint-plugin-evelyn/master?icon=travis)](https://travis-ci.com/evelynhathaway/eslint-plugin-evelyn)
[![rules: 1](https://badgen.net/badge/rules/1/blue)](#rules)
[![license](https://badgen.net/badge/license/MIT/blue)](/LICENSE)

ESLint plugin for my projects with my preferred code style and bugfixes. My code style is very opinionated, so I will only use this package on my repos. But others are welcome to use, copy, or fork this project.

## Install

```bash
npm install --save-dev eslint-plugin-evelyn
```

**Note: if you use a TypeScript config, you will have to install the peerDependencies for the TypeScript parser and plugin.** This isn't required if you use [auto](./lib/configs/auto.js) because ESLint will only resolve the TypeScript modules once a file matches the glob pattern defined for TypeScript files.

## Usage

Include as many configs as you'd like to use in your config. Currently [using `extends` in `overrides` is being worked on](https://github.com/eslint/eslint/issues/8813#issuecomment-456467297), so you will have to use a `.eslintrc.js` and `import`/`require` it into your config if you would like to use extending for just some files using the same root config.

### `.eslintrc` with all files being Node.js modules

```json
{
    "plugins": [
        "evelyn"
    ],
    "extends": [
        "plugin:evelyn/default",
        "plugin:evelyn/node"
    ]
}
```

### `.eslintrc.js` with overrides (pre native extendable overrides)

```js
const extend = require("eslint-plugin-evelyn/lib/extend");

module.exports = {
    "plugins": [
        "evelyn"
    ],
    "extends": [
        "plugin:evelyn/default"
    ],
    "overrides": [
        // All src files use node and source configs
        extend(
            "node",
            "source",
            {
                "files": [
                    "src/**/*.js",
                ]
            }
        )
    ]
};
```

## Testing

Any Mocha-compatiable tests can be added, ESLint's rule tester works as well if you change the require statements.

```bash
npm run test
```

## Linting

This plugin uses itself to lint so we must make sure the working copy of `eslint-plugin-evelyn` is in `node_modules`. Only ESLint should require it from there.

```bash
# Install dependencies
npm install
# Symlink itself into node_modules for ESLint
npm run link

# Run lint!
npm run lint
```

---

## Configs

| Name                                      | Description                                                                  |
| ----------------------------------------- | ---------------------------------------------------------------------------- |
| [auto](./lib/configs/auto.js)             | Mono config that includes many configs and uses inferred paths for overrides |
| [browser](./lib/configs/browser.js)       | For the browser env                                                          |
| [built](./lib/configs/built.js)           | Built files from Babel or TypeScript                                         |
| [default](./lib/configs/default.js)       | My style and lint rules from ESLint                                          |
| [jest](./lib/configs/jest.js)             | Jest tests                                                                   |
| [jsx](./lib/configs/jsx.js)               | JSX features                                                                 |
| [mocha](./lib/configs/mocha.js)           | Mocha tests                                                                  |
| [node](./lib/configs/node.js)             | Node.js env                                                                  |
| [source](./lib/configs/source.js)         | Non-built files                                                              |
| [typescript](./lib/configs/typescript.js) | TypeScript files                                                             |

## Rules

### ESLint Bug Fixes

I've needed some bugfixes that have had their PRs auto closed, so I include the ones I need here. This project has a very similar structure to ESLint core, so tests and rules are just about `copy + paste`'ed from my fork of ESLint.

| Documentation                                          | Pull Request                                                                                |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| [no-fallthrough](./docs/rules/fixes/no-fallthrough.md) | [Fix: Allow fallthrough comment in case block](https://github.com/eslint/eslint/pull/11016) |
