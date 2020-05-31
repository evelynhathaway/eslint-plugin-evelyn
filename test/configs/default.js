require("../../lib/util/link");

const configTester = require("eslint-config-rule-tester");
const config = require("../../lib/configs/default.js");


configTester("config: default", config, {
	valid: [
		"function test () {\n	test();\n}\ntest();\n(() => {})();",
	],
	invalid: [
		// Indentation
		{
			code: "function test () {\n    test();\n}\ntest();",
			errors: ["Expected indentation of 1 tab but found 4 spaces."],
		},
		// Semicolons protecting unexpected errors
		// Example parsing error: `const test = {test: "test"}\n(() => {})();`
		{
			code: "const test = {test: \"test\"}\nvoid(test)",
			errors: ["Missing semicolon.", "Missing semicolon."],
		},
	],
});
