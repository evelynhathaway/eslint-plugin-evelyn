module.exports = {
	"parserOptions": {
		"sourceType": "script",
		"ecmaVersion": 5,
	},

	"plugins": [
		"node",
	],

	"rules": {
		/*
			Eslint rules
			Supported rules: https://eslint.org/docs/rules/
		*/
		"indent": "off",
		"no-var": "off",
		"no-unsafe-finally": "off",
		/*
			Node rules
			Supported rules: https://github.com/mysticatea/eslint-plugin-node#-rules
		*/
		"node/no-unsupported-features/es-syntax": "error",
		"node/no-unsupported-features/es-builtins": "error",
	},
};
