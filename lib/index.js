module.exports = {
	"configs": {
		"babel": require("./configs/babel"),
		"browser-env": require("./configs/browser-env"),
		"browser": require("./configs/browser-env"), // Alias
		"default": require("./configs/default"),
		"extensions": require("./configs/extensions"),
		"jest": require("./configs/jest"),
		"json-comments": require("./configs/json-comments"),
		"json": require("./configs/json"),
		"jsx": require("./configs/jsx"),
		"markdown": require("./configs/markdown"),
		"mocha": require("./configs/mocha"),
		"node-env": require("./configs/node-env"),
		"node": require("./configs/node"),
		"react": require("./configs/react"),
		"source": require("./configs/source"),
		"testing-library": require("./configs/testing-library"),
		"typescript": require("./configs/typescript"),
		"vue": require("./configs/vue"),
	},
	"rules": {
		"no-fallthrough": require("./rules/fixes/no-fallthrough"),
	},
};
