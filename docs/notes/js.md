# JavaScript

## 简介

**JavaScript (** **JS** ) 是一种具有[函数优先](https://developer.mozilla.org/zh-CN/docs/Glossary/First-class_Function)的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web 页面的脚本语言而出名的，但是它也被用到了很多[非浏览器环境](https://en.wikipedia.org/wiki/JavaScript#Uses_outside_Web_pages)中，例如 [Node.js](https://nodejs.org/)、 [Apache CouchDB](https://couchdb.apache.org/) 和 [Adobe Acrobat](https://www.adobe.com/devnet/acrobat/javascript.html)。JavaScript 是一种[基于原型编程](https://developer.mozilla.org/zh-CN/docs/Glossary/Prototype-based_programming)、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。了解更多[ JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/About_JavaScript)。

本部分将专注于 JavaScript 语言本身，而非局限于网页或其他限制环境。想要了解网页有关的 [APIs](https://developer.mozilla.org/zh-CN/docs/Glossary/API) ，请参考 [Web APIs](https://developer.mozilla.org/zh-CN/docs/Web/API) 以及 [DOM](https://developer.mozilla.org/zh-CN/docs/Glossary/DOM)。

JavaScript 的标准是 [ECMAScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_Resources) 。截至 2012 年，所有的[现代浏览器](https://kangax.github.io/compat-table/es5/)都完整的支持 ECMAScript 5.1，旧版本的浏览器至少支持 ECMAScript 3 标准。2015年6月17日，[ECMA国际组织](https://www.ecma-international.org/)发布了 ECMAScript 的第六版，该版本正式名称为 ECMAScript 2015，但通常被称为 ECMAScript 6 或者 ES6。自此，ECMAScript 每年发布一次新标准。

**JS的输出语句**

```javascript
alert("Hello JS"); // 警告框
console.log("Hello World"); // 控制台输出
document.write("<h1>Hello World</h1>"); // 网页中打印内容
```


## JS作用域

### 作用域

作用的区域或者作用范围，JS没有块级作用域，只有函数作用域

**全局作用域**：在全局作用域下写的变量：没有区别，都属于window对象的属性

**局部作用域**：在局部作用域写变量

### 作用域链

从当前作用域逐级向上查找

从当前作用域开始找，找不到向外继续找，直到找到window，找不到报错

### 变量提升

JS会提升var声明的变量和函数，移动到当前作用域的开头

**优先级**：变量 > 函数 > 形参 > 变量提升

## JS严格模式-递归-闭包

### 严格模式

`use strict`开启严格模式

使用方式：

1. 针对整个文件，全局严格模式：文件的第一行写：`'use strict'`
2. 针对单个函数，局部严格模式：函数的第一行写：`'use strict'`

作用：

1. 变量声明：var | window ，`num = 10`报错
2. 禁止`this`关键字指向全局对象
3. 函数不能有重名的形参

### 递归

自己调用自己

注意：必须有结束条件，没有结束条件就变成死循环

```javascript
function sun(n){
    if(n === 1){ // 结束条件
        return 1
    }else {
        return n + sum(n-1)
    }
}
```

数组扁平化：把多维数组变成一维数组

```javascript
function fn(arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'object'){
            result = result.concat(fn(arr[i]))
        }else {
            result.push(arr[i])
        }
    }
    return result
}
```

斐波那契数列：1 1 2 3 5 8 13 21 34 55 …

```javascript
function fn(n){
    if(n < 3){
        return 1
    }
    return fn(n - 1) + fn(n - 2)
}
```

### 闭包

什么是闭包？

一个函数和对其周围状态（**lexical environment，词法环境**）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是**闭包**（**closure**）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

>  闭包是一个函数加上到创建函数的作用域的连接，闭包“关闭”了函数的自由变量

1. 有两个函数，作用域是连接关系（scope）
2. 变量不自由，会停留在内存中，不会销毁

闭包可以做什么？无意间共享环境



## JS对象

### this指向

this指的是函数运行时所在的“环境”

### call-apply-bind

call、apply、bind：是所有函数都具有的方法

注意：函数也是对象，函数具有方法

`call(参数1, 参数2, 参数3...)`

- 参数1：调用函数时，内部this的具有值，让this指向谁
- 剩余参数就是函数的参数

`apply(参数1, [参数值1, 参数值2, 参数值3...])`

- 参数1：调用函数时，内部this的具有值，让this指向谁
- 参数2：是一个数组，数组的每个值代表了函数的参数

`bind(参数1, 参数2, 参数3...)()`

- 参数和`call`一样，但是返回的是一个函数

## JS对象模式

### 工厂模式

```javascript
function fun(cName){
    let obj = new Object()
    obj.name = cName
    return obj
}
let obj1 = fun('tom')
let obj2 = fun('jerry')
```

### 构造函数

就是普通函数，一般首字母大写

this指向new出来的对象

### 原型模式（prototype）

注意：

1. 函数拥有prototype属性 | 对象

2. 共享的属性和方法放在prototype中，不共享的放在构造函数中
3. new缺点：无法共享属性和方法

### 函数和对象的关系

函数：有`prototype`

对象：有`__proto__`

实例的隐式原型`__prpto__`指向函数的显示原型`prototype`

### new操作符具体做了什么？

1. 创建一个对象`new Object()`
2. 原型赋值（指向同一个原型对象）：`对象.__proto__ = Fun.prototype`
3. 改变this指向：`Fun.call(obj)`

### 深拷贝和浅拷贝

什么是拷贝？复制

> 基本类型是按照值访问的

> 引用类型都是按照引用传递的

#### 浅拷贝

只复制一层对象，当对象的属性是引用类型时，实质上复制的是其引用，当引用指向的值方式变化的时候，原对象的属性值也会跟着变化，互相影响

`Object.assign(target, ...sources)`target目标对象，sources元对象，返回目标对象

#### 深拷贝

在拷贝的时候创建新的对象，并把原对象所有的属性都拷贝到新对象，原属性如果是对象，也会重新创建新的对象并拷贝到新对象属性中，原对象和新对象都是相互独立的，互不影响

方式一：`let newObj = JSON.parse(JSON.stringify(obj))`

方式二：递归

```javascript
let obj = {
    a: 10,
    b: {
        c: 20
    }
}

function deepCopy(obj) {
    let o = {}
    if (typeof obj === 'object') {
        for (let k in obj) {
            if (obj.hasOwnProperty(k)) {
                if (typeof obj[k] === 'object') {
                    o[k] = deepCopy(obj[k])
                } else {
                    o[k] = obj[k]
                }
            }
        }
    }
    return o
}

let newObj = deepCopy(obj)
```



## JS继承

### 原型链继承



### 构造函数继承



### 组合继承



## ES6

## H5C3



