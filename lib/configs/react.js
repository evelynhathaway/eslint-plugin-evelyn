module.exports = {
	// Include React plugins and import plugin
	"plugins": [
		"react",
		"import",
		"react-hooks",
	],

	"extends": [
		// Support JSX
		"plugin:evelyn/jsx",
		// React defaults (not maintained by the React team, but a good enough representation of best practices)
		"plugin:react/recommended",
		// Rules of hooks
		"plugin:react-hooks/recommended",
	],

	"rules": {
		// Reason: Implicit prop forwarding sucks, but React dev mode errors and TypeScript types solve most issues here while this rule blocks the use of higher order components, which we would like to use
		"react/jsx-props-no-spreading": "off",
		// Reason: this rule catches nasty bugs
		"react-hooks/exhaustive-deps": "error",
		// Reason: You can't assume React will understand a component array or assume all components are stateless
		"react/no-array-index-key": "error",
		// Reason: Performance and tricky lifecycle issues
		"react/no-unstable-nested-components": "error",
		// Reason: Make submit buttons explicit
		"react/button-has-type": "error",
		// Reason: Drive adoption of functional components when not using class features
		"react/prefer-stateless-function": "error",
		// Reason: Spending more time on TypeScript types is more beneficial than React prop types, even if they are beneficial
		"react/prop-types": "off",
		// Reason: Make JSX syntax explicit (related: https://twitter.com/sebmck/status/1080998883323342849)
		"react/jsx-filename-extension": [
			"error",
			{
				"extensions": [
					".jsx",
					".tsx",
				],
			},
		],
		// Reason: Prevents comments from being added to React component children
		"react/jsx-no-comment-textnodes": "error",
		// Reason: Styling
		"react/self-closing-comp": "error",
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
		"react/jsx-no-useless-fragment": [
			"error",
			// Reason: TypeScript support for components that return arrays, main app file
			{
				"allowExpressions": true,
			},
		],
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
		},
	},
};
