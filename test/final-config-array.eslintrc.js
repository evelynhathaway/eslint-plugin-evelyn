require("../lib/util/link");
const chalk = require("chalk");
// eslint-disable-next-line node/no-extraneous-require
const {stealFinalConfigArray} = require("eslint-plugin-evelyn/lib/util/save-config");


const alertAllErrors = function (configs) {
	let hadError = false;
	const alertIfError = object => {
		const error = object && object.error;
		if (!error) return;

		// eslint-disable-next-line no-console
		console.error(`\n${chalk.red(error.code)}: ${error.message}}`);
		hadError = true;
	};

	// Get all errors
	for (const config of configs) {
		alertIfError(config.parser);
		for (const key in config.plugins) {
			alertIfError(config.plugins[key]);
		}
	}

	// eslint-disable-next-line unicorn/no-process-exit
	if (hadError) process.exit(1);
};
stealFinalConfigArray(
	alertAllErrors
);


module.exports = require("../all-configs.eslintrc.js");
