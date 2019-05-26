module.exports = {
	/*
		Base config
	*/
	"extends": [
		"plugin:evelyn/default",
		// Use node by default
		"plugin:evelyn/node",
	],

	/*
		Overrides
	*/
	"overrides": [
		/*
			Source files
		*/
		{
			"extends": [
				"plugin:evelyn/source",
			],
			"files": [
				"src/**/*.js",
			],
		},
		/*
			Built files (lib has to be done manually case-by-case)
		*/
		{
			"extends": [
				"plugin:evelyn/built",
			],
			"files": [
				"*-min.js",
				"*.min.js",
				"dist/**/*.js",
			],
		},
		/*
			TypeScript files
		*/
		{
			"extends": [
				"plugin:evelyn/typescript",
			],
			"files": [
				"**/*.ts",
				"**/*.tsx",
			],
		},
		/*
			JSX files
		*/
		{
			"extends": [
				"plugin:evelyn/jsx",
			],
			"files": [
				"**/*.jsx",
				"**/*.tsx",
			],
		},
		/*
			Mocha test files
		*/
		{
			"extends": [
				"plugin:evelyn/mocha",
			],
			"files": [
				"test/**/*.js",
				"tests/**/*.js",
				"*-test.js",
				"*.spec.js",
			],
		},
	],
};
