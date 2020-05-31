module.exports = {
	"plugins": [
		"markdown",
	],

	// Lint all markdown files
	// - Lets ESLint v7 know to add these to `--ext`
	"overrides": [
		{
			"files": [
				"**/*.{md,markdown,mdown,mkdn}",
			],
			// Turn on strict mode
			// See: https://github.com/eslint/eslint-plugin-markdown#overriding-strict
			"parserOptions": {
				"ecmaFeatures": {
					"impliedStrict": true,
				},
			},
			"rules": {
				"strict": "off",
			},
		},
	],
};
