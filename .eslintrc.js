module.exports = {
	"plugins": [
		"evelyn",
	],

	"extends": [
		"plugin:evelyn/default",
		"plugin:evelyn/extensions",
		"plugin:evelyn/node",
		"plugin:evelyn/json",
	],

	"ignorePatterns": [
		"lib/rules/fixes/*",
		"test/rules/fixes/*",
	],
};
