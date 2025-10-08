import {defineConfig} from "eslint/config";
import eslintPluginTestingLibrary from "eslint-plugin-testing-library";
import {allExtensions} from "../files.js";

export default defineConfig(
	{
		files: [
			`**/*.test.{${allExtensions}}`,
		],
		extends: [
			eslintPluginTestingLibrary.configs["flat/react"],
		],
	},
);
