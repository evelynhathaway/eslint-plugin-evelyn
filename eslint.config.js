import eslintPluginEvelyn from "./lib/index.js";

export default [
	...eslintPluginEvelyn.configs.base,
	...eslintPluginEvelyn.configs.node,
	...eslintPluginEvelyn.configs.esm,
];
