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

