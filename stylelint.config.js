const sortOrderSmacss = require("stylelint-config-property-sort-order-smacss/generate");

module.exports = {
	plugins: ["stylelint-less", "stylelint-order"],
	extends: [
		"stylelint-config-standard",
		"stylelint-config-recommended-less",
		"stylelint-config-standard-vue",
		"stylelint-prettier/recommended",
	],
	overrides: [
		{
			files: ["*.less", "**/*.less"],
			customSyntax: "postcss-less",
		},
	],
	rules: {
		"order/order": ["custom-properties", "declarations"],
		"order/properties-order": [sortOrderSmacss()],
		// 不禁止空源（允许vue单文件组件中的空style标签）
		"no-empty-source": null,
		// 允许样式表中的重复选择器
		"no-duplicate-selectors": null,
	},
};
