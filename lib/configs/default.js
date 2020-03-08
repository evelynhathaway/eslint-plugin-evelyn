module.exports = {
	"plugins": [
		"unicorn",
	],

	"extends": [
		"eslint:recommended",
		"plugin:unicorn/recommended",
	],

	"env": {
		"es6": true,
	},

	"parserOptions": {
		"ecmaVersion": 2019,
		"sourceType": "module",
	},

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
			},
		],
		"linebreak-style": [
			"error",
			"unix",
		],
		// Double quotes are bae (templates ok)
		// Reason: Easier to spot and support apostrophes
		"quotes": [
			"warn",
			"double",
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
				"imports": "only-multiline",
				"exports": "only-multiline",
				"functions": "only-multiline",
			},
		],
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
		// Reason: Shortcut < explictly importing index for readablity
		"unicorn/import-index": "off",
		// Reason: Often needlessly verbose
		"unicorn/explicit-length-check": "off",
	},
};
