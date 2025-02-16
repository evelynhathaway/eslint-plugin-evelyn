import eslintPluginImport from "eslint-plugin-import";
import tseslint from "typescript-eslint";
import {ignores, typescriptExtensions, typescriptExtensionsFiles} from "../files.js";

export default tseslint.config(
	{
		// Apply to TypeScript files
		files: typescriptExtensionsFiles,
		ignores,
		// Extend default sharable configs
		extends: [
			tseslint.configs.recommendedTypeChecked,
			tseslint.configs.stylisticTypeChecked,
			// Add rules for importing using TypeScript
			eslintPluginImport.flatConfigs.typescript,
		],
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
		rules: {
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
	{
		// Apply to TypeScript JSX files
		files: [
			"**/*.tsx",
		],
		ignores,
		rules: {
			// Reason: Extends clauses can be used to prevent parsing issues with arrow functions with type parameters
			"@typescript-eslint/no-unnecessary-type-constraint": "off",
		},
	},
	{
		// Apply to TypeScript test files
		files: [
			`**/*.test.{${typescriptExtensions}}`,
		],
		ignores,
		rules: {
			// Reason: Mocking and stubbing in tests often include empty functions
			"@typescript-eslint/no-empty-function": "off",
			// Reason: Remove unbound method rule to delegate to `jest/unbound-method` to automatically allow certain
			// unbound methods that are safe in tests
			// - Fails silently, so is safe to use in JavaScript
			"@typescript-eslint/unbound-method": "off",
		},
	},
);
