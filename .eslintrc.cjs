/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/eslint-config-typescript",
		"@vue/eslint-config-prettier",
	],
	parserOptions: {
		ecmaVersion: "latest",
	},
	env: { browser: true, node: true, es2022: true },
	rules: {
		// 可能出现的问题 - 这些规则与代码中可能出现的逻辑错误有关

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/array-callback-return
		 * 强制要求在数组方法的回调中使用 return 语句
		 */
		"array-callback-return": ["error", { allowImplicit: false, checkForEach: false }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-await-in-loop
		 * 不允许在循环体中使用 await，没有充分利用 async/await 的并行化优势【具体原因参见链接】
		 */
		"no-await-in-loop": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-constant-binary-expression
		 * 总是评估为真或假的比较和总是短路或从不短路的逻辑表达式 (||, &&, ??)
		 */
		"no-constant-binary-expression": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-constructor-return
		 * 在类的构造函数中禁用 return 语句，但允许在流控制下不返回任何东西
		 */
		"no-constructor-return": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-duplicate-imports
		 * 禁止重复的 import 模块
		 * @off 类型导入时会有重复导入模块的情况
		 */
		"no-duplicate-imports": ["off", { includeExports: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-new-native-nonconstructor
		 * 禁止new具有全局非构造函数的运算符，防止使用 new 运算符意外调用本机 JavaScript 全局函数（Symbol、BigInt）
		 */
		"no-new-native-nonconstructor": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-promise-executor-return
		 * 不允许从 Promise 执行器函数中返回值，只允许不带值的 return，因为它是一个控制流语句
		 */
		"no-promise-executor-return": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-self-compare
		 * 禁止将一个变量与它自身进行比较
		 */
		"no-self-compare": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-template-curly-in-string
		 * 禁止在普通字符串中出现模版字符串里的变量形式，如 'Hello ${name}!'
		 */
		"no-template-curly-in-string": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-unmodified-loop-condition
		 * 循环内必须对循环条件有修改
		 */
		"no-unmodified-loop-condition": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-unreachable-loop
		 * 通过对循环体执行静态代码路径分析来检测和禁止最多只有一次迭代的循环
		 */
		"no-unreachable-loop": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-unused-private-class-members
		 * 报告未使用(私有字段或方法的值从未被读取/私有访问器从未被访问（读或写）)的私有类成员
		 */
		"no-unused-private-class-members": "warn",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-use-before-define
		 * 禁止在定义变量之前使用变量
		 */
		"no-use-before-define": ["error", "nofunc"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/require-atomic-updates
		 * 在分配可能已过时值的情况下报告对变量或属性的分配
		 */
		"require-atomic-updates": ["error", { allowProperties: false }],

		// 覆写 "eslint:recommended" 规则：

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-constant-condition
		 * @overwrite 禁止将常量作为分支条件判断中的测试表达式，但允许在循环中使用常量表达式
		 */
		"no-constant-condition": ["error", { checkLoops: false }],

		// 建议 - 这些规则提出了替代的做事方式

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/accessor-pairs
		 * 有 setter 必须有对应的 getter，有 getter 可以没有对应的 setter
		 */
		"accessor-pairs": ["error", { setWithoutGet: true, getWithoutSet: false }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/arrow-body-style
		 * 箭头函数能够省略 return 的时候，必须省略，在可以省略的地方不使用大括号
		 */
		"arrow-body-style": ["error", "as-needed", { requireReturnForObjectLiteral: false }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/block-scoped-var
		 * 将 var 定义的变量视为块作用域，禁止在块外使用，减少变量在其绑定上下文之外的使用，避免因变量提升而产生的影响
		 */
		"block-scoped-var": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/camelcase
		 * @off 使用不同的命名惯例（用下划线分隔单词）
		 */
		camelcase: "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/capitalized-comments
		 * 注释的首字母必须大写
		 * @off 不关心注释的语法风格
		 */
		"capitalized-comments": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/class-methods-use-this
		 * 标记不使用 this 的类方法，如果一个类的方法没有使用 this，它有时可以被做成一个静态函数，静态调用（MyClass.callStaticMethod())
		 */
		"class-methods-use-this": "warn",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/complexity
		 * 限制程序中允许的循环复杂性来减少代码的复杂性，当循环复杂度超过配置的阈值（默认为 20）时，将发出警告
		 */
		complexity: ["warn", { max: 5 }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/consistent-return
		 * 禁止函数在不同分支返回不同类型的值，要么指定值，要么只隐式返回 undefined
		 */
		"consistent-return": ["error", { treatUndefinedAsUnspecified: false }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/consistent-this
		 * 限制 this 的别名，不能捕捉嵌套的上下文
		 */
		"consistent-this": ["error", "that"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/curly
		 * 允许无大括号的单行 if、else if、else、for、while 或 do，而在其他情况下仍然强制使用大括号
		 */
		curly: ["error", "multi-line", "consistent"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/default-case
		 * 要求所有的 switch 语句都有一个 default case，如果没有 default 的情况，可以选择在最后一个 case 后加上 // no default 注释
		 */
		"default-case": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/default-case-last
		 * 强制要求 switch 语句中的 default 子句排在最后，只适用于已经有 default 子句的 switch 语句
		 */
		"default-case-last": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/default-param-last
		 * 将默认参数放在最后，允许函数调用省略可选的尾部参数
		 */
		"default-param-last": ["error"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/dot-notation
		 * 鼓励尽可能地使用点符号风格来保持代码的一致性和提高代码的可读性，避免出现不必要的 foo['bar']，尽量写成 foo.bar
		 */
		"dot-notation": ["error", { allowKeywords: false }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/eqeqeq
		 * 使用类型安全的相等运算符 === 和 !===，消除类型不安全的相等运算符 == 和 != 进行类型强制处理
		 */
		eqeqeq: ["error", "always"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/func-name-matching
		 * 函数赋值给变量的时候，函数名必须与变量名一致
		 */
		"func-name-matching": [
			"error",
			"always",
			{
				considerPropertyDescriptor: false,
				includeCommonJSModuleExports: false,
			},
		],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/func-names
		 * 如果名字没有按照 ECMAScript 规范自动分配的话，要求函数表达式有一个名字，或需要命名的生成器，以帮助调试
		 */
		"func-names": ["error", "as-needed", { generators: "as-needed" }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/func-style
		 * 强制只使用函数声明或只使用函数表达式
		 * @off 函数风格不应该强制性进行选择
		 */
		"func-style": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/grouped-accessor-pairs
		 * 要求在对象字面、类声明和类表达式中对同一属性的访问函数进行分组定义，要求 setter 在 getter 之前定义，但并不强制要求 getter 或 setter 的配对存在
		 */
		"grouped-accessor-pairs": ["error", "setBeforeGet"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/guard-for-in
		 * 用 for in 循环遍历对象将包括通过原型链继承的属性，for in 内部必须有 hasOwnProperty，防止因使用 for in 循环而不对循环中的结果进行过滤而可能产生的意外行为
		 */
		"guard-for-in": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/id-denylist
		 * 不允许在赋值和 function 定义中使用指定的标识符，捕获变量声明、函数声明、创建对象时分配给对象的属性、类字段、类方法，不捕获函数调用、对象属性
		 */
		"id-denylist": ["error", "data", "callback"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/id-length
		 * 强制执行最小或最大标识符长度公约，忽略属性名的标识符长度约定
		 */
		"id-length": ["error", { min: 2, max: 24, properties: "never" }],

		/*
		 * https://pashaladizh-hans.eslint.org/docs/latest/rules/id-match
		 * 要求赋值和 function 定义中的标识符与指定正则表达式匹配
		 * @off 三方库标识符风格不唯一
		 */
		"id-match": ["off", "^[a-z]+([A-Z][a-z]+)*$"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/init-declarations
		 * 在声明过程中强制或消除变量的初始化
		 * @off 不关心变量如何初始化
		 */
		"init-declarations": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/logical-assignment-operators
		 * 要求或不允许逻辑赋值运算符简写
		 * @off 允许根据具体情况选择更具可读性的样式
		 */
		"logical-assignment-operators": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/max-classes-per-file
		 * 每个文件只能包含特定数量类，而不能有更多的，忽略类的表达
		 */
		"max-classes-per-file": ["error", { max: 1, ignoreExpressions: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/max-depth
		 * 代码块嵌套的深度禁止超过 4 层，默认为 4，以减少代码的复杂性
		 */
		"max-depth": ["error", 4],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/max-lines
		 * 规定了每个文件的最大行数，以帮助维护和减少复杂性，默认为 300，忽略纯粹由空白或只包含注释构成的行
		 */
		"max-lines": ["error", { max: 350, skipBlankLines: true, skipComments: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/max-lines-per-function
		 * 强制规定了每个函数的最大行数，默认为 50，以帮助维护和降低复杂性，忽略纯粹由空白或只包含注释构成的行，包括任何包含在 IIFEs 中的代码
		 */
		"max-lines-per-function": ["error", { max: 50, skipBlankLines: true, skipComments: true, IIFEs: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/max-nested-callbacks
		 * 强制规定了回调可以嵌套的最大深度，以提高代码的清晰度，回调函数嵌套禁止超过 3 层，多了请用 async await 替代
		 */
		"max-nested-callbacks": ["error", 3],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/max-params
		 * 强制规定了函数定义中允许的最大参数数，默认为 3
		 */
		"max-params": ["error", 3],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/max-statements
		 * 强制规定了功能块中允许的最大语句数，默认为 10，忽略顶级函数
		 */
		"max-statements": ["error", 10, { ignoreTopLevelFunctions: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/multiline-comment-style
		 * 为多行注释强制执行一种特定的风格，不允许连续地行注释，支持块注释，要求块状注释在每行之前有一个对齐的 * 字符
		 */
		"multiline-comment-style": ["error", "starred-block"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/new-cap
		 * 要求构造函数名称以大写字母开头，某些内置标识符（Array、Boolean、Date、Error等）不受此规则约束
		 */
		"new-cap": ["error", { newIsCap: true, capIsNew: true, properties: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-alert
		 * 使用 alert、prompt 和 confirm 函数时警告（生产环境禁止使用）
		 */
		"no-alert": "warn",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-array-constructor
		 * 禁止使用 Array 构造函数，因为存在单参数的隐患，而且 Array 全局变量可能会被重新定义
		 */
		"no-array-constructor": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-bitwise
		 * 不允许使用位运算符，JavaScript 中使用位运算符的情况非常少，预防输入 && 或 || 时手抖，允许使用 ~ 以进行类型转换等
		 */
		"no-bitwise": ["error", { allow: ["~"] }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-caller
		 * 禁止使用 arguments.caller 和 arguments.callee 来阻止使用废弃的和次优的代码
		 */
		"no-caller": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-confusing-arrow
		 * 禁止出现难以理解的箭头函数，将小括号内的语法视作有效的“防止混淆”语法，允许箭头函数有 0 个或 1 个以上的参数，或者参数不是标识符
		 */
		"no-confusing-arrow": ["error", { allowParens: true, onlyOneSimpleParam: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-console
		 * 对 console 对象的方法进行调用或赋值时警告（生产环境禁止使用）
		 */
		"no-console": "warn",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-restricted-syntax
		 * 禁止使用特定的语法
		 * @off 暂不禁用指定语法
		 */
		"no-restricted-syntax": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-continue
		 * 禁用 continue 语句
		 * @off 常用
		 */
		"no-continue": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-div-regex
		 * 消除除法运算符的歧义，以免混淆用户，禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
		 * @off 有代码高亮时，在阅读这种代码时，不会产生歧义或理解上的困难
		 */
		"no-div-regex": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-else-return
		 * 突出显示在含有返回语句的 if 后面不必要的代码块，当遇到在一连串的 if 后面有一个 else，而这些 if 都包含 return 语句时，它将发出警告，允许在返回后有 else if 块
		 */
		"no-else-return": ["error", { allowElseIf: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-empty-function
		 * 不允许有空函数，除非是将一个空函数设置为某个项的默认值
		 */
		"no-empty-function": ["error", { allow: [] }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-empty-static-block
		 * 不允许空静态块，忽略包含注释的静态块
		 */
		"no-empty-static-block": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-eq-null
		 * 确保对 null 的比较只匹配 null，而不匹配 undefined 来减少潜在错误和不需要的行为，必须使用 foo === null 或 foo !== null
		 */
		"no-eq-null": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-eval
		 * 禁止使用 eval() 函数来防止潜在的危险、不必要和缓慢的代码
		 */
		"no-eval": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-extend-native
		 * 不允许直接修改内置对象的原型，但可以指定一个允许扩展的内置程序列表
		 */
		"no-extend-native": ["error", { exceptions: [] }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-extra-bind
		 * 避免不必要地使用 bind()，如当一个立即调用的函数表达式（IIFE）使用 bind() 并且没有适当的 this 值时，将发出警告
		 * 注意：不会标记包括函数参数绑定在内的 bind() 的用法，箭头函数不能使用 bind() 来设置其 this 值
		 */
		"no-extra-bind": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-extra-label
		 * 消除不必要的标签 label:
		 */
		"no-extra-label": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-floating-decimal
		 * 表示小数时，禁止省略 0，比如 .5
		 */
		"no-floating-decimal": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-implicit-coercion
		 * 禁止使用 !! ~ 等难以理解的运算符，仅允许使用 !!
		 * @off 使用这些运算符进行类型转换时会更清晰
		 */
		"no-implicit-coercion": ["off", { allow: ["!!", "+"] }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-implicit-globals
		 * 禁止在全局作用域下定义变量或申明函数
		 */
		"no-implicit-globals": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-implied-eval
		 * 禁止在 setTimeout 或 setInterval 中传入字符串参数，如 setTimeout('alert("Hi!")', 100);
		 */
		"no-implied-eval": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-inline-comments
		 * 禁止在代码后添加内联注释
		 */
		"no-inline-comments": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-invalid-this
		 * 在严格模式下，类或类状对象之外的 this 关键字可能是 undefined，并引发 TypeError，禁止在类或类似类的对象之外的地方使用 this
		 */
		"no-invalid-this": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-iterator
		 * 防止因使用 __iterator__ 属性而可能产生的错误，该属性现在已经过时，应该使用 ECMAScript 6 迭代器和生成器来代替
		 */
		"no-iterator": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-label-var
		 * 禁止 label 名称与定义过的变量重复
		 */
		"no-label-var": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-labels
		 * 消除 JavaScript 中标签语句的使用
		 */
		"no-labels": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-lone-blocks
		 * 禁止使用没必要的 {} 作为代码块，消除脚本顶层或其他区块内不必要的、可能引起混淆的区块
		 */
		"no-lone-blocks": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-lonely-if
		 * 禁用 if 语句作为 else 块的唯一语句
		 * @off else 中单独的 if 可以把逻辑表达得更清楚
		 */
		"no-lonely-if": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-loop-func
		 * 不允许循环中的任何函数包含不安全的引用（例如对外部作用域的修改变量）
		 */
		"no-loop-func": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-magic-numbers
		 * 禁止使用 magic numbers，允许数组索引使用的数字、默认值分配中使用的数字，不在数字的变量声明中检查 const 关键字，设置对象属性时不检测数字
		 * @off 过于严格
		 */
		"no-magic-numbers": [
			"off",
			{
				ignoreArrayIndexes: true,
				ignoreDefaultValues: true,
				enforceConst: false,
				detectObjects: false,
			},
		],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-mixed-operators
		 * 禁止混用不同的操作符，比如 let foo = a && b < 0 || c > 0 || d + 1 === 0
		 */
		"no-mixed-operators": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-multi-assign
		 * 禁止连续赋值，比如 a = b = c = 5，允许不包括在声明中初始化变量或初始化类字段的链
		 */
		"no-multi-assign": ["error", { ignoreNonDeclaration: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-multi-str
		 * 禁止使用 \ 来换行字符串，防止使用多行字符串
		 */
		"no-multi-str": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-negated-condition
		 * 禁止当 if 语句有一个 else 分支时或在三元表达式中有否定的表达式，使代码更易读
		 */
		"no-negated-condition": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-nested-ternary
		 * 禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
		 * @off 比较常用
		 */
		"no-nested-ternary": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-new
		 * 不允许使用 new 关键字的构造函数调用而不把产生的对象分配给一个变量
		 */
		"no-new": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-new-func
		 * 禁止使用 new Function，比如 let x = new Function("a", "b", "return a + b");
		 */
		"no-new-func": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-new-object
		 * 禁止直接 new Object，发挥对象字面形式的字节节省和简洁性
		 */
		"no-new-object": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-new-wrappers
		 * 禁止使用 new 来生成 String, Number 或 Boolean【具体原因参见链接】
		 */
		"no-new-wrappers": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-octal-escape
		 * 不允许在字符串字面中使用八进制转义序列
		 */
		"no-octal-escape": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-param-reassign
		 * 禁止对函数的参数重新赋值，防止因修改或重新分配函数参数而引起的非预期行为
		 */
		"no-param-reassign": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-plusplus
		 * 禁止使用 ++ 或 --
		 * @off 常用
		 */
		"no-plusplus": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-proto
		 * 禁止使用 __proto__，__proto__ 属性在 ECMAScript 3.1 中已经被废弃，使用 Object.getPrototypeOf 和 Object.setPrototypeOf 代替
		 */
		"no-proto": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-restricted-exports
		 * 不允许指定的名称被用作出口的名称，默认不禁止任何名字，只有在配置中指定的名字才会被禁止
		 * 并不禁止 export default 声明，如果将 "default" 配置为限制性名称，该限制将仅适用于命名的导出声明
		 * @off 无需限制
		 */
		"no-restricted-exports": ["off", { restrictedNamedExports: ["default"] }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-restricted-globals
		 * 禁止使用指定的全局变量名称
		 * @off 无需限制
		 */
		"no-restricted-globals": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-restricted-imports
		 * 禁止 import 指定的模块
		 * @off 无需限制
		 */
		"no-restricted-imports": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-restricted-properties
		 * 禁止使用指定的对象属性
		 * @off 无需限制
		 */
		"no-restricted-properties": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-return-assign
		 * 禁止在 return 语句里赋值，除非它们被括在括号内
		 */
		"no-return-assign": ["error"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-return-await
		 * 禁止在 return 语句里使用 await，防止由于缺乏对 async function 语义的理解而可能产生的常见性能危险
		 */
		"no-return-await": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-script-url
		 * 禁止出现 location.href = 'javascript:void(0)';
		 */
		"no-script-url": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-sequences
		 * 禁止使用逗号操作符，不包括在 for 语句的初始化或更新部分、表达式序列被明确地包裹在圆括号中
		 */
		"no-sequences": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-shadow
		 * 禁止变量名与上层作用域内的定义过的变量重复
		 * @off 很多时候函数的形参和传参是同名的
		 */
		"no-shadow": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-ternary
		 * 不允许三元运算符
		 * @off 常用
		 */
		"no-ternary": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-throw-literal
		 * 抛出异常时保持一致性，不允许抛出不可能是 Error 对象的字面和其他表达式
		 */
		"no-throw-literal": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-undef-init
		 * 消除初始化为 undefined 的 var 和 let 变量声明
		 */
		"no-undef-init": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-undefined
		 * 禁止对 undefined 重新赋值
		 */
		"no-undefined": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-underscore-dangle
		 * 不允许在 this 对象、super 对象、this.constructor 对象的成员中使用悬空的下划线
		 * 允许在方法名称、es2022 类字段名、函数参数名称中使用悬空的下划线
		 */
		"no-underscore-dangle": [
			"error",
			{
				allowAfterThis: false,
				allowAfterSuper: false,
				allowAfterThisConstructor: false,
				enforceInMethodNames: false,
				enforceInClassFields: false,
				allowFunctionParams: true,
			},
		],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-unneeded-ternary
		 * 当存在更简单的替代方案时，不允许三元运算符
		 */
		"no-unneeded-ternary": ["error", { defaultAssignment: false }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-unused-expressions
		 * 消除对程序状态没有影响的未使用表达式
		 */
		"no-unused-expressions": [
			"error",
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
				enforceForJSX: true,
			},
		],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-useless-call
		 * 禁止不必要的调用.call()和.apply()，函数调用可以写成 Function.prototype.call() 和 Function.prototype.apply()，但是比正常的函数调用慢
		 */
		"no-useless-call": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-useless-computed-key
		 * 禁止出现没必要的计算键名，比如 let a = { ['0']: 0 }; 并禁止在类字段、类方法、类 getter 和类 setter 中使用不必要地计算键
		 */
		"no-useless-computed-key": ["error", { enforceForClassMembers: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-useless-concat
		 * 禁止不必要的文字或模板文字串联
		 */
		"no-useless-concat": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-useless-constructor
		 * 禁止不必要的构造函数，比如 constructor(value) { super(value) }，ES2015 会提供默认的类构造函数
		 */
		"no-useless-constructor": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-useless-rename
		 * 不允许将导入、导出和解构分配重命名为相同的名称，比如 let { foo: foo } = bar;
		 */
		"no-useless-rename": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-useless-return
		 * 禁止冗余返回语句
		 */
		"no-useless-return": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-var
		 * 禁止使用 var
		 */
		"no-var": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-void
		 * 禁止使用 void
		 */
		"no-void": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-warning-comments
		 * 在评论中指定条款时警告，如待办或待修复等
		 */
		"no-warning-comments": ["warn", { terms: ["todo", "fixme"], location: "anywhere" }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/object-shorthand
		 * 强制尽可能使用速记
		 */
		"object-shorthand": ["error", "always"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/one-var
		 * 禁止变量申明时用逗号一次申明多个
		 */
		"one-var": ["error", "never"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/one-var-declaration-per-line
		 * 变量申明必须每行一个，忽略 for 循环条件中的变量声明
		 */
		"one-var-declaration-per-line": ["error", "always"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/operator-assignment
		 * 尽可能要求赋值运算符简写
		 */
		"operator-assignment": ["error", "always"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/prefer-arrow-callback
		 * 推荐使用箭头函数作为回调或函数参数的函数表达式，禁止使用命名函数作为回调或函数参数，允许包含this的函数表达式用作回调，只要相关函数未明确绑定即可
		 */
		"prefer-arrow-callback": ["error", { allowNamedFunctions: false, allowUnboundThis: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/prefer-const
		 * 申明后不再被修改的变量必须使用 const 来申明
		 */
		"prefer-const": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/prefer-destructuring
		 * 强制使用解构，而不是通过成员表达式访问属性
		 * @off 无需强制要求
		 */
		"prefer-destructuring": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/prefer-exponentiation-operator
		 * 不允许调用 Math.pow 而建议改用 ** 运算符
		 */
		"prefer-exponentiation-operator": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/prefer-named-capture-group
		 * 在正则表达式中强制使用命名捕获组
		 */
		"prefer-named-capture-group": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/prefer-numeric-literals
		 * 禁止parseInt()并Number.parseInt()支持二进制、八进制和十六进制文字
		 */
		"prefer-numeric-literals": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/prefer-object-has-own
		 * 禁止使用 Object.prototype.hasOwnProperty.call() 而推荐使用 Object.hasOwn()
		 */
		"prefer-object-has-own": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/prefer-object-spread
		 * 禁止使用带有对象字面量的 Object.assign 作为第一个参数，而更喜欢使用对象扩展
		 */
		"prefer-object-spread": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/prefer-promise-reject-errors
		 * Promise 的 reject 中必须传入 Error 对象，而不是字面量，使用 Error 对象作为 Promise 拒绝的原因，以确保 Promises 仅被 Error 对象拒绝
		 */
		"prefer-promise-reject-errors": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/prefer-regex-literals
		 * 禁止使用RegExp构造函数以支持正则表达式文字
		 */
		"prefer-regex-literals": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/prefer-rest-params
		 * 必须使用 ...args 而不是 arguments
		 */
		"prefer-rest-params": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/prefer-spread,
		 * 必须使用 ... 而不是 apply，比如 foo(...args)
		 */
		"prefer-spread": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/prefer-template
		 * 必须使用模版字符串而不是字符串连接
		 */
		"prefer-template": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/quote-props
		 * 在对象字面量属性名称周围加上引号
		 */
		"quote-props": ["error", "as-needed", { keywords: false, unnecessary: true, numbers: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/radix
		 * parseInt 必须传入第二个参数
		 */
		radix: "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/require-await
		 * 禁止没有 await 表达式的异步函数
		 */
		"require-await": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/require-unicode-regexp
		 * 在 RegExp 上强制使用u标志
		 * @off 无需强制使用，JavaScript 正则表达式可以容忍语法错误
		 */
		"require-unicode-regexp": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/sort-imports
		 * import 必须按规则排序
		 * @off
		 */
		"sort-imports": [
			"error",
			{
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ["none", "all", "single", "multiple"],
				allowSeparatedGroups: true,
			},
		],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/sort-keys
		 * 对象字面量的键名必须排好序
		 * @off 某些场景下强制排序会影响阅读
		 */
		"sort-keys": [
			"off",
			"asc",
			{
				caseSensitive: true,
				minKeys: 2,
				natural: false,
				allowLineSeparatedGroups: true,
			},
		],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/sort-vars
		 * 变量申明必须排好序
		 */
		"sort-vars": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/spaced-comment
		 * 注释的斜线或 * 后必须有空格
		 */
		"spaced-comment": ["error", "always", { block: { exceptions: ["*"], balanced: true } }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/strict
		 * 使用严格模式
		 */
		strict: ["error"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/symbol-description
		 * 在创建符号时需要描述
		 */
		"symbol-description": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/vars-on-top
		 * 要求var声明放在其包含范围的顶部
		 */
		"vars-on-top": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/yoda
		 * 要求“Yoda”条件
		 */
		yoda: "error",

		// 布局和格式 - 这些规则关心代码的外观而不是代码的执行方式

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/array-bracket-newline
		 * 配置在数组括号的开头和结尾之前换行的格式
		 */
		"array-bracket-newline": ["error", { multiline: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/array-bracket-spacing
		 * 数组的括号内的前后禁止有空格
		 */
		"array-bracket-spacing": ["error", "never"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/array-element-newline
		 * 配置数组的元素之间的换行格式
		 * @off 允许一行包含多个元素，方便大数量的数组的书写
		 */
		"array-element-newline": ["off", { multiline: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/arrow-parens
		 * 要求箭头函数参数周围可以省略括号的地方不使用圆括号，在函数体处于指令块中（由大括号包围）时要求使用小括号
		 */
		"arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/arrow-spacing
		 * 箭头函数的箭头前后必须有空格
		 */
		"arrow-spacing": ["error", { before: true, after: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/block-spacing
		 * 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') }
		 */
		"block-spacing": ["error", "always"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/brace-style
		 * 执行 one true brace 大括号风格，并允许一个区块的开头和结尾括号在同一行
		 */
		"brace-style": ["error", "1tbs", { allowSingleLine: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/comma-dangle
		 * 当最后一个元素或属性在与结尾的 ] 或 } 不同行时，要求使用尾随逗号，当最后一个元素或属性与结尾的 ] 或 }在同一行时，不允许使用尾随逗号
		 */
		"comma-dangle": ["error", "always-multiline"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/comma-spacing
		 * 使变量声明、数组字面、对象字面、函数参数和序列中的逗号前禁止有空格，逗号后必须要有空格
		 */
		"comma-spacing": ["error", { before: false, after: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/comma-style
		 * 要求在数组元素、对象属性或变量声明之后并在同一行中使用逗号。
		 */
		"comma-style": ["error", "last"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/computed-property-spacing
		 * 用作对象的计算属性时，中括号内的首尾禁止有空格
		 */
		"computed-property-spacing": ["error", "never"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/dot-location
		 * 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
		 */
		"dot-location": ["error", "property"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/eol-last
		 * 要求文件不以换行结尾
		 */
		"eol-last": ["error", "always"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/func-call-spacing
		 * 不允许在函数名和括号开头之间有空格
		 */
		"func-call-spacing": ["error", "never"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/function-call-argument-newline
		 * 不允许在函数调用的参数之间换行
		 */
		"function-call-argument-newline": ["error", "never"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/function-paren-newline
		 * 不允许在函数参数或参数的括号内使用换行符
		 */
		"function-paren-newline": ["error", "never"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/generator-star-spacing
		 * generator 的 * 前面禁止有空格，后面必须有空格
		 */
		"generator-star-spacing": [
			"error",
			{
				before: false,
				after: true,
				anonymous: "neither",
				method: { before: true, after: true },
			},
		],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/implicit-arrow-linebreak
		 * 不允许在箭头函数体前有换行
		 */
		"implicit-arrow-linebreak": ["error", "beside"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/indent
		 * 配置缩进
		 * @off
		 * 指定为tab：与.vue的<script>标签缩进有冲突
		 * 参见：https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/script-indent.md
		 * 指定为space时与其它规则冲突等
		 */
		indent: "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/jsx-quotes
		 * jsx 中的属性必须用双引号
		 */
		"jsx-quotes": ["error", "prefer-double"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/key-spacing
		 * 对象字面量中冒号前面禁止有空格，后面必须有空格
		 */
		"key-spacing": ["error", { beforeColon: false, afterColon: true, mode: "strict" }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/keyword-spacing
		 * 关键字前后必须有空格
		 */
		"keyword-spacing": ["error", { before: true, after: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/line-comment-position
		 * 单行注释必须放在代码上方
		 */
		"line-comment-position": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/linebreak-style
		 * 限制换行符为 LF，使代码库中的行尾一致，与操作系统、VCS 或编辑器无关，\n 代表 LF
		 */
		"linebreak-style": ["error", "unix"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/lines-around-comment
		 * 块注释前必须有一个空行
		 */
		"lines-around-comment": ["error", { beforeBlockComment: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/lines-between-class-members
		 * 在类成员之间强制执行行来提高可读性
		 */
		"lines-between-class-members": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/max-len
		 * 限制一行的长度，以提高代码的可读性和可维护性
		 */
		"max-len": ["error", { code: 120, tabWidth: 2 }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/max-statements-per-line
		 * 限制每行允许的最大语句数
		 */
		"max-statements-per-line": ["error", { max: 1 }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/multiline-ternary
		 * 如果表达式跨越多行，则在三元表达式的操作数之间强制使用新行
		 */
		"multiline-ternary": ["error", "always-multiline"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/new-parens
		 * 使用 new 关键字调用没有参数的构造函数时，强制使用括号 new Person()
		 */
		"new-parens": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/newline-per-chained-call
		 * 要求在方法链或深层成员访问中的每个调用后都有一个换行，不包括像 instance[something] 这样的计算属性访问
		 */
		"newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-extra-parens
		 * 限制了括号的使用，只在有必要的地方使用，忽略正则字词、箭头函数参数
		 */
		"no-extra-parens": [
			"error",
			"all",
			{
				conditionalAssign: true,
				returnAssign: false,
				nestedBinaryExpressions: false,
				ignoreJSX: "single-line",
				enforceForArrowConditionals: false,
				enforceForSequenceExpressions: false,
				enforceForNewInMemberExpressions: false,
				enforceForFunctionPrototypeMethods: false,
			},
		],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-multi-spaces
		 * 不允许在逻辑表达式、条件表达式、声明、数组元素、对象属性、序列和函数参数周围有多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
		 */
		"no-multi-spaces": [
			"error",
			{
				ignoreEOLComments: true,
				exceptions: {
					Property: true,
					BinaryExpression: false,
					VariableDeclarator: true,
					ImportDeclaration: true,
				},
			},
		],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-multiple-empty-lines
		 * 禁止出现超过三行的连续空行
		 */
		"no-multiple-empty-lines": ["error", { max: 3, maxEOF: 1, maxBOF: 1 }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-tabs
		 * 不允许使用制表符，包括在注释中
		 * @0ff 无需禁止
		 */
		"no-tabs": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-trailing-spaces
		 * 不允许在行末有尾随空格（空格、制表符和其他 Unicode 空白字符）
		 */
		"no-trailing-spaces": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/no-whitespace-before-property
		 * 禁止属性前有空格，比如 foo. bar()
		 */
		"no-whitespace-before-property": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/nonblock-statement-body-position
		 * 禁止 if 后面不加大括号而写两行代码
		 */
		"nonblock-statement-body-position": ["error", "beside", { overrides: { while: "below" } }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/object-curly-newline
		 * 要求在 { 和其后面的标记之间，以及在 } 和其前面的对象字面或结构化赋值的标记之间进行换行
		 */
		"object-curly-newline": ["error", { multiline: true, consistent: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/object-curly-spacing
		 * 对象字面量只有一行时，大括号内的首尾必须有空格
		 */
		"object-curly-spacing": ["error", "always", { arraysInObjects: true, objectsInObjects: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/object-property-newline
		 * 对象字面量内的属性每行必须只有一个
		 * @off 无需限制
		 */
		"object-property-newline": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/operator-linebreak
		 * 需要换行的时候，操作符必须放在行首
		 */
		"operator-linebreak": ["error", "before"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/padded-blocks
		 * 代码块首尾必须空行
		 * @off 无需限制
		 */
		"padded-blocks": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/padding-line-between-statements
		 * 限制语句之间的空行规则，比如变量定义完之后必需要空行
		 * @off 无需限制
		 */
		"padding-line-between-statements": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/quotes
		 * 尽可能使用双引号
		 */
		quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/rest-spread-spacing
		 * 在扩展运算符和其表达式之间不允许有空格
		 */
		"rest-spread-spacing": ["error", "never"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/semi
		 * 结尾必须有分号
		 */
		semi: ["error", "always"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/semi-spacing
		 * 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
		 * @off 当只有 import 语句时会意外的报错
		 */
		"semi-spacing": ["off", { before: false, after: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/semi-style
		 * 分号必须写在行尾，禁止在行首出现
		 */
		"semi-style": ["error", "last"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/space-before-blocks
		 * if, function 等的大括号之前必须要有空格，比如 if (a) {
		 */
		"space-before-blocks": ["error", "always"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/space-before-function-paren
		 * function 的小括号之前必须要有空格，不检查异步箭头函数表达式
		 */
		"space-before-function-paren": ["error", { anonymous: "never", named: "never", asyncArrow: "always" }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/space-in-parens
		 * 小括号内的首尾禁止有空格
		 */
		"space-in-parens": ["error", "never"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/space-infix-ops
		 * 操作符左右必须有空格，比如 let sum = 1 + 2;
		 */
		"space-infix-ops": "error",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/space-unary-ops
		 * new, typeof 等后面必须有空格，++, -- 等禁止有空格
		 */
		"space-unary-ops": ["error", { words: true, nonwords: false }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/switch-colon-spacing
		 * case 的冒号前禁止有空格，冒号后必须有空格
		 */
		"switch-colon-spacing": ["error", { after: true, before: false }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/template-curly-spacing
		 * ${name} 内的首尾禁止有空格
		 */
		"template-curly-spacing": ["error", "never"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/template-tag-spacing
		 * 模版字符串的 tag 之后禁止有空格，比如 tag`Hello World`
		 */
		"template-tag-spacing": ["error", "never"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/unicode-bom
		 * 文件开头禁止有 BOM
		 */
		"unicode-bom": ["error", "never"],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/wrap-iife
		 * 立即执行的函数必须符合如下格式 (function () { alert('Hello') })()
		 */
		"wrap-iife": ["error", "inside", { functionPrototypeMethods: true }],

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/wrap-regex
		 * 正则表达式必须有括号包起来
		 * @off 无需限制
		 */
		"wrap-regex": "off",

		/*
		 * https://zh-hans.eslint.org/docs/latest/rules/yield-star-spacing
		 * yield* 后面必须要有空格
		 */
		"yield-star-spacing": ["error", "after"],
	},
};
