import eslintPluginTestingLibrary from "eslint-plugin-testing-library";
import tseslint from "typescript-eslint";
import {ignores, allExtensions} from "../files.js";

export default tseslint.config(
	{
		files: [
			`**/*.test.{${allExtensions}}`,
		],
		ignores,
		extends: [
			eslintPluginTestingLibrary.configs["flat/dom"],
		],
	},
);
