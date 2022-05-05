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

## 运算符

#### 算术运算符

加`+`，减`-`，乘`*`，除`/`，取余`%`，幂`**`

> 除了字符串的加法，其余类型的值进行算数运算时，都会转换为数值然后再运算

#### 一元运算符

正`+`，负`-`

> 使用一元运算符，会发生类型转换（数值）

#### 自增自减

- `a++`：a++会使变量立即自增1，并返回变量自增前的值（原值）
- `++a`：++a会使变量立即自增1，并返回变量自增后的值（新值）
- `a--`：a--会使变量立即自减1，并返回变量自增前的值（原值）
- `--a`：--a会使变量立即自减1，并返回变量自增后的值（新值）

#### 赋值运算符

- `=`：将符号右侧的值赋值给左侧
- `+=`：`a += b;`等价于 `a = a + b`
- `-=`：`a -= b;`等价于 `a = a - b;`
- `*=`：`a *= b;`等价于 `a = a * b;`
- `/=`：`a /= b;`等价于 `a = a / b;`
- `**=`：`a **= b;`等价于 `a = a ** b;`
- `%=`：`a %= b;`等价于 `a = a % b;`

#### 逻辑运算符

- `!`逻辑非：
    - 逻辑非用来对一个值进行取反，true 变 false，false 变 true，非布尔值会转换为布尔值然后取反
- `&&`逻辑与：
    - 与运算是找 `false` 的，只要有 `false` 就会返回 `false`
    - 与运算是短路的与，如果第一个值是false，则不看第二个值
    - 非布尔值运算时，会返回原值
    - 如果第一个值是false，则直接返回第一个值
- `||`逻辑或：
    - 或运算是找 `true` 的，只要有 `true` 就返回 `true`，没有则返回 `false`
    - 或运算是短路的或，如果第一个值是true，则不看第二个值
    - 非布尔运算时，会返回原值
    - 如果第一个值时true，则返回第一个值。如果第一个值是false，则返回第二个值。
- `??`空值合并运算符：
    - 当左侧的操作数为 `null` 或者 `undefined` 时，返回其右侧操作数，否则返回左侧操作数。

#### 关系运算符

关系运算符用来比较两个值之间大于小于等于的关系，如果关系成立，返回true，否则返回false。

`>` `>=` `<` `<=` 规则同数学运算

> 如果比较两个字符串的大小关系，它不会将字符串转换为数值去比较，而是逐位的比较字符的`Unicode`编码，所以利用这个特性可以通过比较字符串大小，来将字符串按照字母顺序排序

#### 相等运算符

`==`（相等） 检查两个值是否相等，相等返回true，否则返回false。它会自动的类型转换，如果两个值的类型不同，它会将其转换为相同的类型然后再比较。

`!=`（不等） 检查两个值是否不相等，不相等返回true，否则返回false，会做自动类型转换。

`===`（全等） 检查两个值是否全等，不会做自动的类型转换

`!==`（非全等） 检查两个值是否不全等，不会做自动的类型转换

> `null` 和 `undefined` 做相等运算时，返回 true
>
> `null` 和 `undefined` 做全等运算时，返回 false
>
> `NaN` 不和任何值相等，包括它自己。检查一个值是不是NaN时，需要使用函数`isNaN()`

#### 条件(三元)运算符

`(condition ? ifTrue : ifFalse)`

条件元素运算符把两个结果中其中一个符合运算逻辑的值返回。

#### [运算符的优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#%E6%B1%87%E6%80%BB%E8%A1%A8)

## 流程控制

最基本的语句是用于组合语句的语句块。该块由一对大括号界定

> 重要：在 `ECMAScript 6` 标准之前，Javascript没有块作用域。在一个块中引入的变量的作用域是包含函数或脚本，并且设置它们的效果会延续到块之外。换句话说，块语句不定义范围。
>
> 从 `ECMAScript 2015` 开始，使用 `let` 和`const`变量是块作用域的。

### 条件判断语句

#### `if...else`

`if`语句计算括号里的条件表达式，如果计算结果是 true，就会执行对应的代码块。当这个条件为假，使用可选择的 `else` 从句来执行这个语句。也可以组合语句通过使用 `else if` 来测试连续多种条件判断。
if 语句如下所示：

```javascript
if (condition_1) {
    statement_1;
} else if (condition_2) {
    statement_2;
} else if (condition_n_1) {
    statement_n;
} else {
    statement_last;
} // 语句else可选
```

#### `switch`

`switch` 语句允许一个程序求一个表达式的值并且尝试去匹配表达式的值到一个 `case` 标签。如果匹配成功，这个程序执行相关的语句。`switch` 语句如下所示：

```javascript
switch (expression) {
    case label_1:
        statements_1
        break;
    case label_2:
        statements_2
        break;
    default:
        statements_def
        break;
}
```

程序首先查找一个与 `expression `匹配的 `case `语句，然后将控制权转移到该子句，执行相关的语句。如果没有匹配值， 程序会去找 `default `
语句，如果找到了，控制权转移到该子句，执行相关的语句。如果没有找到 `default`，程序会继续执行 `switch `语句后面的语句。`default` 语句通常出现在switch语句里的最后面，当然这不是必须的。

`可选的 break` 语句与每个 `case` 语句相关联， 保证在匹配的语句被执行后程序可以跳出 `switch `并且继续执行 `switch` 后面的语句。如果`break`被忽略，则程序将继续执行switch语句中的下一条语句。

### 循环与迭代

循环提供了一种快速和简单的方式去做一些重复的事。循环有很多种类，但本质上它们都做的是同一件事：它们把一个动作重复了很多次（实际上重复的次数有可能为
0）。各种循环机制提供了不同的方法去确定循环的开始和结束。不同情况下，某一种类型循环会比其它的循环用起来更简单。

#### `for`

一个 `for` 循环会一直重复执行，直到指定的循环条件为 `false`。一个 for 语句是这个样子的：

```javascript
for ([initialExpression]; [condition]; [incrementExpression]) {
    statement
}
```

当一个 `for` 循环执行的时候，会发生以下过程：

1. 如果有初始化表达式 `initialExpression`，它将被执行。这个表达式通常会初始化一个或多个循环计数器，但语法上是允许一个任意复杂度的表达式的。这个表达式也可以声明变量。
2. 计算 `condition` 表达式的值。如果 `condition` 的值是 true，循环中的语句会被执行。如果 `condition` 的值是 false，`for` 循环终止。如果 `condition`
   表达式整个都被省略掉了，condition的值会被认为是true。
3. 循环中的 `statement` 被执行。如果需要执行多条语句，可以使用块（`{ ... }`）来包裹这些语句。
4. 如果有更新表达式 `incrementExpression`，执行更新表达式。
5. 回到步骤 2。

#### `do...while`

`do...while` 语句一直重复直到指定的条件求值得到假值（false）。 一个 do...while 语句看起来像这样：

```javascript
do {
    statement
} while (condition);
```

`statement` 在检查条件之前会执行一次。如果 `condition` 为真（true），`statement` 将再次执行。
在每个执行的结尾会进行条件的检查。当 `condition` 为假（false），执行会停止并且把控制权交回给 `do...while` 后面的语句。

#### `while`

一个 `while` 语句只要指定的条件求值为真（true）就会一直执行它的语句块。一个 `while` 语句看起来像这样：

```javascript
while (condition) {
    statement
}
```

如果这个条件变为假，循环里的 `statement` 将会停止执行并把控制权交回给 `while` 语句后面的代码。

条件检测会在每次 `statement` 执行之前发生。如果条件返回为真， `statement` 会被执行并紧接着再次测试条件。如果条件返回为假，执行将停止并把控制权交回给 while 后面的语句。

#### `label` `break` `continue`

**`label`**

一个 `label` 提供了一个让你在程序中其他位置引用它的标识符。例如，你可以用 `label` 标识一个循环， 然后使用 `break` 或者 `continue` 来指出程序是否该停止循环还是继续循环。

label 语句的语法看起来像这样：

```javascript
label :
    statement
```

`label` 的值可以是任何的非保留字的 JavaScript 标识符， `statement` 可以是任意你想要标识的语句（块）。

**`break`**

使用 `break` 语句来终止循环，`switch`， 或者是链接到 label 语句。

- 当你使用不带 label 的 `break` 时， 它会立即终止当前所在的 `while`，`do-while`，`for`，或者 `switch` 并把控制权交回这些结构后面的语句。
- 当你使用带 label 的 `break` 时，它会终止指定的带标记（label）的语句。

`break` 语句的语法看起来像这样：

```
break [label];
```

在语法中，被 `[]` 包裹的内容是可省略的，也就是 `label` 可以省略。若省略，则终止当前所在的循环或 `switch`；若不省略，则终止指定的 label 语句。

**`continue`**

`continue` 语句可以用来继续执行（跳过代码块的剩余部分并进入下一循环）一个 `while`、`do-while`、`for`，或者 `label` 语句。

- 当你使用不带 label 的 `continue` 时， 它终止当前 `while`，`do-while`，或者 for 语句到结尾的这次的循环并且继续执行下一次循环。
- 当你使用带 label 的 `continue` 时， 它会应用被 label 标识的循环语句。

`continue` 语句的语法看起来像这样：

```
continue [label];
```

#### `for...in`

`for...in` 语句循环一个指定的变量来循环一个对象所有可枚举的属性。`JavaScript` 会为每一个不同的属性执行指定的语句。

```javascript
for (variable in object) {
    statements
}
```

#### `for...of`

`for...of` 语句在可迭代对象（包括`Array`、`Map`、`Set`、`arguments` 等等）上创建了一个循环，对值的每一个独特属性调用一次迭代。

```javascript
for (variable of object) {
    statement
}
```

下面的这个例子展示了 `for...of` 和 `for...in` 两种循环语句之间的区别。 `for...in` 循环遍历的结果是数组元素的下标，而 `for...of` 遍历的结果是元素的值：

```javascript
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
    console.log(i); // 输出 "0", "1", "2", "foo"
}

for (let i of arr) {
    console.log(i); // 输出 "3", "5", "7"
}

// 注意 for...of 的输出没有出现 "hello"
```

## 函数

函数是 JavaScript 中的基本构建块之一。 JavaScript
中的函数类似于过程——一组执行任务或计算值的语句，但要使过程符合函数的条件，它应该接受一些输入并返回一个输出，其中两者之间有一些明显的关系。输入和输出。要使用函数，您必须在要调用它的范围内的某个地方定义它。

一个JavaScript 函数用`function`关键字定义，后面跟着函数名和圆括号。

### 定义函数

#### 函数声明

一个**函数定义**（也称为**函数声明**，或**函数语句**）由一系列的`function`关键字组成，依次为：

- 函数的名称。
- 函数参数列表，包围在括号中并由逗号分隔。
- 定义函数的 JavaScript 语句，用大括号`{}`括起来。

例如，以下的代码定义了一个简单的`square`函数：

```javascript
function square(number) {
    return number * number;
}
```

函数`square`使用了一个参数，叫作`number`。这个函数只有一个语句，它说明该函数将函数的参数（即`number`）自乘后返回。函数的`return`语句确定了函数的返回值

原始参数（比如一个具体的数字）被作为值传递给函数；值被传递给函数，如果被调用函数改变了这个参数的值，这样的改变不会影响到全局或调用函数。

#### 函数表达式

虽然上面的函数声明在语法上是一个语句，但函数也可以由函数表达式创建。这样的函数可以是匿名的；它不必有一个名称。例如，函数square也可这样来定义：

```javascript
const square = function (number) {
    return number * number;
};
```

### 调用函数

定义一个函数并不会自动的执行它。定义了函数仅仅是赋予函数以名称并明确函数被调用时该做些什么。**调用**函数才会以给定的参数真正执行这些动作。例如，一旦你定义了函数`square`，你可以如下这样调用它：

```javascript
square(5);
```

函数一定要处于调用它们的域中，但是函数的声明可以被提升(出现在调用语句之后)，如下例：

```javascript
console.log(square(5));

function square(n) {
    return n * n
}
```

函数域是指函数声明时的所在的地方，或者函数在顶层被声明时指整个程序。

> 函数提升仅适用于函数声明，而不适用于函数表达式。

### 函数作用域

在函数内定义的变量不能在函数之外的任何地方访问，因为变量仅仅在该函数的域的内部有定义。相对应的，一个函数可以访问定义在其范围内的任何变量和函数。换言之，定义在全局域中的函数可以访问所有定义在全局域中的变量。在另一个函数中定义的函数也可以访问在其父函数中定义的所有变量和父函数有权访问的任何其他变量。

```javascript
// 下面的变量定义在全局作用域(global scope)中
var num1 = 20,
    num2 = 3,
    name = "Chamahk";

// 本函数定义在全局作用域
function multiply() {
    return num1 * num2;
}

multiply(); // 返回 60

// 嵌套函数的例子
function getScore() {
    var num1 = 2,
        num2 = 3;

    function add() {
        return name + " scored " + (num1 + num2);
    }

    return add();
}

getScore(); // 返回 "Chamahk scored 5"
```

### 闭包

闭包是 JavaScript 中最强大的特性之一。JavaScript 允许函数嵌套，并且内部函数可以访问定义在外部函数中的所有变量和函数，以及外部函数能访问的所有变量和函数。

但是，外部函数却不能够访问定义在内部函数中的变量和函数。这给内部函数的变量提供了一定的安全性。

此外，由于内部函数可以访问外部函数的作用域，因此当内部函数生存周期大于外部函数时，外部函数中定义的变量和函数的生存周期将比内部函数执行时间长。当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了。

```javascript
var pet = function (name) { // 外部函数定义了一个变量"name"
    var getName = function () {
        // 内部函数可以访问 外部函数定义的"name"
        return name;
    }
    // 返回这个内部函数，从而将其暴露在外部函数作用域
    return getName;
};
myPet = pet("Vivie");

myPet(); // 返回结果 "Vivie"
```

> 如果一个闭包的函数定义了一个和外部函数的某个变量名称相同的变量，那么这个闭包将无法引用外部函数的这个变量。

### `arguments`对象

函数的实际参数会被保存在一个类似数组的arguments对象中。在函数内，你可以按如下方式找出传入的参数：

```
arguments[i]
```

Copy to Clipboard

其中`i`是参数的序数编号（译注：数组索引），以0开始。所以第一个传来的参数会是`arguments[0]`。参数的数量由`arguments.length`表示。

使用arguments对象，你可以处理比声明的更多的参数来调用函数。这在你事先不知道会需要将多少参数传递给函数时十分有用。你可以用`arguments.length`来获得实际传递给函数的参数的数量，然后用`arguments`
对象来取得每个参数。

> `arguments`变量只是 ”**类数组对象**“，并不是一个数组。称其为类数组对象是说它有一个索引编号和`length`属性。尽管如此，它并不拥有全部的Array对象的操作方法。

### 函数参数

从ECMAScript 6开始，有两个新的类型的参数：默认参数，剩余参数。

#### 默认参数

在JavaScript中，函数参数的默认值是`undefined`。然而，在某些情况下设置不同的默认值是有用的。这时默认参数可以提供帮助。

```javascript
function multiply(a, b = 1) {
    return a * b;
}

multiply(5); // 5
```

#### 剩余参数

剩余参数语法允许将不确定数量的参数表示为数组。

```javascript
function multiply(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```


