module.exports = {
	"plugins": [
		"node",
	],

	"extends": [
		"plugin:node/recommended",
	],

	"env": {
		"es6": true,
		"node": true,
	},

	"parserOptions": {
		"ecmaVersion": 2020,
		"sourceType": "module",
	},

	"rules": {
		/*
			Node rules
			Supported rules: https://github.com/mysticatea/eslint-plugin-node#-rules
		*/
		// Modifications
		"node/no-extraneous-import": "error",
	},
};
