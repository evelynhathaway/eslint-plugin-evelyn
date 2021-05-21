<div align="center">

<img alt="ESLint Plugin Evelyn icon" width="128" height="128" align="center" src=".github/icon.png"/>

# ESLint Plugin Evelyn

**ESLint plugin for my projects with my preferred code style and bugfixes**

[![npm version](https://badgen.net/npm/v/eslint-plugin-evelyn?icon=npm)](https://www.npmjs.com/package/eslint-plugin-evelyn)
[![check status](https://badgen.net/github/checks/evelynhathaway/eslint-plugin-evelyn/main?icon=github)](https://github.com/evelynhathaway/eslint-plugin-evelyn/actions)
[![rules: 1](https://badgen.net/badge/rules/1/blue)](#rules)
[![configs: 12](https://badgen.net/badge/configs/12/blue)](#configs)
[![license: MIT](https://badgen.net/badge/license/MIT/blue)](/LICENSE)

</div>

## Description

These are my configs, bugfixes, and code related to maintaining ESLint scripts.

My code style is very opinionated, so I only use this package on my projects. However, others are welcome to use, copy, or fork this project.

## Installation

```bash
# Save ESLint, Import, Unicorn, and this plugin to devDependencies
npm install --save-dev eslint eslint-plugin-import eslint-plugin-unicorn eslint-plugin-regexp eslint-plugin-evelyn

# OR

# Save all this plugin and ALL peerDependencies to devDependencies
npx install-peerdeps --save-dev eslint-config-evelyn
```

### Peer Dependencies

npm warns about any missing peer dependencies when installing this plugin.

```bash
npm WARN eslint-plugin-evelyn@x.x.x requires a peer of eslint-plugin-xxxxx@^x.x.x but none is installed. You must install peer dependencies yourself.
```

If you are using and loading a [config](#configs) that requires one of the mentioned dependencies, add the plugin as a dev dependency that satisfies the specified version range. Otherwise, you can safely ignore these messages.

ESLint always resolves and loads plugins when the configs are extended in the top-level config, but only resolves plugins in an override once a file matches its glob pattern.

## Usage

Include as many configs as you'd like to use in your config. Extend them in the order that they should be applied, in order of importance, lowest to highest.

### Configs Applied to All Files

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
                "plugin:evelyn/node"
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

### Saving the Entire Computed Config Array

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

| Name                                                            | Peer Dependencies                                                                             |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [babel](./lib/configs/babel.js)                                 | @babel/eslint-parser                                                                          |
| [default](./lib/configs/default.js)                             | eslint-plugin-unicorn, eslint-plugin-import, eslint-plugin-regexp                             |
| [esm](./lib/configs/esm.js)                                     | eslint-plugin-unicorn, eslint-plugin-import                                                   |
| [jest](./lib/configs/jest.js)                                   | eslint-plugin-node, eslint-plugin-jest                                                        |
| [jsx](./lib/configs/jsx.js)                                     | eslint-plugin-jsx-a11y                                                                        |
| [mocha](./lib/configs/mocha.js)                                 | eslint-plugin-node, eslint-plugin-mocha                                                       |
| [node](./lib/configs/node.js)                                   | eslint-plugin-node                                                                            |
| [react](./lib/configs/react.js)                                 | eslint-plugin-react, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, eslint-plugin-import  |
| [testing-library](./lib/configs/testing-library.js)             | eslint-plugin-testing-library                                                                 |
| [testing-library-react](./lib/configs/testing-library-react.js) | eslint-plugin-testing-library                                                                 |
| [testing-library-vue](./lib/configs/testing-library-vue.js)     | eslint-plugin-testing-library                                                                 |
| [typescript](./lib/configs/typescript.js)                       | @typescript-eslint/eslint-plugin, @typescript-eslint/parser, typescript, eslint-plugin-import |
| [vue](./lib/configs/vue.js)                                     | @babel/eslint-parser, eslint-plugin-vue                                                       |

## Rules

### ESLint Bug Fixes

I've needed some bugfixes that have had their PRs auto closed, so I include the ones I need here. This project has a very similar structure to ESLint core, so tests and rules are just about `copy + paste`'ed from my fork of ESLint.

| Documentation                                          | Pull Request                                                                                | Fixed Issues                                                                                                                                                                                                                    |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [no-fallthrough](./docs/rules/fixes/no-fallthrough.md) | [Fix: Allow fallthrough comment in case block](https://github.com/eslint/eslint/pull/11016) | [`#4652`](https://github.com/eslint/eslint/issues/4652) [`#7889`](https://github.com/eslint/eslint/issues/7889) [`#9080`](https://github.com/eslint/eslint/issues/9080) [`#9559`](https://github.com/eslint/eslint/issues/9559) |

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
