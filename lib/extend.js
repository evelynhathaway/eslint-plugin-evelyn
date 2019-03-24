/*
	ESlint only currently allows for top-level `extends` and spread would override instead of merge.
	Maybe after eslint/eslint#8813 is fixed I'll move to using extends in the subfiles
*/
const lodash = require("lodash");

// extend(parent1, parent2, child)
module.exports = function (...objects) {
	// Require own submodules or other modules if it has a slash or `eslint` in it
	for (let i = 0; i < objects.length; i++) {
		if (typeof objects[i] === "string") {
			objects[i] = require(
				(/\\|\/|eslint/.test(objects[i]) ? "" : "./configs/") + objects[i]
			);
		}
	}

	// Extend parent with child in new object (don't mutate)
	return lodash.merge({}, ...objects);
};
