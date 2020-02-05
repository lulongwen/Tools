# Eslint

https://www.jianshu.com/p/bfc7e7329cff


## ESlint 常见错误警告

* scss Media query expression must begin with ‘(’
	* @import 结尾缺少;
	* `@import` 的样式是个表达式，后面要加上分号 ;


* xxx is defined but never used no-unused-vars
	* 禁止出现未使用过的变量
	* 解决方法：删除，或注释掉


* Expected '===' and instead saw '==' eqeqeq
	* 要求使用 === 和 !==
	* == 变 ===，2个等号写成3个等号


* img elements must have an alt prop, either with meaningful text, or an empty string for decorative images jsx-a11y/alt-text
	* img标签添加 alt="" 属性


* Expected a default case default-case
	* switch 添加 default: break;


* Expected a conditional expression and instead saw an assignment no-cond-assign
	* 禁止在条件语句中出现赋值操作符
	* if判断里 = 边 ===


* Script URL is a form of eval no-script-url
	* 禁用 Script URL 使用 href="#" 
	* e.preventDefault() 阻止


* Expected to return a value in arrow function array-callback-return
	* 强制数组方法的回调函数中有 return 语句
	* 添加return true;


* Useless constructor no-useless-constructor
	* 禁用不必要的构造函数
	* 删除constructor函数


* Unexpected mix of '&&' and '||' no-mixed-operators
	* 禁止混合使用不同的操作符
	* && 的优先级大于||，如：type && type.flag || false
	* 改为(type && type.flag) || false


* Unreachable code no-unreachable
	* 禁止在return、throw、continue 和 break 语句之后出现不可达代码
	* 删除后面的代码


* Unexpected string concatenation of literals no-useless-concat
	* 禁止不必要的字符串字面量或模板字面量的连接
	* http://eslint.cn/docs/rules/no-useless-concat


* 'ws' is already defined no-redeclare
	* 禁止多次声明同一变量 去掉var


* Style prop value must be an object react/style-prop-object
	* React框架的JSX编码格式要求，style必须是一个对象
	* https://blog.csdn.net/sinat_17775997/article/details/66967829


* Missing radix parameter radix
	* 强制在parseInt()使用基数参数
	* https://blog.csdn.net/katecatecake/article/details/78817019


* Do not mutate state directly. Use setState() react/no-direct-mutation-state
	* React中不能直接更改state的值 进行拷贝，然后赋值


* The array literal notation [] is preferrable no-array-constructor
	* 禁用 Array 构造函数
	* 例如：let clickX = new Array()，改let clickX = [];


* No duplicate props allowed react/jsx-no-duplicate-props
	* 禁止重复定义
	* 删除一个


* The element img has an implicit role of presentation. Defining this explicitly is redundant and should be avoided jsx-a11y/no-redundant-roles
	* 删除role="presentation"属性;


* Block is redundant no-lone-blocks
	* 禁用不必要的嵌套块 删除注释;


* Unexpected use of comma operator no-sequences
	* 禁用逗号操作符 ,号变;


* iframe elements must have a unique title property jsx-a11y/iframe-has-title
	* 添加title="navigation"


* Unnecessary escape character: \. no-useless-escape
	* 禁用不必要的转义字符;


* Duplicate key 'uploadType' no-dupe-keys
	* 禁止对象字面量中出现重复的 key