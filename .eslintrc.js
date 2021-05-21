require("./lib/util/link");


module.exports = {
	"plugins": [
		"evelyn",
	],

	"extends": [
		"plugin:evelyn/default",
		"plugin:evelyn/node",
	],

	"ignorePatterns": [
		"lib/rules/fixes/*",
		"test/rules/fixes/*",
	],
};
