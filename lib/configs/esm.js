import tseslint from "typescript-eslint";
import {ignores, possibleModuleExtensionsFiles} from "../files.js";

export default tseslint.config(
	{
		files: possibleModuleExtensionsFiles,
		ignores,
		rules: {
			// Reason: Error on use of any non-module API
			"unicorn/prefer-module": "error",
			// Reason: File paths and extensions must fully resolve for the current version of ESM
			"import/extensions": [
				"error",
				// In ESM, always include extensions
				// - If using TypeScript, consider using `.js` extensions or the `allowImportingTsExtensions` or
				//   `rewriteRelativeImportExtensions` TypeScript compiler options
				"ignorePackages",
			],
			// Reason: Doesn't work correctly when using ESM
			// See: https://github.com/import-js/eslint-plugin-import/issues/2442
			"import/no-named-as-default-member": "off",
		},
	},
);
