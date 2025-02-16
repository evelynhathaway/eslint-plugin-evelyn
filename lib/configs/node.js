import eslintPluginNode from "eslint-plugin-n";
import tseslint from "typescript-eslint";
import {files} from "../files.js";

export default tseslint.config(
	{
		files,
		plugins: {
			n: eslintPluginNode,
		},
		rules: {
			/*
				Node rules
				Supported rules: https://github.com/eslint-community/eslint-plugin-n#-rules
			*/
			// Reason: Assists with including a valid hashbang comment for bin files, add a eslint-disable comment if
			// another hashbang is required
			"n/hashbang": "error",
			// Reason: Deprecated APIs should be avoided or explicitly allowed with an eslint-disable comment
			"n/no-deprecated-api": "error",
			// Reason: Bin files should be published to npm or they will error
			"n/no-unpublished-bin": "error",
			// Reason: Syntax support isn't the same as support, and this syntax is often sugar on CommonJS
			"n/no-unsupported-features/es-syntax": "off",
			// Reason: Built in support isn't often transpiled for the active Node.js version, so it's likely an error
			"n/no-unsupported-features/es-builtins": "error",
			"n/no-unsupported-features/node-builtins": "error",
			// Reason: Path concatenation errors
			"n/no-path-concat": "error",
			// Reason: Async/await and promises are usually easier to understand and use
			"n/prefer-promises/fs": "error",
			"n/prefer-promises/dns": "error",
			// Reason: Avoid synchronous methods that can block the thread
			"n/no-sync": "error",
			// Reason: the import plugin handles import errors better
			"n/no-extraneous-import": "off",
			"n/no-extraneous-require": "off",
			"n/no-missing-import": "off",
			"n/no-missing-require": "off",
			"n/no-unpublished-import": "off",
			"n/no-unpublished-require": "off",
		},
	},
);
