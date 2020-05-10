module.exports = {
	"parser": "@typescript-eslint/parser",

	"parserOptions": {
		"project": "./tsconfig.json",
	},

	"plugins": [
		"@typescript-eslint",
		"node",
	],

	"extends": [
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/typescript",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
	],

	"rules": {
		/*
			Node rules
			Supported rules: https://github.com/mysticatea/eslint-plugin-node#-rules
		*/
		"node/no-unsupported-features/es-syntax": "off", // Disable upsupported features that will be transpiled
		"node/no-unsupported-features/es-builtins": "off", // Disable upsupported features that will be transpiled
		"node/exports-style": [ // No CJS exports
			"error",
			"exports",
		],
		/*
			TypeScript rules
			Supported rules: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
		*/
		// Modifications
		"@typescript-eslint/member-ordering": "error",
		"@typescript-eslint/array-type": [
			"error",
			{
				"default": "generic",
				"readonly": "generic",
			},
		],
		"@typescript-eslint/consistent-type-assertions": [
			"error",
			{
				"assertionStyle": "as",
			}
		], // Confusing syntax (TSX, etc.)
	},

	// Lint all TypeScript files
	// - Not TSX since that config will add it automatically
	// - Lets ESLint v7 know to add these to `--ext`
	"overrides": [
		{
			"files": [
				"**/*.ts",
			],
		},
	],
};
