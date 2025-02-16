export const typescriptExtensions = "ts,cts,mts,tsx";

export const typescriptExtensionsFiles = [
	`**/*.{${typescriptExtensions}}`,
];

export const jsxExtensionsFiles = [
	// Reason: JSX in .js files is a disruptive pattern, and not supported with .ts anyways
	`**/*.{jsx,tsx}`,
];

export const explicitCommonJsExtensionsFiles = [
	"**/*.{cjs,cts}",
];

export const possibleModuleExtensionsFiles = [
	"**/*.{js,mjs,jsx,ts,mts,tsx}",
];

export const explicitModuleExtensionsFiles = [
	"**/*.{mjs,mts}",
];

export const possibleCommonJsExtensionsFiles = [
	"**/*.{js,cjs,jsx,ts,cts,tsx}",
];

export const allExtensions = "js,cjs,mjs,jsx,ts,cts,mts,tsx";

// Lint all files using these extension patterns
export const files = [
	`**/*.{${allExtensions}}`,
];

// Skip linting these file patterns
export const ignores = [
	"**/.vercel/",
	"**/.next/",
	"**/next-env.d.ts",
	"**/.turbo/",
	"coverage/",
	"**/.cache/",
];
