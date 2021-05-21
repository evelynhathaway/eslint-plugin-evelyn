module.exports = {
	"configs": {
		"babel": require("./configs/babel"),
		"default": require("./configs/default"),
		"jest": require("./configs/jest"),
		"jsx": require("./configs/jsx"),
		"mocha": require("./configs/mocha"),
		"node": require("./configs/node"),
		"react": require("./configs/react"),
		"testing-library-react": require("./configs/testing-library-react"),
		"testing-library-vue": require("./configs/testing-library-vue"),
		"testing-library": require("./configs/testing-library"),
		"typescript": require("./configs/typescript"),
		"vue": require("./configs/vue"),
	},
	"rules": {
		"no-fallthrough": require("./rules/fixes/no-fallthrough"),
	},
};
