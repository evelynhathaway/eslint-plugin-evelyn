module.exports = {
	// Include node plugin
	"plugins": [
		"node",
	],

	// Extend default recommended Node.js shareable config
	"extends": [
		"plugin:node/recommended",
	],

	"rules": {
		/*
			ESLint rules
			Supported rules: https://eslint.org/docs/rules/
		*/
		// Reason: unicorn implements a version ignoring hashbanged files
		"no-process-exit": "off",
		/*
			Node rules
			Supported rules: https://github.com/mysticatea/eslint-plugin-node#-rules
		*/
		// Reason: Syntax support isn't the same as support, and this syntax is often sugar on CommonJS
		"node/no-unsupported-features/es-syntax": "off",
		// Reason: Path concatenation errors
		"node/no-path-concat": "error",
		// Reason: Async/await and promises are usually easier to understand and use
		"node/prefer-promises/fs": "warn",
		"node/prefer-promises/dns": "warn",
		// Reason: Avoid synchronous methods that can block the thread
		"node/no-sync": "warn",
		// Reason: the import plugin handles import errors better
		"node/no-extraneous-import": "off",
		"node/no-extraneous-require": "off",
		"node/no-missing-import": "off",
		"node/no-missing-require": "off",
		"node/no-unpublished-import": "off",
		"node/no-unpublished-require": "off",
	},
};
