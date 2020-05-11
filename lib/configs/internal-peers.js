const path = require("path");
const ModuleResolver = require("eslint/lib/shared/relative-module-resolver");

const internalModulesPath = path.resolve(
	__dirname,
	"../../node_modules/",
);

const originalResolve = ModuleResolver.resolve;
ModuleResolver.resolve = function (moduleName, relativeToPath) {
	try {
		return originalResolve(moduleName, internalModulesPath);
	} catch (error) {
		if (
			typeof error === "object" &&
		error !== null &&
		error.code === "MODULE_NOT_FOUND"
		) {
			return originalResolve(moduleName, relativeToPath);
		}
		throw error;
	}
};

module.exports = {};
