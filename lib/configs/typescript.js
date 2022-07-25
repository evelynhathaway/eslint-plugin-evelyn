module.exports = {
	// Lint all TypeScript files
	// - Lets ESLint v7 know to add these to `--ext`
	"overrides": [
		{
			// Apply to TypeScript files
			"files": [
				"**/*.{ts,tsx}",
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
			},
		},
	],
};
