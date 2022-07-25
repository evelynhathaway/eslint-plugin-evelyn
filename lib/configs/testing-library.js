module.exports = {
	// Import testing library plugin
	"plugins": [
		"testing-library",
	],

	// Extend defaults for DOM Testing Library
	"extends": [
		"plugin:testing-library/dom",
	],

	"rules": {
		"testing-library/no-debugging-utils": "warn",
		"testing-library/no-wait-for-empty-callback": "warn",
		"testing-library/prefer-wait-for": "error",
	},
};
