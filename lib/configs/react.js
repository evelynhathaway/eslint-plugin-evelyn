module.exports = {
	"plugins": [
		"react",
		"unicorn",
	],

	"extends": [
		"plugin:evelyn/browser",
		"plugin:evelyn/jsx",
		"plugin:react/recommended",
	],

	"settings": {
		"react": {
			"pragma": "React",
			"version": "detect",
			"flowVersion": "detect",
		},
	},

	"rules": {
		/*
			Unicorn rules
			Supported rules: https://github.com/sindresorhus/eslint-plugin-unicorn#rules
		*/
		// Allow Capcase filenames for React components
		"unicorn/filename-case": "off",
	},
};
