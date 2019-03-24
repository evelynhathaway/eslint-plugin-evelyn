const extend = require("../extend");

module.exports = extend(
	/*
		Base config
	*/
	"default",
	{
		/*
			Overrides
		*/
		"overrides": [
			/*
				Source files
			*/
			extend(
				{
					"files": [
						"src/**/*.js",
					],
				},
				"source"
			),
			/*
				Built files
			*/
			extend(
				{
					"files": [
						"*-min.js",
						"*.min.js",
						"dist/**/*.js",
					],
				},
				"built"
			),
			/*
				TypeScript files
			*/
			extend(
				{
					"files": [
						"**/*.ts",
						"**/*.tsx",
					],
				},
				"typescript"
			),
			/*
				JSX files
			*/
			extend(
				{
					"files": [
						"**/*.jsx",
						"**/*.tsx",
					],
				},
				"jsx"
			),
			/*
				Mocha test files
			*/
			extend(
				{
					"files": [
						"test/**/*.js",
						"tests/**/*.js",
						"*-test.js",
						"*.spec.js",
					],
				},
				"mocha"
			),
		],
	}
);
