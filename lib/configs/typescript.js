module.exports = {
	"parser": "@typescript-eslint/parser",
	"plugins": [
		"@typescript-eslint",
		"node",
	],
	"rules": {
		/*
			Eslint rules
			Supported rules: https://eslint.org/docs/rules/
		*/
		"no-unused-vars": "warn", // Falsely triggers on types
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
		// Unmodified reccommended
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": "error",
		"@typescript-eslint/ban-types": "error",
		"@typescript-eslint/ban-ts-ignore": "error",
		"@typescript-eslint/camelcase": "error",
		"@typescript-eslint/class-name-casing": "error",
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/explicit-member-accessibility": "error",
		"@typescript-eslint/indent": "error",
		"@typescript-eslint/interface-name-prefix": "error",
		"@typescript-eslint/member-delimiter-style": "error",
		"@typescript-eslint/no-angle-bracket-type-assertion": "error", // Confusing syntax (TSX, etc.)
		"@typescript-eslint/no-array-constructor": "error",
		"@typescript-eslint/no-empty-interface": "error",
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/no-inferrable-types": "error",
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-object-literal-type-assertion": "error",
		"@typescript-eslint/no-parameter-properties": "error",
		"@typescript-eslint/no-require-imports": "error",
		"@typescript-eslint/no-triple-slash-reference": "error",
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/no-use-before-define": "error",
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/prefer-interface": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/promise-function-async": "error",
		"@typescript-eslint/type-annotation-spacing": "error",
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
