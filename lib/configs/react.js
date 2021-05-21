module.exports = {
	"plugins": [
		"react",
		"import",
		"react-hooks",
	],

	"extends": [
		"plugin:evelyn/jsx",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
	],

	"rules": {
		// Reason: Higher order components are bae. I don't want any shared config messing with chu baby
		"react/jsx-props-no-spreading": "off",
		"react/self-closing-comp": "error",
		// Reason: this rule catches nasty bugs
		"react-hooks/exhaustive-deps": "error",
		// Reason: Saved my butt when making a huge data table
		"react/no-array-index-key": "error",
		"react/button-has-type": "error",
		"react/prefer-stateless-function": "error",

		// Reason: styling
		"react/jsx-filename-extension": [
			"error",
			{
				"extensions": [
					".jsx",
					".tsx",
				],
			},
		],
		"react/jsx-pascal-case": [
			"error",
			{
				allowAllCaps: true,
			},
		],
		"react/jsx-wrap-multilines": [
			"error",
			{
				"declaration": "parens-new-line",
				"assignment": "parens-new-line",
				"return": "parens-new-line",
				"arrow": "parens-new-line",
				"condition": "parens-new-line",
				"logical": "parens-new-line",
				"prop": "parens-new-line",
			},
		],
		"react/jsx-first-prop-new-line": "error",
		"react/jsx-no-useless-fragment": "error",
		"react/jsx-no-script-url": "error",
		"react/jsx-equals-spacing": [
			"error",
			"never",
		],
		"react/jsx-curly-spacing": [
			"error",
			{
				"when": "never",
				"children": true,
			},
		],
		"react/jsx-no-comment-textnodes": "error",
		"react/jsx-curly-newline": "error",
		"react/jsx-closing-tag-location": "error",
		"react/jsx-closing-bracket-location": "error",
		"react/jsx-props-no-multi-spaces": "error",
		"react/jsx-boolean-value": [
			"error",
			"never",
		],
		"react/no-this-in-sfc": "error",
		"react/prefer-es6-class": [
			"error",
			"always",
		],
		"react/jsx-curly-brace-presence": [
			"error",
			"never",
		],
		"react/jsx-indent-props": [
			"error",
			"tab",
		],
		"react/jsx-indent": [
			"error",
			"tab",
			{
				checkAttributes: false,
				indentLogicalExpressions: true,
			},
		],
	},

	"settings": {
		"react": {
			"pragma": "React",
			"version": "detect",
			"flowVersion": "detect",
		},
	},
};
