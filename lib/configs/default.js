module.exports = {
	"plugins": [
		"unicorn",
		"import",
	],

	"extends": [
		"eslint:recommended",
		"plugin:unicorn/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
	],

	"ignorePatterns": [
		/*
			Disable existing ignores for lintable files
			- `{List}` glob patters do not override ESLint's defaults
			- Doesn't enable tool-dependent filenames line `.babelrc`
				- Out of scope, rename the file or use ignore/overrides
		*/
		"!**/.*.js",
		"!**/.*.ts",
		"!**/.*.json",
		"!**/.*.jsx",
		"!**/.*.tsx",
		"!**/.*.vue",

		// Ignore files
		// Lock files are long and automatically updated
		"**/package-lock.json",
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
				"SwitchCase": 1,
				// Ignore JSX, use JSX rules instead
				"ignoredNodes": ["JSXElement", "JSXElement > *", "JSXAttribute", "JSXIdentifier", "JSXNamespacedName", "JSXMemberExpression", "JSXSpreadAttribute", "JSXExpressionContainer", "JSXOpeningElement", "JSXClosingElement", "JSXFragment", "JSXOpeningFragment", "JSXClosingFragment", "JSXText", "JSXEmptyExpression", "JSXSpreadChild"],
			},
		],
		"spaced-comment": [
			"error",
			"always",
		],
		"linebreak-style": [
			"error",
			"unix",
		],
		"eol-last": "error",
		"no-multiple-empty-lines": [
			"error",
			{
				"max": 3,
				"maxEOF": 0,
				"maxBOF": 0,
			},
		],
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
		"no-useless-rename": "error",
		"prefer-destructuring": "error",
		"rest-spread-spacing": [
			"error",
			"never",
		],
		"template-curly-spacing": [
			"error",
			"never",
		],
		"key-spacing": "error",
		// Double quotes are bae (templates ok)
		// Reason: Easier to spot and support apostrophes
		"quotes": [
			"error",
			"double",
		],
		"jsx-quotes": [
			"error",
			"prefer-double",
		],
		// Semicolons are required
		// Reason: Missing one can break code in unexpected ways
		"semi": [
			"error",
			"always",
		],
		"no-extra-semi": "warn",
		// No `var`
		// Reason: Function scope can cause unexpected results
		"no-var": "error",
		"prefer-const": "error",
		// Console should not often be shipped
		"no-console": "warn",
		"no-alert": "error",
		// Throw error instances
		"no-throw-literal": "error",
		"quote-props": [
			"warn",
			"as-needed",
			{
				"unnecessary": false,
				"numbers": true,
			},
		],
		"comma-spacing": [
			"error",
			{
				"before": false,
				"after": true,
			},
		],
		// Extra trailing commas
		// Reason: Ease of moving and sorting lines
		"comma-dangle": [
			"error",
			{
				"arrays": "always-multiline",
				"objects": "always-multiline",
				"imports": "always-multiline",
				"exports": "always-multiline",
				"functions": "only-multiline",
			},
		],
		// Reason: Allow omitting vars from objects like `{badProp, ...otherProps} = props`
		"no-unused-vars": [
			"error",
			{
				ignoreRestSiblings: true,
			},
		],
		"no-await-in-loop": "error",
		"no-template-curly-in-string": "error",
		"dot-notation": "error",
		"eqeqeq": [
			"error",
			"always",
			{
				"null": "ignore",
			},
		],
		"no-caller": "error",
		"no-extend-native": "error",
		"no-multi-spaces": "error",
		"no-proto": "error",
		"no-iterator": "error",
		"no-self-compare": "error",
		"no-useless-call": "error",
		"prefer-named-capture-group": "error",
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
		// Reason: unicorn implements a version ignoring hashbanged files
		"no-process-exit": "off",
		/*
			Bugfixes
			Supported rules: ../rules/fixes/
		*/
		// ESLint's no-fallthrough with my `case` block bugfix
		"evelyn/no-fallthrough": [
			"error",
			{
				"commentPattern": "falls?\\s?through|break",
			},
		],
		/*
			Unicorn rules
			Supported rules: https://github.com/sindresorhus/eslint-plugin-unicorn#rules
		*/
		// Reason: Sometimes `Array.from()` is more readable
		"unicorn/prefer-spread": "off",
		// Reason: I prefer performance and simplicity in some cases
		"unicorn/prefer-query-selector": "off",
		// Reason: Hard to work with other APIs without configuration, doesn't ignore at a certain name length
		"unicorn/prevent-abbreviations": "off",
		// Reason: Shortcut < explicitly importing index for readability
		"unicorn/import-index": "off",
		// Reason: Often needlessly verbose
		"unicorn/explicit-length-check": "off",
		// Reason: Enforce the use of issues or expiring-todo-comments
		"unicorn/expiring-todo-comments": [
			"error",
			{
				"allowWarningComments": false,
			},
		],
		// Reason: Reduce is gross and all, but there's a point to it
		"unicorn/no-reduce": "off",
		// Reason: Creating own handler functions
		"unicorn/no-fn-reference-in-iterator": "off",
		// Reason: Consistency using PascalCase for components and kebab-case for everything else
		"unicorn/filename-case": [
			"error",
			{
				"cases": {
					"kebabCase": true,
					"pascalCase": true,
				},
				"ignore": [
					"^[A-Z_]+\\.[a-z\\.\\-]+$", // Allow all caps prefix for initialism
				],
			},
		],
		// Reason: Too opinionated
		"unicorn/import-style": "off",
		// Reason: Ternary expressions are harder for beginners to read
		"unicorn/prefer-ternary": "off",
		/*
			Import rules
			Supported rules: https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
		*/
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
		"import/no-mutable-exports": "warn",
		"import/newline-after-import": [
			"error",
			{
				"count": 2,
			},
		],
		"import/no-anonymous-default-export": [
			"error", {
				"allowArray": false,
				"allowArrowFunction": false,
				"allowAnonymousClass": false,
				"allowAnonymousFunction": false,
				"allowCallExpression": false,
				"allowLiteral": false,
				"allowObject": false,
			},
		],
	},

	"settings": {
		"import/resolver": {
			"node": {
				"extensions": [".js", ".jsx", ".ts", ".tsx", ".vue"],
			},
		},
		// Worker modules using `worker-loader`
		"import/ignore": [
			"\\.worker(\\.(j|t)s)?$",
		],
	},
};
