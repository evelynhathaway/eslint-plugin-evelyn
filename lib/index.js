module.exports = {
	configs: {
		browser: require("./configs/browser"),
		built: require("./configs/built"),
		default: require("./configs/default"),
		jest: require("./configs/jest"),
		jsx: require("./configs/jsx"),
		mocha: require("./configs/mocha"),
		node: require("./configs/node"),
		react: require("./configs/react"),
		source: require("./configs/source"),
		typescript: require("./configs/typescript"),
	},
	rules: {
		"no-fallthrough": require("./rules/fixes/no-fallthrough"),
	},
};
