module.exports = {
	"plugins": [
		"node",
	],

	"extends": [
		"plugin:node/recommended",
		"plugin:evelyn/node-env",
	],

	"rules": {
		/*
			Node rules
			Supported rules: https://github.com/mysticatea/eslint-plugin-node#-rules
		*/
		// Modifications
		"node/no-path-concat": "error",
		"node/prefer-promises/fs": "warn",
		"node/no-sync": "warn",
	},
};
