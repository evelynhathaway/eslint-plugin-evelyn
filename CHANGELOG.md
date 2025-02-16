# Changelog

## v10.0.1

**[`v10.0.0...v10.0.1`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v10.0.0...v10.0.1)** - **2025-02-16**

### 🐛 Fix

- Correctly use ESLint global ignore patterns [`ff32c84`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/ff32c84)

## v10.0.0

**[`v9.0.0...v10.0.0`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v9.0.0...v10.0.0)** - **2025-02-16**

### 💥 Breaking

- Upgrade to ESLint v9, flat config, bump peerDependencies, use eslint-stylistic rules, remove babel; mocha; and jsx configs, add next config, remove record-changes, refine lint rule options, require Node v20+ [`a5af3a5`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/a5af3a5)

### 🧹 Internal

- Downgrade semantic-release to a version with a commit-analyzer version compatible with conventional-changelog-evelyn [`a2d6828`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/a2d6828)

## v9.0.0

**[`v8.1.0...v9.0.0`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v8.1.0...v9.0.0)** - **2023-05-31**

### 💥 Breaking

- Update peer deps, node range, improve formatting rules and their TypeScript support [`198a7d9`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/198a7d9)

### 🧹 Internal

- Use Node.js v18 in CI [`91277eb`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/91277eb)

## v8.1.0

**[`v8.0.1...v8.1.0`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v8.0.1...v8.1.0)** - **2022-08-21**

### ⚡ Improvement

- Disable no-unnecessary-type-constraint for TSX files [`2b7a7fa`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/2b7a7fa)

## v8.0.1

**[`v8.0.0...v8.0.1`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v8.0.0...v8.0.1)** - **2022-08-21**

### 📄 Documentation

- Add TypeScript import resolve to documented dependencies [`6ca14e5`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/6ca14e5)

## v8.0.0

**[`v7.0.0...v8.0.0`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v7.0.0...v8.0.0)** - **2022-08-21**

### 💥 Breaking

- Lint .mts and .cts files [`fe2f22a`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/fe2f22a)
- Reenable no-unresolved for TypeScript ESM, disable requiring TS extensions in imports [`04bc69a`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/04bc69a)

### ⚡ Improvement

- Bump parser options to ES2022 [`bb9a6c9`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/bb9a6c9)

### 🐛 Fix

- Add missing peer dependency for TypeScript import resolver [`ac10db0`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/ac10db0)

### 🧹 Internal

- Explicitly tell Dependabot to widen versions, simplify CI caching [`893978d`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/893978d)
- Switch from ignore to allow in dependabot config [`a074697`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/a074697)

## v7.0.0

**[`v6.2.1...v7.0.0`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v6.2.1...v7.0.0)** - **2022-07-25**

### 💥 Breaking

- Remove no-fallthrough rule in favor of native version per [#108](https://github.com/evelynhathaway/eslint-plugin-evelyn/issues/108) [`96af5ed`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/96af5ed)
- Remove Vue configs, update peers, improve rulesets [`e9a8705`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/e9a8705)

### ⚡ Improvement

- Install peers by default in npm v7 and above [`312c4a0`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/312c4a0)

### 📦 Package

- **dev:** Bump @babel/eslint-parser from 7.14.3 to 7.14.4 [`0c3151f`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/0c3151f)
- **dev:** Bump @babel/eslint-parser from 7.14.4 to 7.14.5 [`563e45e`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/563e45e)
- **dev:** Bump @babel/eslint-parser from 7.14.5 to 7.14.7 [`4560f36`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/4560f36)
- **dev:** Bump @babel/eslint-parser from 7.14.7 to 7.14.9 [`c436cfa`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/c436cfa)
- **dev:** Bump @babel/eslint-parser from 7.14.9 to 7.15.0 [`0b88840`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/0b88840)
- **dev:** Bump @babel/eslint-parser from 7.15.0 to 7.15.4 [`9fc63f4`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/9fc63f4)
- **dev:** Bump @semantic-release/git from 9.0.0 to 9.0.1 [`8c51077`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/8c51077)
- **dev:** Bump @typescript-eslint/eslint-plugin [`0900366`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/0900366)
- **dev:** Bump @typescript-eslint/eslint-plugin [`6fad5d2`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/6fad5d2)
- **dev:** Bump @typescript-eslint/eslint-plugin [`b5eb260`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/b5eb260)
- **dev:** Bump @typescript-eslint/eslint-plugin [`49687f0`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/49687f0)
- **dev:** Bump @typescript-eslint/eslint-plugin [`5be5b7f`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/5be5b7f)
- **dev:** Bump @typescript-eslint/eslint-plugin [`7505248`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/7505248)
- **dev:** Bump @typescript-eslint/eslint-plugin [`1fcb097`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/1fcb097)
- **dev:** Bump @typescript-eslint/eslint-plugin [`ff22f92`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/ff22f92)
- **dev:** Bump @typescript-eslint/eslint-plugin [`49aecca`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/49aecca)
- **dev:** Bump @typescript-eslint/eslint-plugin [`195c44d`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/195c44d)
- **dev:** Bump @typescript-eslint/eslint-plugin [`d14930a`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/d14930a)
- **dev:** Bump @typescript-eslint/parser from 4.25.0 to 4.26.0 [`a2423dc`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/a2423dc)
- **dev:** Bump @typescript-eslint/parser from 4.26.0 to 4.26.1 [`8c34856`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/8c34856)
- **dev:** Bump @typescript-eslint/parser from 4.26.1 to 4.28.4 [`0f4483f`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/0f4483f)
- **dev:** Bump @typescript-eslint/parser from 4.28.4 to 4.28.5 [`3a0aaae`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/3a0aaae)
- **dev:** Bump @typescript-eslint/parser from 4.28.5 to 4.29.0 [`58fecdf`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/58fecdf)
- **dev:** Bump @typescript-eslint/parser from 4.29.0 to 4.29.1 [`8a0151a`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/8a0151a)
- **dev:** Bump @typescript-eslint/parser from 4.29.1 to 4.29.2 [`ef8d1e8`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/ef8d1e8)
- **dev:** Bump @typescript-eslint/parser from 4.29.2 to 4.29.3 [`cb97d08`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/cb97d08)
- **dev:** Bump @typescript-eslint/parser from 4.29.3 to 4.31.0 [`9d38f66`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/9d38f66)
- **dev:** Bump @typescript-eslint/parser from 4.31.0 to 4.31.1 [`00efb65`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/00efb65)
- **dev:** Bump chalk from 4.1.1 to 4.1.2 [`f7a1075`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/f7a1075)
- **dev:** Bump commitlint from 12.1.4 to 13.1.0 [`7e77e98`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/7e77e98)
- **dev:** Bump eslint from 7.27.0 to 7.28.0 [`2f7c847`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/2f7c847)
- **dev:** Bump eslint from 7.28.0 to 7.31.0 [`d1b0086`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/d1b0086)
- **dev:** Bump eslint from 7.31.0 to 7.32.0 [`c9ebac3`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/c9ebac3)
- **dev:** Bump eslint-plugin-import from 2.23.3 to 2.23.4 [`ec757ae`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/ec757ae)
- **dev:** Bump eslint-plugin-import from 2.23.4 to 2.24.0 [`abae267`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/abae267)
- **dev:** Bump eslint-plugin-import from 2.24.0 to 2.24.1 [`94012ca`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/94012ca)
- **dev:** Bump eslint-plugin-import from 2.24.1 to 2.24.2 [`920c0d6`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/920c0d6)
- **dev:** Bump eslint-plugin-jest from 24.3.6 to 24.4.0 [`f4cac59`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/f4cac59)
- **dev:** Bump eslint-plugin-react from 7.23.2 to 7.24.0 [`7013436`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/7013436)
- **dev:** Bump eslint-plugin-react from 7.24.0 to 7.25.1 [`732f480`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/732f480)
- **dev:** Bump eslint-plugin-regexp from 0.11.0 to 0.12.1 [`64ec941`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/64ec941)
- **dev:** Bump eslint-plugin-regexp from 0.12.1 to 0.13.2 [`977e757`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/977e757)
- **dev:** Bump eslint-plugin-testing-library from 4.10.1 to 4.11.0 [`50554d7`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/50554d7)
- **dev:** Bump eslint-plugin-testing-library from 4.11.0 to 4.12.0 [`aff26a5`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/aff26a5)
- **dev:** Bump eslint-plugin-testing-library from 4.12.0 to 4.12.1 [`41cf0eb`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/41cf0eb)
- **dev:** Bump eslint-plugin-testing-library from 4.12.1 to 4.12.2 [`6923733`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/6923733)
- **dev:** Bump eslint-plugin-testing-library from 4.6.0 to 4.10.1 [`8254f07`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/8254f07)
- **dev:** Bump eslint-plugin-vue from 7.10.0 to 7.11.0 [`55ddcec`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/55ddcec)
- **dev:** Bump eslint-plugin-vue from 7.11.0 to 7.14.0 [`eb52727`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/eb52727)
- **dev:** Bump eslint-plugin-vue from 7.14.0 to 7.15.0 [`f1a31fd`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/f1a31fd)
- **dev:** Bump eslint-plugin-vue from 7.15.0 to 7.15.1 [`f8c11f8`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/f8c11f8)
- **dev:** Bump eslint-plugin-vue from 7.15.1 to 7.16.0 [`61a165b`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/61a165b)
- **dev:** Bump eslint-plugin-vue from 7.16.0 to 7.17.0 [`25f67f7`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/25f67f7)
- **dev:** Bump eslint-plugin-vue from 7.9.0 to 7.10.0 [`429c2c7`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/429c2c7)
- **dev:** Bump lint-staged from 11.0.0 to 11.1.1 [`410a035`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/410a035)
- **dev:** Bump lint-staged from 11.1.1 to 11.1.2 [`a15b80c`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/a15b80c)
- **dev:** Bump mocha from 8.4.0 to 9.0.0 [`a4fef64`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/a4fef64)
- **dev:** Bump mocha from 9.0.0 to 9.0.3 [`0631b2a`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/0631b2a)
- **dev:** Bump mocha from 9.0.3 to 9.1.0 [`7e37658`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/7e37658)
- **dev:** Bump mocha from 9.1.0 to 9.1.1 [`aa2d7f8`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/aa2d7f8)
- **dev:** Bump semantic-release from 17.4.3 to 17.4.4 [`6248357`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/6248357)
- **dev:** Bump semantic-release from 17.4.4 to 17.4.5 [`bb14769`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/bb14769)
- **dev:** Bump semantic-release from 17.4.5 to 17.4.6 [`33d54f1`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/33d54f1)
- **dev:** Bump semantic-release from 17.4.6 to 17.4.7 [`3ce603d`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/3ce603d)
- **dev:** Bump sort-package-json from 1.50.0 to 1.51.0 [`fa911ef`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/fa911ef)
- **dev:** Bump typescript from 4.3.2 to 4.3.5 [`2b0aa16`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/2b0aa16)
- **dev:** Bump typescript from 4.3.5 to 4.4.2 [`434cccf`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/434cccf)
- **dev:** Bump typescript from 4.4.2 to 4.4.3 [`8c08350`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/8c08350)

### 🧹 Internal

- Add missing lines from the development additions [`9a8337a`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/9a8337a)
- Update configurations for dependabot, git hooks [`08c9059`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/08c9059)

## v6.2.1

**[`v6.2.0...v6.2.1`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v6.2.0...v6.2.1)** - **2021-05-27**

### 📦 Package

- **dev:** Bump @typescript-eslint/eslint-plugin [`5499556`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/5499556)
- **dev:** Bump @typescript-eslint/parser from 4.24.0 to 4.25.0 [`d515bf9`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/d515bf9)
- **dev:** Bump conventional-changelog-evelyn from 1.3.0 to 1.3.1 [`47b3f1a`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/47b3f1a)
- **dev:** Bump eslint-plugin-mocha from 8.1.0 to 8.2.0 [`5af2e46`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/5af2e46)
- **dev:** Bump eslint-plugin-mocha from 8.2.0 to 9.0.0 [`1155422`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/1155422)
- **dev:** Bump typescript from 4.2.4 to 4.3.2 [`f7237c3`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/f7237c3)
- **user:** Expand range for npm peer dependencies, upgrade dev [`91d9545`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/91d9545)

## v6.2.0

**[`v6.1.0...v6.2.0`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v6.1.0...v6.2.0)** - **2021-05-25**

### ⚡ Improvement

- Remove node from testing configs that have node env [`3316a00`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/3316a00)

### Other

- **dev:** Bump eslint from 7.26.0 to 7.27.0 [`9025c49`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/9025c49)
- **dev:** Bump eslint-plugin-import from 2.23.2 to 2.23.3 [`48a3257`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/48a3257)
- **dev:** Bump eslint-plugin-testing-library from 4.5.0 to 4.6.0 [`0417fe4`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/0417fe4)

## v6.1.0

**[`v6.0.2...v6.1.0`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v6.0.2...v6.1.0)** - **2021-05-24**

### ⚡ Improvement

- Allowed abbreviations list, removed prop-types [`02a5b27`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/02a5b27)

## v6.0.2

**[`v6.0.1...v6.0.2`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v6.0.1...v6.0.2)** - **2021-05-21**

### 🐛 Fix

- **default:** Remove no-array-callback-reference [`8f1e043`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/8f1e043)

## v6.0.1

**[`v6.0.0...v6.0.1`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v6.0.0...v6.0.1)** - **2021-05-21**

### 🐛 Fix

- **esm:** Better glob for cjs overrides [`73f8b07`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/73f8b07)

## v6.0.0

**[`v5.0.5...v6.0.0`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v5.0.5...v6.0.0)** - **2021-05-21**

### 💥 Breaking

- Simplify configs into default, remove JSON and markdown [`290bccf`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/290bccf)

### ⚡ Improvement

- Add rules to ESM and export new config [`8d6e97b`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/8d6e97b)
- Only add TypeScript config to ts and tsx files [`84c6d58`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/84c6d58)

### 🐛 Fix

- Remove prefer ESM from cjs files [`981d3e7`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/981d3e7)

### Other

- **dev:** Bump eslint-plugin-testing-library from 4.4.0 to 4.5.0 [`dcb796d`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/dcb796d)

## v6.0.0-alpha.4

**[`v6.0.0-alpha.3...v6.0.0-alpha.4`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v6.0.0-alpha.3...v6.0.0-alpha.4)** - **2021-05-21**

### 🐛 Fix

- Remove prefer ESM from cjs files [`981d3e7`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/981d3e7)

## v6.0.0-alpha.3

**[`v6.0.0-alpha.2...v6.0.0-alpha.3`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v6.0.0-alpha.2...v6.0.0-alpha.3)** - **2021-05-21**

### ⚡ Improvement

- Only add TypeScript config to ts and tsx files [`84c6d58`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/84c6d58)

## v6.0.0-alpha.2

**[`v6.0.0-alpha.1...v6.0.0-alpha.2`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v6.0.0-alpha.1...v6.0.0-alpha.2)** - **2021-05-21**

### ⚡ Improvement

- Add rules to ESM and export new config [`8d6e97b`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/8d6e97b)

## v6.0.0-alpha.1

**[`v5.0.5...v6.0.0-alpha.1`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v5.0.5...v6.0.0-alpha.1)** - **2021-05-21**

### 💥 Breaking

- Simplify configs into default, remove JSON and markdown [`290bccf`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/290bccf)

### Other

- **dev:** Bump eslint-plugin-testing-library from 4.4.0 to 4.5.0 [`dcb796d`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/dcb796d)

## v5.0.5

**[`v5.0.4...v5.0.5`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v5.0.4...v5.0.5)** - **2021-05-18**

### 🐛 Fix

- Update unicorn/no-reduce override [`fa160f2`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/fa160f2)

### Other

- **dev:** npm update [`71dee94`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/71dee94)

## v5.0.4

**[`v5.0.3...v5.0.4`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v5.0.3...v5.0.4)** - **2021-05-18**

### 📦 Package

- **npm:** Bump @babel/eslint-parser from 7.14.2 to 7.14.3 [`d088b7d`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/d088b7d)
- **npm:** Bump conventional-changelog-evelyn from 1.2.2 to 1.2.3 [`4f2819f`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/4f2819f)

## v5.0.3

**[`v5.0.2...v5.0.3`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v5.0.2...v5.0.3)** - **2021-05-17**

### 📄 Documentation

- **readme:** Update badges [`dd6c559`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/dd6c559)

## v5.0.2

**[`v5.0.1...v5.0.2`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v5.0.1...v5.0.2)** - **2021-05-17**

### 📦 Package

- **npm:** Bump @typescript-eslint/parser from 4.23.0 to 4.24.0 [`63ca910`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/63ca910)

## v5.0.1

**[`v5.0.0...v5.0.1`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v5.0.0...v5.0.1)** - **2021-05-17**

### 📦 Package

- **npm:** Bump @typescript-eslint/eslint-plugin [`5dc0838`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/5dc0838)

## v5.0.0

**[`v4.0.0...v5.0.0`](https://github.com/evelynhathaway/eslint-plugin-evelyn/compare/v4.0.0...v5.0.0)** - **2021-05-17**

### 💥 Breaking

- Update peerDependedcies, bump Node.js minimum, update ruleset [`75935c1`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/75935c1)

### ✨ Feature

- Add testing library sub configs [`de5a263`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/de5a263)

### 📦 Package

- Bump hosted-git-info from 2.8.8 to 2.8.9 [`b28f237`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/b28f237)
- Bump lodash from 4.17.20 to 4.17.21 [`91c0edb`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/91c0edb)
- Bump y18n from 4.0.0 to 4.0.1 [`a261413`](https://github.com/evelynhathaway/eslint-plugin-evelyn/commit/a261413)
