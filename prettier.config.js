module.exports = {
	// 在语句末尾打印分号
	semi: true,
	// 确保整个git存储库仅包含Prettier覆盖的文件中的Linux样式行结尾
	endOfLine: "lf",
	// 最大的行长度
	printWidth: 120,
	// 使用单引号而不是双引号
	singleQuote: false,
	// 散文包装
	proseWrap: "preserve",
	// 在多行逗号分隔的句法结构中尽可能打印尾随逗号
	trailingComma: "all",
	// 在唯一的箭头函数参数周围包含括号
	arrowParens: "always",
	// 打印对象字面量中括号之间的空格
	bracketSpacing: true,
	// 在JSX中使用单引号而不是双引号
	jsxSingleQuote: false,
	// 将>多行 HTML（HTML、JSX、Vue、Angular）元素放在最后一行的末尾，而不是单独放在下一行（不适用于自关闭元素）
	bracketSameLine: true,
	// 仅在需要时在对象属性周围添加引号
	quoteProps: "as-needed",
	// 在Vue文件中缩进脚本和样式标签
	vueIndentScriptAndStyle: true,
	// 在HTML、Vue和JSX中执行每行单个属性
	singleAttributePerLine: false,
	// 控制Prettier是否格式化嵌入在文件中的引用代码
	embeddedLanguageFormatting: "auto",
	// 指定 HTML、Vue、Angular 和 Handlebars 的全局空白敏感度
	htmlWhitespaceSensitivity: "strict",

	/*
	 * 在.editorconfig文件中设置indent_style将配置Prettier的useTabs
	 * 用制表符而不是空格缩进行
	 */
	useTabs: true,

	/*
	 * 在.editorconfig文件中设置indent_size或tab_width将配置Prettier的tabWidth
	 * 指定每个缩进级别的空格数
	 */
	tabWidth: 2,
};
