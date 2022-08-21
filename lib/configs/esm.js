module.exports = {
	// Include unicorn and import plugin
	"plugins": [
		"import",
		"unicorn",
	],

	"rules": {
		// Reason: Error on use of any non-module API
		"unicorn/prefer-module": "error",
		// Reason: File paths and extensions must fully resolve for the current version of ESM
		"import/extensions": [
			"error",
			"always",
			// Packages will always be resolved by node or a bundler
			{
				ignorePackages: true,
				pattern: {
					ts: "never",
					cts: "never",
					mts: "never",
					tsx: "never",
				},
			},
		],
	},

	"overrides": [
		{
			"files": [
				"**/*.{cjs,cts}",
			],
			"rules": {
				// Reason: Using `.cjs` is an explicit opt-out of the package's default module behavior
				"unicorn/prefer-module": "off",
			},
		},
	],
};
