# eslint-plugin-evelyn

ESLint plugin for my projects with my preferred code style and bugfixes. My code style is very opinionated, so I will only use this package on my repos. But others are welcome to use, copy, or fork this project.

## Install

```bash
npm install --save-dev eslint-plugin-evelyn
```

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

---

## Configs

| Name       | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| auto       | Mono config that includes many configs and uses inferred paths for overrides |
| browser    | For the browser env                                                          |
| built      | Built files from Babel or TypeScript                                         |
| default    | My style and lint rules from ESLint                                          |
| jest       | Jest tests                                                                   |
| jsx        | JSX features                                                                 |
| mocha      | Mocha tests                                                                  |
| node       | Node.js env                                                                  |
| source     | Non-built files                                                              |
| typescript | TypeScript files                                                             |

## Rules

### ESLint Bug Fixes

I've needed some bugfixes that have had their PRs auto closed, so I include the ones I need here. This project has a very similar structure to ESLint core, so tests and rules are just about `copy + paste`'ed from my fork of ESLint.

| Documentation                                          | Pull Request                                                                                |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| [no-fallthrough](./docs/rules/fixes/no-fallthrough.md) | [Fix: Allow fallthrough comment in case block](https://github.com/eslint/eslint/pull/11016) |
