const {execSync} = require("child_process");
const Module = require("module");

// Automatically `npm link` itself into its `node_modules` folder if not already linked
// - Is a module import/require side-effect
try {
	// Using private API because the cache on a missing module is seemingly impossible by manipulating the `require.cache` or `Module._pathCache`
	Module._resolveFilename("eslint-plugin-evelyn", require.main, true);
} catch (error) {
	// eslint-disable-next-line no-console
	if (error.code === "MODULE_NOT_FOUND") {
		console.log("Linking eslint-plugin-evelyn to node_modules...");
		execSync("npm link && npm link eslint-plugin-evelyn");
	} else {
		throw error;
	}
}
