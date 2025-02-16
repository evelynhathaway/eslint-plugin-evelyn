import js from "@eslint/js";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import * as eslintPluginRegex from "eslint-plugin-regexp";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";
import {files, ignores, jsxExtensionsFiles, explicitModuleExtensionsFiles} from "../files.js";
import esm from "./esm.js";

export default tseslint.config(
	{
		files,
		ignores,
		plugins: {
			"@stylistic": eslintPluginStylistic,
		},
		// Extend default sharable configs
		extends: [
			// ESLint
			js.configs.recommended,
			// Unicorn
			eslintPluginUnicorn.configs["flat/recommended"],
			// Import
			// - Extracting rules because the config includes an outdated ecmaVersion
			{
				plugins: {
					"import": eslintPluginImport,
				},
				rules: {...eslintPluginImport.flatConfigs.recommended.rules},
			},
			// Regex
			eslintPluginRegex.configs["flat/recommended"],
		],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.worker,
				...globals.serviceworker,
			},
		},
		rules: {
			/*
				ESLint rules
				Supported rules: https://eslint.org/docs/rules/
			*/
			// Reason: Avoid extra visual noise
			"no-useless-rename": "error",
			"prefer-destructuring": "error",
			// Reason: `var`'s function scope can cause unexpected results
			// - Explicitly hoist variables with `let` or `const` instead
			"no-var": "error",
			// Reason: `const` is a helpful guide, even if not frozen
			"prefer-const": "error",
			// Reason: Console commands should be explicitly allowed with an eslint-disable no-console comment to prevent hard to read consoles or memory leaks
			"no-console": "warn",
			// Reason: Alert is blocking, and any use of it will soon be pushed to deprecate by Chrome
			"no-alert": "error",
			// Reason: Throw error instances instead
			"no-throw-literal": "error",
			// Reason: Allow omitting vars from objects like `{badProp, ...otherProps} = props`
			"no-unused-vars": [
				"error",
				{
					"ignoreRestSiblings": true,
				},
			],
			// Reason: Most likely a performance issue that can be dramatic on a frontend
			"no-await-in-loop": "error",
			// Reason: Helps catch errors with forgetting to
			// - Avoids the classic `Hello ${firstName}` meme from marketing emails
			"no-template-curly-in-string": "error",
			// Reason: Suggest dot notation for valid literals
			"dot-notation": "error",
			// Reason: Enforce strict equals except for doing nullish checks
			"eqeqeq": [
				"error",
				"always",
				{
					"null": "ignore",
				},
			],
			// Reason: Named capture groups are stable and help finding the correct group and making regex self-documenting
			"prefer-named-capture-group": "error",
			// Reason: Not in strict mode
			"no-caller": "error",
			// Possible errors
			"no-extend-native": "error",
			"no-proto": "error",
			"no-iterator": "error",
			"no-self-compare": "error",
			"no-useless-call": "error",
			"radix": "error",
			"require-await": "error",
			"no-unused-expressions": [
				"error",
				{
					"allowShortCircuit": true,
					"allowTernary": true,
					"allowTaggedTemplates": true,
				},
			],
			"no-array-constructor": "error",
			"no-fallthrough": [
				"error",
				{
					commentPattern: String.raw`falls?\s?through|break`,
					allowEmptyCase: true,
					reportUnusedFallthroughComment: true,
				},
			],
			/*
				Regexp rules
				Supported rules: https://ota-meshi.github.io/eslint-plugin-regexp/rules
			*/
			// Reason: Removing `target: all` since literals are more readable for uncommon Unicode characters
			"regexp/prefer-range": [
				"error",
				{
					"target": "alphanumeric",
				},
			],
			/*
				Unicorn rules
				Supported rules: https://github.com/sindresorhus/eslint-plugin-unicorn#rules
			*/
			// Reason: `globalThis` isn't typical for many `window.` references in the browser
			"unicorn/prefer-global-this": "off",
			// Reason: Enabled in ESM config for incremental adoption
			"unicorn/prefer-module": "off",
			// Reason: `forEach` is helpfully functional sometimes
			"unicorn/no-array-for-each": "off",
			// Reason: React references, null handling tests, and nullish checks should be able to use null
			"unicorn/no-null": "off",
			// Reason: Sometimes `Array.from()` is more readable
			"unicorn/prefer-spread": "off",
			// Reason: Other APIs offer more performance and simplicity in some cases
			"unicorn/prefer-query-selector": "off",
			// Reason: In cases like event handlers that don't need a closure scope, it isn't critical to hoist the handler out of the component for a tiny bit of performance
			"unicorn/consistent-function-scoping": [
				"error",
				{
					"checkArrowFunctions": false,
				},
			],
			// Reason: `import/no-anonymous-default-export` is more configurable
			"unicorn/no-anonymous-default-export": "off",
			// Reason: Previously in recommended config and regularly caught mistakes albeit with false positives
			// - Once unicorn has `prefer-destructured-variables`, I will switch to that rule to lower the annoyance of
			//   this style of check
			// - See: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1230
			"unicorn/consistent-destructuring": "error",
			// Reason: Abbreviations are hard to understand when you aren't the original author
			// - Example: `<img onError={(e) => {}} />` where `e` could be confused for `element` or `error`, when it is an `event` in React
			// - Includes defaults and excludes items in the allow list
			"unicorn/prevent-abbreviations": [
				"error",
				{
					"replacements": {
						// Reason: Add `element` as a suggestion
						"e": {
							"error": true,
							"event": true,
							"element": true,
						},
						// Reason: `props` is a term used more often than properties in React
						"props": false,
						"prop": false,
						// Reason: `ref` is a term used more often than reference in React
						"ref": false,
						// Reason: `arguments` is a reserved word and Storybook documentation API
						"args": false,
						"arg": false,
						// Reason: Reflective of `args` and `props`, `params` should also be allowed
						"param": false,
						"params": false,
					},
					"ignore": [
						// Reason: React Scripts doesn't check for other filenames for the type reference file
						/^react-app-env(?:\.d)?$/,
					],
				},
			],
			// Reason: Length comparison checks are often needlessly verbose, especially with optional chaining
			"unicorn/explicit-length-check": "off",
			// Reason: Enforce the use of issues or expiring-todo-comments
			"unicorn/expiring-todo-comments": [
				"error",
				{
					"allowWarningComments": false,
					ignore: [
						"expiring-todo-comments", // Reason: Allow the rule to be mentioned or disabled with a comment
						String.raw`#\d+`, // Reason: Allow GitHub issue references
						String.raw`\w+-\d+`, // Reason: Allow Jira issue references
					],
				},
			],
			// Reason: Reduce is hard to understand and refactor, but sometimes it's the best tool for the job
			"unicorn/no-array-reduce": "off",
			// Reason: Creating own handler functions
			"unicorn/no-fn-reference-in-iterator": "off",
			// Reason: Creating own handler functions
			"unicorn/no-array-callback-reference": "off",
			// Reason: Consistency using PascalCase for components and kebab-case for everything else
			"unicorn/filename-case": [
				"error",
				{
					"cases": {
						// Most files
						"kebabCase": true,
						// Single export React component files
						"pascalCase": true,
					},
					"ignore": [
						String.raw`^[A-Z][a-zA-Z]+\.[a-z\.\-]+$`, // Allow all caps inside PascalCase for React components with initialisms (e.g. PageSEO.jsx)
					],
				},
			],
			// Reason: Unicorn's import style is too opinionated
			"unicorn/import-style": "off",
			// Reason: Ternary expressions are harder for beginners to read
			"unicorn/prefer-ternary": "off",
			// Reason: Remove unused `undefined`
			"unicorn/no-useless-undefined": [
				"error",
				{
					// Reason: TypeScript will expect explicit `undefined` in some call signatures
					"checkArguments": false,
					// Reason: Checking the arrow function body makes it harder to create no-op functions for testing,
					// initial context values, etc.
					"checkArrowFunctionBody": false,
				},
			],
			// Reason: Fallthrough default cases help create self documenting branching
			"unicorn/no-useless-switch-case": "off",
			/*
				Import rules
				Supported rules: https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
			*/
			// Reason: Don't use @deprecated exports
			"import/no-deprecated": "error",
			// Reason: Import organization style
			"import/no-useless-path-segments": "error",
			"import/first": "error",
			"import/order": [
				"error",
				{
					"groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
					"alphabetize": {
						"order": "asc",
						"caseInsensitive": true,
					},
					// Force React to the top of external
					"pathGroups": [
						{
							"pattern": "react",
							"group": "external",
							"position": "before",
						},
					],
					"pathGroupsExcludedImportTypes": ["builtin"],
				},
			],
			"import/newline-after-import": [
				"error",
				{
					"count": 1,
				},
			],
			// Reason: Mutating exports isn't expected behavior
			"import/no-mutable-exports": "warn",
			// Reason: Avoid exporting functions without names for stack tracing and confusing syntax
			"import/no-anonymous-default-export": [
				"error", {
					"allowArray": true,
					"allowArrowFunction": false, // Needs a stacktrace name
					"allowAnonymousClass": false, // Needs a stacktrace name
					"allowAnonymousFunction": false, // Needs a stacktrace name
					"allowCallExpression": true,
					"allowLiteral": true,
					"allowObject": true,
				},
			],
			/*
				Stylistic rules
				Supported rules: https://eslint.style/packages/default#rules
			*/
			// Reason: Style and accessibility
			// Learn more in this Reddit and Twitter thread: https://twitter.com/sarah_federman/status/1146544481556033537
			"@stylistic/indent": [
				"error",
				"tab",
				{
					// Reason: Indent in switch cases to match the common styling
					"SwitchCase": 1,
				},
			],
			"@stylistic/no-mixed-spaces-and-tabs": "error",
			// Reason: Consistent spacing in comments for readability
			"@stylistic/spaced-comment": [
				"error",
				"always",
				{
					// Reason: Allow TypeScript triple slash directives
					"markers": ["/"],
				},
			],
			// Reason: Line breaks should be committed as the near-universal `LF` characters to prevent excess whitespace diffing
			// - Only turn this off if you trust your team's auto-crlf configs or have a hook check for this
			"@stylistic/linebreak-style": [
				"error",
				"unix",
			],
			// Reason: Avoid extra whitespace diffing when modifying files
			// Preferring always because of the legacy of unix files
			"@stylistic/eol-last": "error",
			// Reason: Empty lines can be helpful in the middle of code to organize longer modules, but extra shouldn't show up at the beginning or end
			"@stylistic/no-multiple-empty-lines": [
				"error",
				{
					"max": 3,
					"maxEOF": 0,
					"maxBOF": 0,
				},
			],
			// Reason: Consistent hugging of blocks
			"@stylistic/block-spacing": [
				"error",
				"never",
			],
			"@stylistic/object-curly-spacing": [
				"error",
				"never",
			],
			"@stylistic/brace-style": "error",
			"@stylistic/padded-blocks": [
				"error",
				"never",
			],
			"@stylistic/space-in-parens": [
				"error",
				"never",
			],
			"@stylistic/space-before-function-paren": [
				"error",
				"always",
			],
			"@stylistic/space-before-blocks": [
				"error",
				"always",
			],
			"@stylistic/func-call-spacing": "error",
			"@stylistic/keyword-spacing": "error",
			"@stylistic/arrow-spacing": [
				"error",
				{
					"before": true,
					"after": true,
				},
			],
			"@stylistic/rest-spread-spacing": [
				"error",
				"never",
			],
			"@stylistic/template-curly-spacing": [
				"error",
				"never",
			],
			"@stylistic/key-spacing": "error",
			"@stylistic/comma-spacing": [
				"error",
				{
					"before": false,
					"after": true,
				},
			],
			"@stylistic/space-infix-ops": "error",
			"@stylistic/no-multi-spaces": "error",
			// Double quotes (templates ok)
			// Reason: Easier to spot, most consistent cross language, and supports apostrophes
			"@stylistic/quotes": [
				"error",
				"double",
				{
					// Reason: Allow avoiding extra escapes by using other quotes
					"avoidEscape": true,
					// Reason: Allow all template literals as an alternative option to single quotes
					"allowTemplateLiterals": true,
				},
			],
			// Reason: Missing a semicolon can break code in unexpected ways
			// - `const object = {value: 100}/* \n */(() => console.log(object))()` will fail with a confusing error message, for instance
			"@stylistic/semi": [
				"error",
				"always",
			],
			"@stylistic/no-extra-semi": "warn",
			// Reason: Add object key quotes when it could conflict with a a reserved word or number
			"@stylistic/quote-props": [
				"warn",
				"as-needed",
				{
					"unnecessary": false,
					"numbers": true,
				},
			],
			// Reason: Ease of moving and sorting lines without extra visual noise
			"@stylistic/comma-dangle": [
				"error",
				{
					"arrays": "always-multiline",
					"objects": "always-multiline",
					"imports": "always-multiline",
					"exports": "always-multiline",
					// Can be unexpected in single param functions like `render()` in testing library
					"functions": "only-multiline",
					// TypeScript
					"enums": "always-multiline",
					"generics": "always-multiline",
					"tuples": "always-multiline",
				},
			],
			// TypeScript-specific rules
			// Reason: Consistent spacing
			"@stylistic/type-annotation-spacing": "error",
			"@stylistic/member-delimiter-style": "error",
		},
		settings: {
			"import/resolver": {
				"node": {
					"extensions": [".js", ".cjs", ".mjs", ".jsx", ".ts", ".cts", ".mts", ".tsx"],
				},
				"typescript": {
					"alwaysTryTypes": true,
					"project": "tsconfig.json",
				},
			},
			// Worker modules using `worker-loader`
			"import/ignore": [
				String.raw`\.worker(\.(j|t)s)?$`,
			],
		},
	},

	// Reason: ESM rules for .mts and .mjs files should be enabled by default
	// - The ESM config can can extend the use of these rules to extensions that are only modules with `"type":
	//   "module"` in the `package.json` like .js and .ts
	{
		files: explicitModuleExtensionsFiles,
		ignores,
		rules: esm[0].rules,
	},

	// Reason: Automatically enable JSX rules for .jsx and .tsx files
	// - The React config can be used to apply React-specific rules to these files as well
	{
		files: jsxExtensionsFiles,
		ignores,
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		extends: [
			// JSX accessibility rules
			eslintPluginJsxA11y.flatConfigs.recommended,
		],
		rules: {
			/*
				JSX a11y rules
				Supported rules: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules
			*/
			// Reason: Require clear link text instead of links like "click here"
			"jsx-a11y/anchor-ambiguous-text": "error",
			// Reason: Required alt text for native elements and custom components
			"jsx-a11y/alt-text": [
				"error",
				{
					elements: ["img", "object", "area", "input[type=\"image\"]"],
					img: ["Image"],
				},
			],
			/*
				Stylistic rules
				Supported rules: https://eslint.style/packages/default#rules
			*/
			// Reason: Styling
			"@stylistic/jsx-indent-props": [
				"error",
				"tab",
			],
			"@stylistic/jsx-self-closing-comp": "error",
			"@stylistic/jsx-pascal-case": [
				"error",
				{
					allowAllCaps: true,
				},
			],
			// Reason: Avoid using quotes that can't be copied from other languages like HTML
			"@stylistic/jsx-quotes": [
				"error",
				"prefer-double",
			],
			"@stylistic/jsx-wrap-multilines": [
				"error",
				{
					"declaration": "parens-new-line",
					"assignment": "parens-new-line",
					"return": "parens-new-line",
					"arrow": "parens-new-line",
					"condition": "parens-new-line",
					"logical": "parens-new-line",
					"prop": "parens-new-line",
				},
			],
			"@stylistic/jsx-first-prop-new-line": "error",
			"@stylistic/jsx-equals-spacing": [
				"error",
				"never",
			],
			"@stylistic/jsx-curly-spacing": [
				"error",
				{
					"when": "never",
					"children": true,
				},
			],
			"@stylistic/jsx-curly-newline": "error",
			"@stylistic/jsx-closing-tag-location": "error",
			"@stylistic/jsx-closing-bracket-location": "error",
			"@stylistic/jsx-props-no-multi-spaces": "error",
			"@stylistic/jsx-curly-brace-presence": [
				"error",
				"never",
			],
		},
	},
);
