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

### 原型链

为什么设计原型：继承、让对象的属性和方法实现共享

函数：`prototype`，对象：`__ptoto__`

原型链：每一个对象都有原型`__proto__`，这个原型还有自己的原型，最终形成了原型链，原型链的最顶端是null

如果要查找对象的属性或方法，先在对象中查找，如果没有找到，去对象的原型中找，如果还没找到，去对象的原型的原型中去找，直到找不到，返回undefined

### 原型链继承

儿子继承父亲`Child.prototype = new Parent()`

优点：共享属性和方法

缺点：无法给父构造函数传递参数

面试题

```javascript
function Foo(){
    getName = function(){alert(1)}
    return this
}
Foo.getName = function(){alert(2)}
Foo.prototype.getName = function(){alert(3)}
var getName = function(){alert(4)}
function getName(){alert(5)}
// **优先级**：变量 > 函数 > 形参 > 变量提升
Foo.getName() // 2
getName() // 4
// 全局getName = function(){alert(1)}
Foo().getName() // 1
getName() // 1
new Foo().getName() // 3
```



### 构造函数继承

每次生成一个对象，对象本身的属性和方法不共享

优点：可以向父构造函数传递参数

缺点：不可以共享属性和方法

`call/apply/bind`

```javascript
function Parent() {
    this.name = 'tom'
    this.arr = [1, 2, 3]
}

function Child() {
    // 让Parent的this指向对象
    Parent.call(this)
}

const obj1 = new Child()
const obj2 = new Child()
obj1.arr[0] = 10
console.log(obj1.arr) // [10, 2, 3]
console.log(obj2.arr) // [1, 2, 3]
```

### 组合继承

原型链继承+借用构造函数继承

既可以传递参数，也可以实现该有的共享性

```javascript
function Parent(name) {
    this.name = name
    this.arr = [1, 2, 3]
}

function Child(name) {
    // 借用构造函数
    Parent.call(this, name)
}

Parent.prototype.run = function () {

}
// 原型
Child.prototype = new Parent()

const obj1 = new Child('张三')
const obj2 = new Child('李四')
obj1.arr[0] = 10
console.log(obj1)
console.log(obj2)
console.log(obj1.run === obj2.run)
```


## ES6

https://es6.ruanyifeng.com/

### let、var、const

let：声明变量

1. let声明的变量只在代码块内有效
2. 不可以重复声明同一个变量
3. 不存在变量提升

const：常量

1. const声明的变量只在代码块内有效
2. 不可以重复声明同一个变量
3. 不存在变量提升

var和let的区别？

1. var声明的变量没有块作用域，let声明的有块作用域
2. var可以声明同一个变量（覆盖），let不可以
3. var有变量提升，let没有

### 变量的结构赋值

#### 数组的解构赋值

```javascript
// 表示，可以从数组中提取值，按照对应位置，对变量赋值。
let [a, b, c] = [10, 20, 30]
```

#### 对象的结构赋值

```javascript
let {a, b} = {a: 10, b: 20}
```

#### 字符串的结构赋值

```javascript
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
```

### 箭头函数

```javascript
var f = v => v;

// 等同于
var f = function (v) {
    return v;
};
```

使用注意点

1. 箭头函数没有自己的`this`对象。

2. 不可以当作构造函数，也就是说，不可以对箭头函数使用`new`命令，否则会抛出一个错误。

3. 不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

4. 不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数。

### Class

基本用法

```javascript
class Person {
    constructor(name) {
        this.name = name
    }
    run(){
        return '这是run方法'
    }
}
const p = new Person('tom')
```

继承

```javascript
class Child extends Parent{
    constructor(){
        super()
    }
}
```

### Promise

Promise是异步编程的一种解决方案

功能：写异步的代码，同步的执行出来，让代码更好的维护易读

同步：只有前一个任务执行完，才能继续执行下一个任务

异步：不进入主线程，进入任务队列，只有任务队列通知主线程，某个异步任务才可以执行，该任务才会进入主线程

1. 每一个Promise实例都有3种状态：初始化(pending)、成功(fulfilled)、失败(rejected)
2. 每一个Promise实例在刚被new出来的那一刻，状态都是初始化(pending)
3. executor函数会接收到2个参数，它们都是函数，分别用形参：resolve、reject接收

### async和await

async修饰的函数返回一个Promise对象，Promise实例的结果由async函数执行的返回值决定

await右侧的表达式一般为Promise实例对象, 但也可以是其它的值

- 如果表达式是Promise实例对象, await后的返回值是promise成功的值
- 如果表达式是其它值, 直接将此值作为await的返回值

await必须写在async函数中, 但async函数中可以没有await

如果await的Promise实例对象失败了, 就会抛出异常, 需要通过try...catch来捕获处理





