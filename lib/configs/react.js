import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import {files} from "../files.js";

export default tseslint.config(
	{
		files,
		extends: [
			// React defaults (not maintained by the React team, but a good enough representation of best practices)
			eslintPluginReact.configs.flat.recommended,
			eslintPluginReact.configs.flat["jsx-runtime"],
			// Rules of hooks
			// - Currently doesn't support ESLint flat config with a one liner shared config
			{
				plugins: {
					"react-hooks": eslintPluginReactHooks,
				},
				rules: {...eslintPluginReactHooks.configs.recommended.rules},
			},
		],
		rules: {
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
			// Reason: Likely mistakenly adding an extraneous component
			"react/jsx-no-useless-fragment": [
				"error",
				// Reason: TypeScript support for components that return arrays, main app file
				{
					"allowExpressions": true,
				},
			],
			"react/jsx-no-script-url": "error",
			"react/jsx-boolean-value": [
				"error",
				"never",
			],
			"react/no-this-in-sfc": "error",
			"react/prefer-es6-class": [
				"error",
				"always",
			],
			// Reason: `target="_blank"` without `rel="noopener"` is a security risk on some browsers
			// - Once Implicit noopener is ubiquitous on all browsers for ages, this rule might be worth removing, but
			//   its explicit usage still may be valuable. Consider following Lighthouse recommendation.
			//   - See: https://caniuse.com/mdn-html_elements_a_implicit_noopener
			//   - See: https://developer.chrome.com/docs/lighthouse/best-practices/external-anchors-use-rel-noopener
			"react/jsx-no-target-blank": [
				"error",
				{
					// Reason: Removing the referrer for all browsers just to protect ancient browsers that do not have
					// noopener support is excessive
					// - Raises risk only on IE, Chrome < 49, Opera < 36, Firefox < 52, desktop Safari < 10.1 or iOS
					//   Safari < 10.3
					//   - For reference, iPhone 4s is the most recent iPhone that doesn't have iOS >= 10 according to
					//     https://iosref.com/ios
					"allowReferrer": true,
				},
			],
		},
		settings: {
			"react": {
				"pragma": "React",
				"version": "detect",
			},
		},
	}
);
