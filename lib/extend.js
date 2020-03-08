/*
	ESlint only currently allows for top-level `extends` and spread would override instead of merge.
	Status: Canidate for depreciation
	See README.md#configs-applied-to-a-specific-path for more information
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
