module.exports = {
	"plugins": [
		"import",
		"unicorn",
	],

	"rules": {
		"unicorn/prefer-module": "error",
		// Reason: File paths and extensions must fully resolve for the current version of ESM
		"import/extensions": [
			"error",
			"always",
			// Packages will always be resolved by node or a bundler
			{
				ignorePackages: true,
			},
		],
	},

	"overrides": [
		{
			"files": [
				"**/*.{ts,tsx}",
			],
			"rules": {
				// Reason: `.js` extensions for TypeScript ESM will not resolve until build time
				"import/no-unresolved": "off",
			},
		},
	],
};
