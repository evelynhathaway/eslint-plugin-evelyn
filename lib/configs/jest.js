import eslintPluginJest from "eslint-plugin-jest";
import tseslint from "typescript-eslint";
import {ignores, allExtensions} from "../files.js";

export default tseslint.config(
	{
		files: [
			`**/*.test.{${allExtensions}}`,
		],
		ignores,
		// Extend sharable configs from jest
		extends: [
			eslintPluginJest.configs["flat/recommended"],
			// Reason: Style of tests, assertions and better error messages
			eslintPluginJest.configs["flat/style"],
		],
		rules: {
			// Reason: Some matcher aliases are easier to understand (grammar)
			"jest/no-alias-methods": "off",
			// Reason: Ensures the correct error was thrown and not a logic or testing error
			"jest/require-to-throw-message": "error",
			// Reason: Possible error or confusing format of test hooks
			"jest/no-duplicate-hooks": "error",
			// Reason: Avoid loosing hooks in the middle of tests when they will apply to ones above and below
			"jest/prefer-hooks-on-top": "error",
			// Reason: Avoid writing extremely loose tests like `expect(value).toBeTruthy()`
			"jest/no-restricted-matchers": [
				"error",
				{
					"toBeFalsy": "Use a more restrictive expectation e.g. `.toBe(false)`, `.toBeNull()`, `.not.toBeInTheDocument()`",
					"toBeTruthy": "Use a more restrictive expectation e.g. `.toBe(true)`, `.toEqual(value)`, `.toBeInTheDocument()`",
				},
			],
			// Reason: Replace unbound method lint rules in TypeScript to automatically allow certain unbound methods
			// that are safe in tests
			// - Fails silently, so is safe to use in JavaScript
			"jest/unbound-method": "error",
		},
	},
);
