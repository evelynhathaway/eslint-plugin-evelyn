const {execSync} = require("child_process");
const path = require("path");
const {lstatSync} = require("fs");

// Automatically `npm link` itself into its `node_modules` folder if not already linked
// - Is a module import/require side-effect
try {
	// Using manual resolving to correct node_modules folder
	// - Because the cache on a missing module is seemingly impossible by manipulating the `require.cache` or `Module._pathCache` (I even tried using private APIs lol)
	lstatSync(
		path.resolve(
			__dirname,
			"../../node_modules/eslint-plugin-evelyn",
		)
	).isSymbolicLink();
} catch (error) {
	if (error.code === "ENOENT") {
		// eslint-disable-next-line no-console
		console.log("Linking eslint-plugin-evelyn to node_modules...");
		execSync("npm link && npm link eslint-plugin-evelyn");
	} else {
		throw error;
	}
}
