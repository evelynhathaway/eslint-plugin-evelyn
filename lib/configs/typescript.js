import eslintPluginImport from "eslint-plugin-import";
import tseslint from "typescript-eslint";
import {typescriptExtensions, typescriptExtensionsFiles} from "../files.js";

export default tseslint.config(
	{
		// Apply to TypeScript files
		files: typescriptExtensionsFiles,
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
			// Reason: `??` and `||` are different operations to me, and I do not struggle with switching between them
			// - `??` is great for defaulting, and `||` is great for normalization of "" for situations where "" means
			//   effectively null, like a form input
			"@typescript-eslint/prefer-nullish-coalescing": "off",
			// Reason: `type` and `interface` are not fully interchangeable over the corse of the codebase's lifetime
			// - While `interface` as a default is my preferred style, this rule doesn't know my intent behind using
			//   `type` for an object type like a reducer action, where I plan to use a union or intersection when
			//   another action is added. And I value my intent over the style option of one keyword, semicolon, and
			//   equals sign.
			"@typescript-eslint/consistent-type-definitions": "off",
		},
	},
	{
		// Apply to TypeScript JSX files
		files: [
			"**/*.tsx",
		],
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
