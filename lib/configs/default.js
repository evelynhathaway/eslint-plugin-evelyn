module.exports = {
	"env": {
		"es2021": true,
		"node": true,
		"browser": true,
		"worker": true,
		"serviceworker": true,
	},

	"parserOptions": {
		"ecmaVersion": 2021,
		"sourceType": "module",
	},

	"plugins": [
		"unicorn",
		"import",
		"regexp",
	],

	"extends": [
		"eslint:recommended",
		"plugin:unicorn/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:regexp/recommended",
	],

	// Lint all files using these extension patterns
	// - Lets ESLint v7 know to add these to `--ext`
	"overrides": [
		{
			"files": [
				"**/*.{js,cjs,mjs,jsx,ts,tsx}",
			],
		},
	],

	"ignorePatterns": [
		/*
			Disable existing ignores for lintable files
			- `{List}` glob patters do not override ESLint's defaults
			- Doesn't enable tool-dependent filenames line `.babelrc`
				- Out of scope, rename the file or use ignore/overrides
		*/
		"!**/.*.js",
		"!**/.*.cjs",
		"!**/.*.mjs",
		"!**/.*.ts",
		"!**/.*.jsx",
		"!**/.*.tsx",
	],

	"rules": {
		/*
			ESLint rules
			Supported rules: https://eslint.org/docs/rules/
		*/
		// Tabs > spaces
		// Reason: Style and accessibility
		// Learn more in this Reddit and Twitter thread: https://twitter.com/sarah_federman/status/1146544481556033537
		"indent": [
			"error",
			"tab",
			{
				// Reason: Indent in switch cases to match the common styling
				"SwitchCase": 1,
				// Reason: Ignore JSX, use `evelyn/react` rules instead
				"ignoredNodes": ["JSXElement", "JSXElement > *", "JSXAttribute", "JSXIdentifier", "JSXNamespacedName", "JSXMemberExpression", "JSXSpreadAttribute", "JSXExpressionContainer", "JSXOpeningElement", "JSXClosingElement", "JSXFragment", "JSXOpeningFragment", "JSXClosingFragment", "JSXText", "JSXEmptyExpression", "JSXSpreadChild"],
			},
		],
		// Reason: Consistent spacing in comments for readability
		"spaced-comment": [
			"error",
			"always",
			{
				// Reason: Allow TypeScript triple slash directives
				"markers": ["/"],
			},
		],
		// Reason: Line breaks should be committed as the near-universal `LF` characters to prevent excess whitespace diffing
		// - Only turn this off if you trust your team's auto-crlf configs or have a hook check for this
		"linebreak-style": [
			"error",
			"unix",
		],
		// Reason: Avoid extra whitespace diffing when modifying files
		// Preferring always because of the legacy of unix files
		"eol-last": "error",
		// Reason: Empty lines can be helpful in the middle of code to organize longer modules, but extra shouldn't show up at the beginning or end
		"no-multiple-empty-lines": [
			"error",
			{
				"max": 3,
				"maxEOF": 0,
				"maxBOF": 0,
			},
		],
		// Reason: Consistent hugging of blocks
		"object-curly-spacing": [
			"error",
			"never",
		],
		"padded-blocks": [
			"error",
			"never",
		],
		"space-in-parens": [
			"error",
			"never",
		],
		"space-before-function-paren": [
			"error",
			"always",
		],
		"space-before-blocks": [
			"error",
			"always",
		],
		"arrow-spacing": [
			"error",
			{
				"before": true,
				"after": true,
			},
		],
		"rest-spread-spacing": [
			"error",
			"never",
		],
		"template-curly-spacing": [
			"error",
			"never",
		],
		"key-spacing": "error",
		"comma-spacing": [
			"error",
			{
				"before": false,
				"after": true,
			},
		],
		"no-multi-spaces": "error",
		// Reason: Avoid extra visual noise
		"no-useless-rename": "error",
		"prefer-destructuring": "error",
		// Double quotes are bae (templates ok)
		// Reason: Easier to spot and support apostrophes
		"quotes": [
			"error",
			"double",
			{
				// Reason: Allow avoiding extra escapes by using other quotes
				"avoidEscape": true,
			},
		],
		// Reason: Avoid using quotes that can't be copied from other languages like HTML
		"jsx-quotes": [
			"error",
			"prefer-double",
		],
		// Reason: Missing a semicolon can break code in unexpected ways
		// - `const object = {value: 100}/* \n */(() => console.log(object))()` will fail with a confusing error message, for instance
		"semi": [
			"error",
			"always",
		],
		"no-extra-semi": "warn",
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
		// Reason: Add object key quotes when it could conflict with a a reserved word or number
		"quote-props": [
			"warn",
			"as-needed",
			{
				"unnecessary": false,
				"numbers": true,
			},
		],
		// Reason: Ease of moving and sorting lines without extra visual noise
		"comma-dangle": [
			"error",
			{
				"arrays": "always-multiline",
				"objects": "always-multiline",
				"imports": "always-multiline",
				"exports": "always-multiline",
				// Can be unexpected in single param functions like `render()` in testing library
				"functions": "only-multiline",
			},
		],
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
				"commentPattern": "falls?\\s?through|break",
			},
		],
		// Reason: unicorn implements a version ignoring hashbanged files
		"no-process-exit": "off",
		/*
			Unicorn rules
			Supported rules: https://github.com/sindresorhus/eslint-plugin-unicorn#rules
		*/
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
			},
		],
		// Reason: Reduce is hard to understand and refactor, but sometimes it's the best tool for the job
		"unicorn/no-array-reduce": "off",
		// Reason: Creating own handler functions
		"unicorn/no-fn-reference-in-iterator": "off",
		// Reason: Creating own handler functions
		"unicorn/no-array-callback-reference": "off",
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
				"allowCallExpression": false, // Can be confused with an exported function
				"allowLiteral": true,
				"allowObject": true,
			},
		],
	},

	"settings": {
		"import/resolver": {
			"node": {
				"extensions": [".js", ".cjs", ".mjs", ".jsx", ".ts", ".tsx"],
			},
			"typescript": {
				"alwaysTryTypes": true,
				"project": "tsconfig.json",
			},
		},
		// Worker modules using `worker-loader`
		"import/ignore": [
			"\\.worker(\\.(j|t)s)?$",
		],
	},
};
