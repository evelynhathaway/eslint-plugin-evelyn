const fs = require("fs");
const {promisify} = require("util");

// Promisified fs.writeFile
const writeFile = promisify(fs.writeFile);

/*
	Require as the parent module (usually the .eslintrc.js configs file)

	- More consistent than `module.parent.require`, which sometimes doesn't resolve a
	  module that can be required from the parent
		- I first noticed this issue while using the above method from this project's
		  config file and triple checked the outputs of `require` and `require.resolve`
*/
const requireAsParent = function (modulePath) {
	const resolvedPath = require.resolve(modulePath, {
		paths: module.parent.paths,
	});

	return require(resolvedPath);
};

/*
	Import CascadingConfigArrayFactory class for mutation as if it was the parent module

	- Without requiring as the parent, it could require from the sandboxed node_modules
	  for this project's devDependencies if eslint-plugin-evelyn is a dependency
	- This is an alternative to mutating the module cache entry
		- This method works if the module isn't loaded yet
*/
const {CascadingConfigArrayFactory} = requireAsParent(
	"@eslint/eslintrc/lib/cascading-config-array-factory"
);


// Store original `_finalizeConfigArray` instance method from the prototype
const original_finalizeConfigArray = CascadingConfigArrayFactory.prototype._finalizeConfigArray;

const stealFinalConfigArray = function (predicate) {
	// Count the configs in the case of multiple exports
	let counter = 0;

	// Monkey-patch a "proxy" in place of the original
	CascadingConfigArrayFactory.prototype._finalizeConfigArray = function () {
		// Call original function with all of the arguments and `this` bound
		// - Store result to save and return back out
		const finalConfigArray = original_finalizeConfigArray.call(this, ...arguments);

		predicate(finalConfigArray, {counter});

		// Increment counter
		counter++;

		// Return the original result to the intended consumers of the class
		return finalConfigArray;
	};
};

const saveConfig = function (fileName, predicate = data => data) {
	stealFinalConfigArray(
		(finalConfigArray, {counter}) => {
			// Turn into JSON, run predicate
			const data = JSON.stringify(
				predicate(finalConfigArray),
				undefined,
				"\t",
			) + "\n";

			// Save the `finalConfigArray`
			fileName = fileName || `debug_config-array_${counter}.json`;
			writeFile(fileName, data, "utf8")
				// eslint-disable-next-line no-console
				.then(() => console.log(`eslint-plugin-evelyn/save-config: Saved the config array to ${fileName}.`))
				.catch(error => {
					if (error) {
						throw new Error("eslint-plugin-evelyn/save-config: Could not save the config array to a file." + error);
					}
				});
		}
	);
};

// Default export function
module.exports = saveConfig;
// Export utils
saveConfig.stealFinalConfigArray = stealFinalConfigArray;
