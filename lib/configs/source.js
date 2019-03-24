module.exports = {
	"plugins": [
		"node",
	],
	"rules": {
		/*
			Node rules
			Supported rules: https://github.com/mysticatea/eslint-plugin-node#-rules
		*/
		"node/no-unsupported-features/es-syntax": "off", // Disable upsupported features that will be transpiled
		"node/no-unsupported-features/es-builtins": "off", // Disable upsupported features that will be transpiled
	},
};
