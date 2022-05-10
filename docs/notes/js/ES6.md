# ES6 新特性

**`ECMAScript`** 是由Ecma国际通过ECMA-262标准化的脚本程序设计语言。

## `let`关键字

`let` 关键字用来声明变量，使用`let` 声明的变量有几个特点：

1. 不允许重复声明
2. 块级作用域
3. 不存在变量提升
4. 不影响作用域链

## `const` 关键字

`const` 关键字用来声明常量，`const` 声明有以下特点：

1. 声明必须要赋初始值
2. 常量的名称一般大写
3. 不能修改常量的值
4. 不允许重复声明
5. 块级作用域

> 注意: 对象属性修改和数组元素变化不会出发 `const` 错误

应用场景：声明对象类型使用 `const`，非对象类型声明选择 `let`

## 变量的解构赋值

ES6允许按照一定模式从数组和对象中提取值，对变量进行赋值，这被称为解构赋值。

```javascript
//数组的解构赋值
const arr = ['宋小宝', '刘能', '赵四', '小沈阳'];
let [song, liu, zhao, xiao] = arr;
console.log(song, liu, zhao, xiao);
//对象的解构赋值
const star = {
    name: '于谦',
    tags: ['抽烟', '喝酒', '烫头'],
    say: function () {
        console.log('我可以说相声');
    }
};
let {name, tags: [chou, he, tang], say} = star;
```

> 注意：频繁使用对象方法、数组元素，就可以使用解构赋值形式

## 模板字符串

**模板字符串（template string）** 是增强版的字符串，用反引号（`）标识，特点：

1. 字符串中可以出现换行符
2. 可以使用 `${xxx}` 形式输出变量

```javascript
//直接使用换行符
let str = `<ul>
            <li>沈腾</li>
            <li>玛丽</li>
            <li>艾伦</li>
            <li>魏翔</li>
        </ul>`;
//字符串中进行变量拼接
let star = '魏翔';
let str2 = `我特别喜欢${star}`;
```

> 注意：当遇到字符串与变量拼接的情况使用模板字符串

## 简化对象写法

ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。

```javascript
let name = 'Tom';
let pos = '北京';
let change = function () {
    console.log('改变');
};
const i = {
    name,
    pos,
    change,
    improve() {
        console.log('提升');
    }
}
```

## 箭头函数

ES6 允许使用「箭头」（=>）定义函数。

```javascript
//1. 声明格式
let add = (a, b, c) => {
    return a + b + c;
};
//2. 函数调用
console.log(add(1, 2, 3));
console.log(add.call({}, 1, 2, 3));
console.log(add.apply({}, [1, 2, 3]));
```

**箭头函数的注意点：**

- 如果形参只有一个，则小括号可以省略
- 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果(如果不写花括号的话,`return` 也不能写)
- 箭头函数 `this` 指向声明时所在作用域下 `this` 的值
- 箭头函数不能作为构造函数实例化
- 箭头函数不能使用 `arguments`

> 注意：箭头函数不会更改this指向，所以非常适合设置与this无关的回调，比如数组回调、定时器回调，不适合事件回调与对象方法。

## `rest` 参数

ES6引入 `rest` 参数，用于获取函数的实参，用来代替 `arguments`

```javascript
function main(...args) {
    //1、使用arguments获取实参
    console.log(arguments);
    //2、rest参数
    console.log(args);
}

main(12, 23, 2, 2, 4, 12);
```

> 注意：`rest` 参数非常适合不定个数参数函数的场景

## `spread` 扩展运算符

扩展运算符（spread）也是三个点（`...`）。它好比 `rest` 参数的逆运算，将一个数组转为用逗号分隔的参数序列，对数组进行解包。

```javascript
//对象的展开
const skillOne = {
    q: '天音波'
};
const skillTwo = {
    w: '金钟罩'
};
const skillThree = {
    e: '天雷破'
};
const skillFour = {
    r: '猛龙摆尾'
};
const mangseng = {...skillOne, ...skillTwo, ...skillThree, ...skillFour};
console.log(mangseng);
```

## `Symbol`

ES6 引入了一种新的原始数据类型 `Symbol`，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，是一种类似于字符串的数据类型。


