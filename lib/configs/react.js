module.exports = {
	"plugins": [
		"react",
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
};
