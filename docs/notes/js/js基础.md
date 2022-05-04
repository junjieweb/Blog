# JavaScript 基础

## 数据类型

最新的 `ECMAScript` 标准定义了8种数据类型：

- 七种基本数据类型:
    - 布尔值（`Boolean`），有2个值分别是：`true` 和 `false`.
    - `null` ， 一个表明 null 值的特殊关键字。 JavaScript 是大小写敏感的，因此 `null` 与 `Null`、`NULL`或变体完全不同。
    - `undefined` ，和 null 一样是一个特殊的关键字，undefined 表示变量未赋值时的属性。
    - 数字（`Number`），整数或浮点数，例如： `42` 或者 `3.14159`。
    - 任意精度的整数 (`BigInt`) ，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。
    - 字符串（`String`），字符串是一串表示文本值的字符序列，例如："Howdy" 。
    - 代表（`Symbol`） ( 在 ECMAScript 6 中新添加的类型).。一种实例是唯一且不可改变的数据类型。
- 以及对象（`Object`）。

虽然这些数据类型相对来说比较少，但是通过他们你可以在程序中开发有用的功能。对象（`Object`)
）和函数（`function`）是这门语言的另外两个基本元素。你可以把对象当作存放值的一个命名容器，然后将函数当作你的程序能够执行的步骤。

## 类型转换

#### 转换为 `string` 类型

1. 调用`String()`函数：`value = String(value);`
2. 为任意值加上一个空串：`value = value + '';`

#### 转换为 `number` 类型

1. 调用`Number()`函数：`value = Number(value);`
2. 使用一元运算符的`+`：`value = +value;`
3. 用来转换字符串的两个函数：`parseInt()` `parseFloat()`
4. 在算术函数和表达式中，会自动进行 `number` 类型转换。
   - 字符串是一个合法数字，直接转为对应的数字。
   - 不合法转换为`NaN`，空串或空格串转换为 0。
   - `true`和`false`，转换为`1`和`0`
   - `null`转为`0`，`undefined`转为`NaN`

#### 转换为 `boolean` 类型

1. 调用`Boolean()`函数：`value = Boolean(value);`
2. 为任意值取两次反：`value = !!value;`

会转换为`false`的情况：`0` `NaN` `null` `undefined` `false` `''`
