module.exports = {
	"plugins": [
		"node",
	],

	"extends": [
		"plugin:node/recommended",
	],

	"rules": {
		/*
			ESLint rules
			Supported rules: https://eslint.org/docs/rules/
		*/
		// Reason: unicorn implements a version ignoring hashbanged files
		"no-process-exit": "off",
		/*
			Node rules
			Supported rules: https://github.com/mysticatea/eslint-plugin-node#-rules
		*/
		// Modifications
		"node/no-path-concat": "error",
		"node/prefer-promises/fs": "warn",
		"node/no-sync": "warn",
		"node/no-missing-import": "off",
	},
};
