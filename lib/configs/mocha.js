module.exports = {
	"plugins": [
		"mocha",
	],

	"extends": [
		"plugin:evelyn/node",
		"plugin:mocha/recommended",
		"plugin:evelyn/node-env",
	],

	"env": {
		"mocha": true,
	},

	"rules": {
		/*
			Mocha rules
			Supported rules: https://github.com/lo1tuma/eslint-plugin-mocha/tree/master/docs/rules#rules
		*/
		"mocha/no-global-tests": "warn",
		"mocha/no-mocha-arrows": "warn",
		"mocha/no-pending-tests": "warn",
		"mocha/no-skipped-tests": "warn", // Allow skipping but shouldn't stay in codebase
	},
};
