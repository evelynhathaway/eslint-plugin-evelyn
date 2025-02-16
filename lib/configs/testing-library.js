import eslintPluginTestingLibrary from "eslint-plugin-testing-library";
import tseslint from "typescript-eslint";
import {allExtensions} from "../files.js";

export default tseslint.config(
	{
		files: [
			`**/*.test.{${allExtensions}}`,
		],
		extends: [
			eslintPluginTestingLibrary.configs["flat/dom"],
		],
	},
);
