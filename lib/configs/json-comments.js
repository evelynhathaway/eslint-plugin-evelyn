module.exports = {
	"extends": [
		"plugin:json/recommended-with-comments",
	],

	// Lint all JSON files
	// - Lets ESLint v7 know to add these to `--ext`
	"overrides": [
		{
			"files": [
				"**/*.json",
			],
		},
	],
};
