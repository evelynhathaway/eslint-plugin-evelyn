module.exports = {
	"extends": [
		"plugin:evelyn/node",
	],

	"plugins": [
		"mocha",
		"node",
	],

	"env": {
		"mocha": true,
	},

	"rules": {
		/*
			Node rules
			Supported rules: https://github.com/mysticatea/eslint-plugin-node#-rules
		*/
		"node/no-unpublished-require": "off", // Allow for dev dependencies
		"node/no-unsupported-features/es-builtins": "off", // Allow for unsupported features
		"node/no-unsupported-features/es-syntax": "off", // Allow for unsupported features
		/*
			Mocha rules
			Supported rules: https://github.com/lo1tuma/eslint-plugin-mocha/tree/master/docs/rules#rules
		*/
		"mocha/handle-done-callback": "error",
		"mocha/no-exclusive-tests": "error",
		"mocha/no-global-tests": "warn",
		"mocha/no-identical-title": "error",
		"mocha/no-mocha-arrows": "warn",
		"mocha/no-nested-tests": "error",
		"mocha/no-pending-tests": "warn",
		"mocha/no-return-and-callback": "error",
		"mocha/no-sibling-hooks": "error",
		"mocha/no-skipped-tests": "warn", // Allow skipping but shouldn't stay in codebase
		"mocha/no-top-level-hooks": "error",
	},
};
