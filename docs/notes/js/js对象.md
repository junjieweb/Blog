# Object 对象

JavaScript 的设计是一个简单的基于对象的范式。一个对象就是一系列属性的集合，一个属性包含一个名和一个值。一个属性的值可以是函数，这种情况下属性也被称为方法。除了浏览器里面预定义的那些对象之外，你也可以定义你自己的对象。

在javascript中，一个对象可以是一个单独的拥有属性和类型的实体。我们拿它和一个杯子做下类比。一个杯子是一个对象(物体)，拥有属性。杯子有颜色，图案，重量，由什么材质构成等等。同样，javascript对象也有属性来定义它的特征。

Object 是 JavaScript 的一种 数据类型 。它用于存储各种键值集合和更复杂的实体。Objects 可以通过 `new Object()` `Object.create()`方法，或者使用 对象字面量 的方式创建

## 对象和属性

一个 javascript 对象有很多属性。一个对象的属性可以被解释成一个附加到对象上的变量。对象的属性和普通的 javascript 变量基本没什么区别，仅仅是属性属于某个对象。

- **属性：**事物的**特征**，在对象中用属性来表示（常用名词）
- **方法：**属性的**行为**，在对象中用方法来表示（常用动词）

### 创建对象

```javascript
let obj = new Object();
let obj = Object();
let obj = {};

function Car() {
}

let c = new Car()
```

### 定义方法

对象的属性值可以是任意类型，也可以是一个函数.如果对象的属性值是一个函数，这个函数我们称为是对象的方法.调用函数称为调用对象的方法.

一个方法 是关联到某个对象的函数，或者简单地说，一个方法是一个值为某个函数的对象属性。定义方法就像定义普通的函数，除了它们必须被赋给对象的某个属性。

```javascript
var myObj = {
    myMethod: function (params) {

    },
    // 或者 这样写也可以
    myOtherMethod(params) {

    }
};
```

### 使用对象

```javascript
const obj = {}
// 添加
obj.name = 'tom'
obj.age = 23
// 读取
console.log(obj.name)
console.log(obj["age"])
// 删除
delete obj.name
delete obj["age"]
```

### 工厂模式

```javascript
function fun(cName) {
    let obj = new Object()
    obj.name = cName
    return obj
}

let obj1 = fun('tom')
let obj2 = fun('jerry')
```

### `in`

如果指定的属性在指定的对象或其原型链中，则 **`in` 运算符**返回`true`。

```javascript
let obj = {name: 'tom'}
console.log('name' in obj)
```

## 枚举一个对象的所有属性

从 ECMAScript 5 开始，有三种原生的方法用于列出或枚举对象的属性：

1. `for...in` 循环
   该方法依次访问一个对象及其原型链中所有可枚举的属性。

```javascript
for (variable in object) {
    statement
}
```

2. `Object.keys(o)`
   该方法返回对象 `o` 自身包含（不包括原型中）的所有可枚举属性的名称的字符串数组。

```javascript
Object.keys(obj)
```

3. `Object.getOwnPropertyNames(o)`
   该方法返回对象 `o` 自身包含（不包括原型中）的所有属性(无论是否可枚举)的名称的字符串数组。

```javascript
Object.getOwnPropertyNames(obj)
```
