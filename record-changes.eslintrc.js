const lodash = require("lodash");
// eslint-disable-next-line node/no-extraneous-require
require("eslint-plugin-evelyn/lib/save-config")(
	"record-changes.json",
	data => lodash.cloneDeepWith(
		JSON.parse(JSON.stringify(data)),
		(value, key) => ["filePath", "basePath", "importerPath", "requireStack", "message"].includes(key) ? "CLEANED" : undefined
	),
);

// eslint-disable-next-line node/no-extraneous-require
module.exports = require("eslint-plugin-evelyn/all-configs.eslintrc.js");
