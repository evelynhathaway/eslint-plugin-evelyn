module.exports = {
	// Lint all TypeScript files
	// - Lets ESLint v7 know to add these to `--ext`
	"overrides": [
		{
			// Apply to TypeScript files
			"files": [
				"**/*.{ts,tsx,cts,mts}",
			],

			// Must parse with TS parser to not error and to understand the code
			"parser": "@typescript-eslint/parser",

			// Default to the conventional tsconfig file
			"parserOptions": {
				"project": "./tsconfig.json",
			},

			// Include TS plugin and import plugin
			"plugins": [
				"@typescript-eslint",
				"import",
			],

			// Extend default sharable configs
			"extends": [
				// Removes rules added by ESLint that TypeScript information can improve
				"plugin:@typescript-eslint/eslint-recommended",
				// Add default recommended rules
				"plugin:@typescript-eslint/recommended",
				// Add strict rules
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				// Add rules for importing using TypeScript
				"plugin:import/typescript",
			],

			"rules": {
				/*
					TypeScript rules
					Supported rules: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
				*/
				// Reason: Organization
				"@typescript-eslint/member-ordering": "error",
				// Reason: Avoids confusing angle bracket assertions with TSX syntax (this is not the same as type parameters)
				"@typescript-eslint/consistent-type-assertions": [
					"error",
					{
						"assertionStyle": "as",
					},
				],
				// Reason: Report unused variables but allow omitting vars from objects like `{badProp, ...otherProps} = props`
				"@typescript-eslint/no-unused-vars": [
					"error",
					{
						"ignoreRestSiblings": true,
					},
				],
				// Reason: Consistent spacing
				"@typescript-eslint/type-annotation-spacing": "error",
				"@typescript-eslint/member-delimiter-style": "error",
				// Reason: TypeScript version of formatting rules from default config
				"block-spacing": "off",
				"@typescript-eslint/block-spacing": [
					"error",
					"never",
				],
				"brace-style": "off",
				"@typescript-eslint/brace-style": "error",
				"comma-dangle": "off",
				"@typescript-eslint/comma-dangle": [
					"error",
					{
						"arrays": "always-multiline",
						"objects": "always-multiline",
						"imports": "always-multiline",
						"exports": "always-multiline",
						// Can be unexpected in single param functions like `render()` in testing library
						"functions": "only-multiline",
						"enums": "always-multiline",
						"generics": "always-multiline",
						"tuples": "always-multiline",
					},
				],
				"comma-spacing": "off",
				"@typescript-eslint/comma-spacing": [
					"error",
					{
						"before": false,
						"after": true,
					},
				],
				"func-call-spacing": "off",
				"@typescript-eslint/func-call-spacing": "error",
				"indent": "off",
				"@typescript-eslint/indent": [
					"error",
					"tab",
					{
						// Reason: Indent in switch cases to match the common styling
						"SwitchCase": 1,
						// Reason: Ignore JSX, use `evelyn/react` rules instead
						"ignoredNodes": [
							"JSXElement", "JSXElement > *", "JSXAttribute", "JSXIdentifier", "JSXNamespacedName", "JSXMemberExpression", "JSXSpreadAttribute", "JSXExpressionContainer", "JSXOpeningElement", "JSXClosingElement", "JSXFragment", "JSXOpeningFragment", "JSXClosingFragment", "JSXText", "JSXEmptyExpression", "JSXSpreadChild",
						],
					},
				],
				"key-spacing": "off",
				"@typescript-eslint/key-spacing": "error",
				"keyword-spacing": "off",
				"@typescript-eslint/keyword-spacing": "error",
				"object-curly-spacing": "off",
				"@typescript-eslint/object-curly-spacing": [
					"error",
					"never",
				],
				"quotes": "off",
				"@typescript-eslint/quotes": [
					"error",
					"double",
					{
						// Reason: Allow avoiding extra escapes by using other quotes
						"avoidEscape": true,
						// Reason: Allow all template literals as an alternative option to single quotes
						"allowTemplateLiterals": true,
					},
				],
				"semi": "off",
				"@typescript-eslint/semi": [
					"error",
					"always",
				],
				"space-before-blocks": "off",
				"@typescript-eslint/space-before-blocks": [
					"error",
					"always",
				],
				"space-before-function-paren": "off",
				"@typescript-eslint/space-before-function-paren": [
					"error",
					"always",
				],
				"space-infix-ops": "off",
				"@typescript-eslint/space-infix-ops": "error",
			},
		},
		{
			// Apply to TypeScript JSX files
			"files": [
				"**/*.tsx",
			],
			"rules": {
				// Reason: Extends clauses can be used to prevent parsing issues with arrow functions with type parameters
				"@typescript-eslint/no-unnecessary-type-constraint": "off",
			},
		},
		{
			// Apply to TypeScript test files
			"files": [
				"**/*.test.{ts,mts,cts,tsx}",
			],
			"rules": {
				// Reason: Mocking and stubbing in tests often include empty functions
				"@typescript-eslint/no-empty-function": "off",
			},
		},
	],
};
