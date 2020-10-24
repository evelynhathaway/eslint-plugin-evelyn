module.exports = {
	"plugins": [
		"testing-library",
	],

	"extends": [
		"plugin:testing-library/recommended",
	],

	"rules": {
		"testing-library/no-debug": "warn",
		"testing-library/no-wait-for-empty-callback": "warn",
		"testing-library/prefer-wait-for": "error",
	},
};
