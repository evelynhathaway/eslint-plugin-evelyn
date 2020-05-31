require("./lib/util/link");

// eslint-disable-next-line node/no-extraneous-require
const {configs} = require("eslint-plugin-evelyn");


module.exports = {
	"plugins": [
		"evelyn",
	],

	// Output all configs in overrides
	"overrides": Object.keys(configs).map(key => ({files: key, extends: `plugin:evelyn/${key}`})),
};
