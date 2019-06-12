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
		// Tabs > spaces IMO
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
		"quotes": [
			"warn",
			"double",
		],
		// Semicolons are required
		"semi": [
			"error",
			"always",
		],
		"no-extra-semi": "warn",
		// No var
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
		// Eslint's no-fallthrough with my case block bugfix
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
		// Sometimes `Array.from()` is more readable
		"unicorn/prefer-spread": "off",
		// I prefer performance and simplicity in some cases
		"unicorn/prefer-query-selector": "off",
		// Hard to work with other APIs without configuration, doesn't ignore at a certain name length
		"unicorn/prevent-abbreviations": "off",
		// Shortcut < explictly importing index for readablity
		"unicorn/import-index": "off",
		// Often needlessly verbose
		"unicorn/explicit-length-check": "off",
	},
};
