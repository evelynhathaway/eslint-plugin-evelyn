module.exports = {
	"plugins": [
		"jsx-a11y",
	],

	"extends": [
		"plugin:jsx-a11y/recommended",
	],

	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true,
		},
	},

	// Lint all JSX/TSX files
	// - Lets ESLint v7 know to add these to `--ext`
	"overrides": [
		{
			"files": [
				"**/*.{jsx,tsx}",
			],
		},
	],
};
