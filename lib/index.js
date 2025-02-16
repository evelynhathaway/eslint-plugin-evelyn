import packageJson from "../package.json" with {type: "json"};
import base from "./configs/base.js";
import esm from "./configs/esm.js";
import jest from "./configs/jest.js";
import next from "./configs/next.js";
import node from "./configs/node.js";
import react from "./configs/react.js";
import testingLibraryReact from "./configs/testing-library-react.js";
import testingLibrary from "./configs/testing-library.js";
import typescript from "./configs/typescript.js";

const plugin = {
	meta: {
		name: packageJson.name,
		version: packageJson.version,
	},
	configs: {
		base,
		esm,
		jest,
		node,
		next,
		react,
		testingLibraryReact,
		testingLibrary,
		typescript,
	},
	rules: {},
	processors: {},
};

export default plugin;
