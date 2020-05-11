const path = require("path");
const fs = require("fs");
const lodash = require("lodash");
const {promisify} = require("util");
const {CascadingConfigArrayFactory} = require("eslint/lib/cli-engine/cascading-config-array-factory");
const factory = new CascadingConfigArrayFactory();
const {ConfigDependency} = require("eslint/lib/cli-engine/config-array/config-dependency.js");

const dirToTestFrom = process.cwd(); // TODO: Add support for overriding, installing more deeply
const dummyFilePathToTestFrom = path.join(
	dirToTestFrom,
	"__placeholder__.js", // TODO: other ext configs? possible cli option --ext. How does this work with overrides? I thought it worked anyways, but need to check
);
const dummyConfig = require("eslint/conf/eslint-recommended.js");
const dummyConfigResolved = require.resolve("eslint/conf/eslint-recommended.js");

const ModuleResolver = require("eslint/lib/shared/relative-module-resolver");


const originalResolve = ModuleResolver.resolve;
ModuleResolver.resolve = function (moduleName, relativeToPath) {
	try {
		return originalResolve(moduleName, relativeToPath);
	} catch (error) {
		if (
			typeof error === "object" &&
			error !== null &&
			error.code === "MODULE_NOT_FOUND" &&
			moduleName.startsWith("eslint-config-")
		) {
			error.code = "_MODULE_NOT_FOUND"; // Break ESLint early throw
			return dummyConfigResolved;
		}
		throw error;
	}
};

const missingPlugins = [];
Object.defineProperties(ConfigDependency.prototype, {
	error: {
		set(error) {
			if (error && error.code === "MODULE_NOT_FOUND") {
				const {messageData: {pluginName, configName, importerName} = {
					pluginName: error.message.match(/Failed to load parser '([^']+)'/)[1],
					importerName: error.message.match(/declared in '([^']+)'/)[1],
				}} = error;
				missingPlugins.push({
					name: pluginName || configName,
					importTree: importerName.split(" » "),
				});
			}
			this._error = error;
		},
		get() {
			return null; // eslint-disable-line unicorn/no-null
		},
	},
	definition: {
		set(definition) {
			this._definition = definition || {
				configs: new Proxy({}, {get: () => dummyConfig}),
			};
		},
		get() {
			return this._definition;
		},
	},
	filePath: {
		set(filePath) {
			this._filePath = filePath || "./";
		},
		get() {
			return this._filePath;
		},
	},
});

// start process in `dirToTestFrom`
// only run if needed
`npm i -D`

const finalConfigArray = factory.getConfigArrayForFile(dummyFilePathToTestFrom);
console.log(missingPlugins);


// Promisified fs.writeFile
const writeFile = promisify(fs.writeFile);

// Turn into JSON, run predicate
const data = JSON.stringify(
	lodash.cloneDeepWith(
		JSON.parse(JSON.stringify(finalConfigArray)),
		(value, key) => ["rules"].includes(key) ? "CLEANED" : undefined
	),
	undefined,
	"\t",
) + "\n";

// Save the `finalConfigArray`
writeFile("debug_config-array.json", data, "utf8")
	// eslint-disable-next-line no-console
	.then(() => console.log("eslint-plugin-evelyn/save-config: Saved the config array to debug_config-array.json."))
	.catch(error => {
		if (error) {
			throw new Error("eslint-plugin-evelyn/save-config: Could not save the config array to a file." + error);
		}
	});

void(0);
