module.exports = {
	"plugins": [
		"react",
	],

	"extends": [
		"plugin:evelyn/browser",
		"plugin:evelyn/jsx",
		"plugin:react/recommended",
		"react-app",
	],

	"settings": {
		"react": {
			"pragma": "React",
			"version": "detect",
			"flowVersion": "detect",
		},
	},
};
