const {execSync} = require("child_process");

// Automatically `npm link` itself into its `node_modules` folder if not already linked
// - Is a module import/require side-effect
try {
	// eslint-disable-next-line node/no-extraneous-require
	require.resolve("eslint-plugin-evelyn");
} catch {
	execSync("npm link && npm link eslint-plugin-evelyn");
}
