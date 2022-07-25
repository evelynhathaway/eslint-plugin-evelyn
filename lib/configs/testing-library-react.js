module.exports = {
	"plugins": [
		"testing-library",
	],

	"extends": [
		"plugin:testing-library/react",
	],
	"rules": {
		"testing-library/no-debugging-utils": "warn",
		"testing-library/no-wait-for-empty-callback": "warn",
		"testing-library/prefer-wait-for": "error",
	},
};
