module.exports = {
	configs: {
		"babel": require("./configs/babel"),
		"browser": require("./configs/browser"),
		"built": require("./configs/built"),
		"default": require("./configs/default"),
		"extensions": require("./configs/extensions"),
		"jest": require("./configs/jest"),
		"json-comments": require("./configs/json-comments"),
		"json": require("./configs/json"),
		"jsx": require("./configs/jsx"),
		"mocha": require("./configs/mocha"),
		"node": require("./configs/node"),
		"react": require("./configs/react"),
		"source": require("./configs/source"),
		"typescript": require("./configs/typescript"),
	},
	rules: {
		"no-fallthrough": require("./rules/fixes/no-fallthrough"),
	},
};
