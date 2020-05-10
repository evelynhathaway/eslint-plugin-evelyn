<div align="center">

<img alt="ESLint Plugin Evelyn icon" width="128" height="128" align="center" src=".github/icon.png"/>

# ESLint Plugin Evelyn

**ESLint plugin for my projects with my preferred code style and bugfixes**

[![npm version](https://badgen.net/npm/v/eslint-plugin-evelyn?icon=npm)](https://www.npmjs.com/package/eslint-plugin-evelyn)
[![build status](https://badgen.net/travis/evelynhathaway/eslint-plugin-evelyn/master?icon=travis)](https://travis-ci.com/evelynhathaway/eslint-plugin-evelyn)
[![rules: 1](https://badgen.net/badge/rules/1/blue)](#rules)
[![configs: 15](https://badgen.net/badge/configs/15/blue)](#configs)
[![license: MIT](https://badgen.net/badge/license/MIT/blue)](/LICENSE)

</div>

## Description

These are my configs, bugfixes, and code related to maintaining ESLint scripts.

My code style is very opinionated, so I only use this package on my projects. However, others are welcome to use, copy, or fork this project.

## Installation

```bash
# Save ESLint, Import, Unicorn, and this plugin to devDependencies
npm i -D eslint eslint-plugin-import eslint-plugin-unicorn eslint-plugin-evelyn
```

### Peer dependencies

npm warns about any missing peer dependencies when installing this plugin.

```bash
npm WARN eslint-plugin-evelyn@x.x.x requires a peer of eslint-plugin-xxxxx@^x.x.x but none is installed. You must install peer dependencies yourself.
```

If you are using and loading a [config](#configs) that requires one of the mentioned dependencies, add the plugin as a dev dependency that satisfies the specified version range. Otherwise, you can safely ignore these messages.

ESLint always resolves and loads plugins when the configs are extended in the top-level config, but only resolves plugins in an override once a file matches its glob pattern.

## Usage

Include as many configs as you'd like to use in your config. Extend them in the order that they should be applied, in order of importance, lowest to highest.

### Configs applied to all files

`.eslintrc`

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

### Configs applied to a specific path

Requires eslint `>=6.0.0`.

`.eslintrc`

```json
{
    "plugins": [
        "evelyn"
    ],
    "extends": [
        "plugin:evelyn/default"
    ],
    "overrides": [
        {
            "files": [
                "src/**/*.js"
            ],
            "extends": [
                "plugin:evelyn/node",
                "plugin:evelyn/source"
            ]
        }
    ]
};
```

## Testing

Any Mocha-compatible tests can be added.

```bash
# Install dependencies
npm install
# Symlink itself into node_modules for ESLint
# As of eslint-plugin-evelyn v3.0.0, this is done fully automatically
npm run link

# Run all tests!
npm run test
```

### Config Tests

Non-exhaustive tests to make sure important rules in configs do not change.

You can use @Agoric's [config tester](https://github.com/Agoric/eslint-config-rule-tester), which has a similar API to ESLint's rule tester.

### Rule Tests

You can use ESLint's rule tester if you change the require statements to match [the public API](https://eslint.org/docs/developer-guide/nodejs-api#ruletester).

### Final Config Array Tests

[final-config-array.eslintrc.js](./test/final-config-array.eslintrc.js) tests to make sure all modules and configs load properly. Without this test, if a parser or plugin doesn't load and is never used to lint a file, ESLint won't report the error.

## Linting

This plugin uses itself to lint so we must make sure the working copy of `eslint-plugin-evelyn` is in `node_modules`. Only ESLint should require it from there.

```bash
# Install dependencies
npm install
# Symlink itself into node_modules for ESLint
# As of eslint-plugin-evelyn v3.0.0, this is done fully automatically
npm run link

# Run lint!
npm run lint
```

## Debugging

- Make sure you're using the local version of eslint using `npm run` or `npx eslint`
- Use the `--debug` ESLint CLI flag for determining things like the modules that get loaded
- Use the `--print-config` ESLint CLI flag for a minimal computed config

### Saving the entire computed config array

Run the default export from the `save-config.js` file from inside the config file to output to monkey-patch ESLint. This works on this project as well as any package that has eslint-plugin-evelyn `>=1.0.0` as a dependency.

`.eslintrc.js`

```js
require("eslint-plugin-evelyn/lib/util/save-config")();


// The rest of your config file
// [...]
```

This saves the config array that is usually partially outputted to the console during execution with the `--debug` flag.

```bash
$ npx eslint --debug
# [...]
eslint:cascading-config-array-factory Configuration was determined: ConfigArray [...]
```

## Recording Changes to the Final Config Array

[record-changes.eslintrc.js](./changes/record-changes.eslintrc.js) saves the final config array to [record-changes.json](./changes/record-changes.json) with paths removed.

The script is used to track the changes to the final array over time using the pre-commit git hook. This is helpful in reviewing pull requests.

---

## Configs

See the `peerDependencies` in [package.json](./package.json) for recommended dependency version ranges.

| Name                                            | Description                                                       | Peer Dependencies                                                                             |
| ----------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [babel](./lib/configs/babel.js)                 | For files transpiled by Babel                                     | babel-eslint                                                                                  |
| [browser](./lib/configs/browser.js)             | For the browser env                                               |                                                                                               |
| [built](./lib/configs/built.js)                 | Built files from Babel or TypeScript                              | eslint-plugin-node                                                                            |
| [default](./lib/configs/default.js)             | My style and lint rules from ESLint                               | eslint-plugin-unicorn, eslint-plugin-import                                                   |
| [extensions](./lib/configs/extensions.js)       | Enforce ESLint linting all extensions compatible with this plugin |                                                                                               |
| [jest](./lib/configs/jest.js)                   | Jest tests                                                        | eslint-plugin-node                                                                            |
| [json-comments](./lib/configs/json-comments.js) | JSON files with comments                                          | eslint-plugin-json                                                                            |
| [json](./lib/configs/json.js)                   | JSON files                                                        | eslint-plugin-json                                                                            |
| [jsx](./lib/configs/jsx.js)                     | JSX features                                                      |                                                                                               |
| [mocha](./lib/configs/mocha.js)                 | Mocha tests                                                       | eslint-plugin-node, eslint-plugin-mocha                                                       |
| [node](./lib/configs/node.js)                   | Node.js env                                                       | eslint-plugin-node                                                                            |
| [react](./lib/configs/react.js)                 | React.js, browser env, JSX                                        | eslint-plugin-react, eslint-plugin-unicorn                                                    |
| [source](./lib/configs/source.js)               | Non-built files                                                   | eslint-plugin-node                                                                            |
| [typescript](./lib/configs/typescript.js)       | TypeScript files                                                  | @typescript-eslint/eslint-plugin, @typescript-eslint/parser, typescript, eslint-plugin-import |
| [vue](./lib/configs/vue.js)                     | Vue.js files                                                      | @typescript-eslint/eslint-plugin, @typescript-eslint/parser, typescript                       |

## Rules

### ESLint Bug Fixes

I've needed some bugfixes that have had their PRs auto closed, so I include the ones I need here. This project has a very similar structure to ESLint core, so tests and rules are just about `copy + paste`'ed from my fork of ESLint.

| Documentation                                          | Pull Request                                                                                |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| [no-fallthrough](./docs/rules/fixes/no-fallthrough.md) | [Fix: Allow fallthrough comment in case block](https://github.com/eslint/eslint/pull/11016) |

---

## Semantic versioning policy

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
- Major release (likely to break your lint build)
    - A config or rule is removed
    - A config is updated in a way that results in ESLint fewer or the same amount of errors
        - The hypothetical removal of `semi` would be a good example as not enforcing it could create the potential to break your code
    - A config is updated in a way that results in ESLint reporting more errors
    - A newer version of ESLint, a plugin, or Node.js may be required
        - Any changes to the low end of any of the `peerDependencies` or the `engines`
    - A rule's default behavior is changed
    - Part of the public API is removed or changed in an incompatible way

## License

Copyright Evelyn Hathaway, [MIT License](/LICENSE)
