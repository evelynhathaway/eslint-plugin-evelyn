# eslint-plugin-evelyn

[![npm version](https://badgen.net/npm/v/eslint-plugin-evelyn?icon=npm)](https://www.npmjs.com/package/eslint-plugin-evelyn)
[![build status](https://badgen.net/travis/evelynhathaway/eslint-plugin-evelyn/master?icon=travis)](https://travis-ci.com/evelynhathaway/eslint-plugin-evelyn)
[![rules: 1](https://badgen.net/badge/rules/1/blue)](#rules)
[![configs: 11](https://badgen.net/badge/configs/11/blue)](#configs)
[![license](https://badgen.net/badge/license/MIT/blue)](/LICENSE)

*ESLint plugin for my projects with my preferred code style and bugfixes*

My code style is very opinionated, so I only use this package on my projects. However, others are welcome to use, copy, or fork this project.

## Install

```bash
npm install --save-dev eslint-plugin-evelyn
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

Requires eslint `>=6.0.0-alpha.2`.

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

<details>
    <summary>The previous method of extending while overriding</summary>

### Configs applied to a specific path (pre v1.0.0)

Before eslint `v6.0.0-alpha.2`, [a helper function](./lib/extend.js) was required to extend configs when not at the top level of the config. This also requires using `.eslintrc.js` to use `import`/`require`.

The helper module may be deprecated in a future minor version and removed in the major version thereafter, so using it is no longer recommended.

`.eslintrc.js`

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

</details>

## Testing

Any Mocha-compatible tests can be added, ESLint's rule tester works as well if you change the require statements to match [the public API](https://eslint.org/docs/developer-guide/nodejs-api#ruletester).

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

## Debugging

- Make sure you're using the local version of eslint using `npm run` or `npx eslint`
- Use the `--debug` ESLint CLI flag for determining things like the modules that get loaded
- Use the `--print-config` ESLint CLI flag for a minimal computed config

### Saving the entire computed config array

Run the default export from the `save-config.js` file from inside the config file to output to monkey-patch ESLint. This works on this project as well as any package that has eslint-plugin-evelyn `>=1.0.0` as a dependency.

`.eslintrc.js`

```js
require("eslint-plugin-evelyn/lib/save-config")();


// The rest of your config file
// [...]
```

This saves the config array that is usually partially outputted to the console during execution with the `--debug` flag.

```bash
$ npx eslint --debug
# [...]
eslint:cascading-config-array-factory Configuration was determined: ConfigArray [...]
```

---

## Configs

See the `peerDependencies` in [package.json](./package.json) for recommended dependency version ranges.

| Name                                      | Description                                                                  | Peer Dependencies                                                        |
| ----------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [auto](./lib/configs/auto.js)             | Mono config that includes many configs and uses inferred paths for overrides | eslint-plugin-node, plus the dependencies sub-configs with matched globs |
| [browser](./lib/configs/browser.js)       | For the browser env                                                          |                                                                          |
| [built](./lib/configs/built.js)           | Built files from Babel or TypeScript                                         | eslint-plugin-node                                                       |
| [default](./lib/configs/default.js)       | My style and lint rules from ESLint                                          |                                                                          |
| [jest](./lib/configs/jest.js)             | Jest tests                                                                   | eslint-plugin-node                                                       |
| [jsx](./lib/configs/jsx.js)               | JSX features                                                                 |                                                                          |
| [mocha](./lib/configs/mocha.js)           | Mocha tests                                                                  | eslint-plugin-node, eslint-plugin-mocha                                  |
| [node](./lib/configs/node.js)             | Node.js env                                                                  | eslint-plugin-node                                                       |
| [react](./lib/configs/react.js)           | React, browser env, JSX                                                      | eslint-plugin-react                                                      |
| [source](./lib/configs/source.js)         | Non-built files                                                              | eslint-plugin-node                                                       |
| [typescript](./lib/configs/typescript.js) | TypeScript files                                                             | @typescript-eslint/eslint-plugin, @typescript-eslint/parser              |

## Rules

### ESLint Bug Fixes

I've needed some bugfixes that have had their PRs auto closed, so I include the ones I need here. This project has a very similar structure to ESLint core, so tests and rules are just about `copy + paste`'ed from my fork of ESLint.

| Documentation                                          | Pull Request                                                                                |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| [no-fallthrough](./docs/rules/fixes/no-fallthrough.md) | [Fix: Allow fallthrough comment in case block](https://github.com/eslint/eslint/pull/11016) |

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
- Major release (likely to break your lint build)
    - A config or rule is removed
    - A config is updated in a way that results in ESLint fewer or the same amount of errors
        - The hypothetical removal of `semi` would be a good example as not enforcing it could create the potential to break your code
    - A config is updated in a way that results in ESLint reporting more errors
    - A newer version of ESLint, a plugin, or Node.js may be required
        - Any changes to the low end of any of the `peerDependencies` or the `engines`
    - A rule's default behavior is changed
    - Part of the public API is removed or changed in an incompatible way
