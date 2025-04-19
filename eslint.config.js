import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ["**/*.{js,mjs,cjs,ts,vue}"],
	},
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs["flat/essential"],
	{
		files: ["**/*.vue"],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: "@typescript-eslint/parser",
				sourceType: "module",

				vueFeatures: {
					customMacros: ["definePage"],
				},
			},
		},
	},
	{
		rules: {
			"vue/multi-word-component-names": "off",
		},
	},
	{
		ignores: [
			"src/components/ui/**/*",
			"src/lib/shadcn/**/*",
			"node_modules/**/*",
			"*.config.js",
			"dist/*",
		],
	},
	{
		settings: {
			"import/core-modules": ["vue-router/auto-routes"],
		},
	},
];
