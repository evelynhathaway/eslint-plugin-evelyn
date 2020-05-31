module.exports = {
	"env": {
		"jest": true,
		"jest/globals": true,
	},

	"plugins": [
		"node",
		"jest",
	],

	"extends": [
		"plugin:evelyn/node",
		"plugin:jest/recommended",
		"plugin:jest/style",
		"plugin:evelyn/node-env",
	],
};
