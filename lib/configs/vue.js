module.exports = {
	"extends": [
		"plugin:evelyn/babel",
		"plugin:vue/recommended",
		"plugin:evelyn/node-env",
	],

	// Lint all Vue files
	// - Lets ESLint v7 know to add these to `--ext`
	"overrides": [
		{
			"files": [
				"**/*.vue",
			],
		},
	],
};
