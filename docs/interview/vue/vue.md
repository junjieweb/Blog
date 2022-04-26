# Vue 面试题

## 开发流程

1. 书写静态页面（HTML + CSS）
2. 拆分组件
3. 获取服务器的数据动态展示
4. 完成相应的动态业务逻辑

## 1.脚手架目录：public + assets文件夹区别

**public**文件夹：一般放置一些共用的静态资源，打包上线的时候，public文件夹里面资源原封不动打包到dist文件夹里面

**assets**文件夹：经常放置一些静态资源（图片），assets文件夹里面资源webpack会进行打包为一个模块（js文件夹里面）

## 2.路由组件和非路由组件的区别？

1. 路由组件一般放在`pages/views`文件夹，非路由组件放在`components`文件夹
2. 路由组件一般需要在`router`文件夹中进行注册，非路由组件一般都是以标签的形式使用
3. 注册完路由，不管是路由组件还是非路由组件，身上都有`$route`和`$router`属性

## 3.$route和$router有什么区别？

`$route`：获取路由信息（路径，query，params）

`$router`：一般进行编程式导航进行路由跳转（push/replace）

## 4.路由跳转

### 路由跳转的方式？

声明式导航`router-link`：可以进行路由的跳转，务必要有`to`属性

编程式导航`push/replace`，可以进行路由跳转。`this.$router.push('/search')`

声明式导航能做的，编程式导航都能做，但是编程式导航除了可以进行路由跳转，还可以做一些其他的业务逻辑

### push和replace有什么区别？

push可以回退，replace替换（不可以回退）

### 编程式路由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicated的警告错误，如何解决

声明式导航没有这类问题，因为`vue-router`底层已经处理好了

为什么编程式导航会有这种错误警告？

`"vue-router": "^3.5.3"`，最新的`vue-router`引入了`Promise`。

方法一：传入成功的回调函数参数

`this.$router.push(location, () => {})`

方法二：catch处理错误的promise

`this.$router.push(location).catch(() => {})`

> 但是上面种方法治标不治本，在别的组件中`push/replace`，编程式导航还是有类似错误。

方法三：重写push/replace方法

```javascript
// 先把VueRouter原型对象的push/replace方法保存一份
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
// 重写push/replace
// 第一个参数：告诉原来的push方法，你往哪里跳转（传递哪些参数）
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve || reject) { // 如果指定了成功或失败的回调
        originPush.call(this, location, resolve, reject) // 直接调用原来的push方法
    } else {
        originPush.call(this, location, () => {
        }, () => {
        })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve || reject) { // 如果指定了成功或失败的回调
        originReplace.call(this, location, resolve, reject) // 直接调用原来的replace方法
    } else {
        originReplace.call(this, location, () => {
        }, () => {
        })
    }
}
```

## 5.路由传参

### 路由传参的方式？

第一种：字符串拼接

```javascript
this.$router.push('/search/' + this.keyword + '?k=' + this.keyword)
```

第二种：模板字符串

```javascript
this.$router.push(`/search/${this.keyword}?k=${this.keyword}`)
```

**第三种：对象写法**

```javascript
this.$router.push({
    name: 'search',
    params: {keyword: this.keyword || undefined},
    query: {k: this.keyword.toUpperCase()}
})
```

### 路由传参（对象写法）path是否可以结合params参数一起使用？

路由跳转传参的时候，对象的写法，可以是`name/path`，`name`和`path`一起写可以正常使用，但是只有`path`不能与`params`参数一起使用，

### 如何指定params参数可传可不传？

如果路由要求传递`params`参数，但是没有传递，url会有问题。

占位符后面加`?`：`path: '/search/:keyword?'`。代表`params`参数可传可不传

### params参数可传可不传，但是如果传递的是空串，如何解决？

使用`undefined`解决：`params: {keyword: this.keyword || undefined},`

### 路由组件能不能传递props数据？

可以的，有三种写法，在路由配置里写

- 如果 `props` 被设置为 `true`，`route.params` 将会被设置为组件属性。只能传递`params`参数

- 如果 `props` 是一个对象，它会被按原样设置为组件属性。当 `props` 是静态的时候有用。额外给路由组件传递一些props。

- 函数写法：可以将`params`参数，`query`参数，通过`props`传递给路由组件。

  `props: route => ({keyword: route.params.keyword, k: route.query.k})`

## 6.vue中的key有什么作用？（key的内部原理）

1. 虚拟DOM中key的作用：

    - key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】

    - 随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：

2. 对比规则：

    1. 旧虚拟DOM中找到了与新虚拟DOM相同的key：

        - 若虚拟DOM中内容没变, 直接使用之前的真实DOM！

        - 若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM。

    2. 旧虚拟DOM中未找到与新虚拟DOM相同的key

        - 创建新的真实DOM，随后渲染到到页面。

3. 用index作为key可能会引发的问题：

    1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作：会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

    2. 如果结构中还包含输入类的DOM：会产生错误DOM更新 ==> 界面有问题。

4. 开发中如何选择key?:

    1. 最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。

    2. 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。

## VUE面试





## **6.vue3.0**

### **Vue3.0有什么更新**

- 监测机制的改变

    - ● 3.0 将带来基于代理 Proxy的 observer 实现，提供全语言覆盖的反应性跟踪。
    - ● 消除了 Vue 2 当中基于 Object.defineProperty 的实现所存在的很多限制

        - 检测属性的添加和删除；
        - 检测数组索引和长度的变更；
        - 支持 Map、Set、WeakMap 和 WeakSet。

- 模板

    - ● 作用域插槽，2.x 的机制导致作用域插槽变了，父组件会重新渲染，而 3.0 把作用域插槽改成了函数的方式，这样只会影响子组件的重新渲染，提升了渲染的性能。
    - ● 同时，对于 render 函数的方面，vue3.0 也进行一系列更改来方便习惯直接使用 api 来生成 vdom 。

- 对象式的组件声明方式

    - ● vue2.x 中的组件是通过声明的方式传入一系列 option，和 TypeScript 的结合需要通过一些装饰器的方式来做，虽然能实现功能，但是比较麻烦。
    - ● 3.0 修改了组件的声明方式，这样使得和 TypeScript 的结合变得很容易

- 其它方面的更改

    - ● 支持自定义渲染器，从而使得 weex 可以通过自定义渲染器的方式来扩展，而不是直接 fork 源码来改的方式。
    - ● 支持 Fragment（多个根节点）和 Protal（在 dom 其他部分渲染组建内容）组件，针对一些特殊的场景做了处理。
    - ● 基于 tree shaking 优化，提供了更多的内置功能。

### **defineProperty和proxy的区别**

- defineProperty

    - Vue 在实例初始化时遍历 data 中的所有属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。这样当追踪数据发生变化时，setter 会被自动调用。
    - 存在的问题

        -
            1. 添加或删除对象的属性时，Vue 检测不到。因为添加或删除的对象没有在初始化进行响应式处理，只能通过$set 来调用Object.defineProperty()处理。
        -
            2. 无法监控到数组下标和长度的变化。

- proxy

    - Vue3 使用 Proxy 来监控数据的变化。Proxy 是 ES6 中提供的功能，其作用为：用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）

- defineProperty和proxy的区别

    -
        1. Proxy 直接代理整个对象而非对象属性，这样只需做一层代理就可以监听同级结构下的所有属性变化，包括新增属性和删除属性。
    -
        2. Proxy 可以监听数组的变化。

### **Vue3.0 为什么要用 proxy？**

- 在 Vue2 中， 0bject.defineProperty 会改变原始数据，而 Proxy 是创建对象的虚拟表示，并提供 set 、get 和 deleteProperty
  等处理器，这些处理器可在访问或修改原始对象上的属性时进行拦截，有以下特点∶

    - ● 不需用使用 Vue.$set 或 Vue.$delete 触发响应式。
    - ● 全方位的数组变化检测，消除了Vue2 无效的边界情况。
    - ● 支持 Map，Set，WeakMap 和 WeakSet。

- Proxy 实现的响应式原理与 Vue2的实现原理相同，实现方式大同小异∶

    - ● get 收集依赖
    - ● set、delete 等触发依赖
    - ● 对于集合类型，就是对集合对象的方法做一层包装：原方法执行后执行依赖相关的收集或触发逻辑。

### ** Vue 3.0 中的 Vue Composition API？**

- 在 Vue2 中，代码是 Options API 风格的，也就是通过填充 (option) data、methods、computed 等属性来完成一个 Vue 组件。造成了几个问题：

    -
        1. 由于 Options API 不够灵活的开发方式，使得Vue开发缺乏优雅的方法来在组件间共用代码。
    -
        2. Vue 组件过于依赖this上下文，Vue 背后的一些小技巧使得 Vue 组件的开发看起来与 JavaScript 的开发原则相悖，比如在methods
           中的this竟然指向组件实例来不指向methods所在的对象。这也使得 TypeScript 在Vue2 中很不好用。

- Vue3 中，舍弃了 Options API，转而投向 Composition API。Composition API本质上是将 Options API 背后的机制暴露给用户直接使用，这样用户就拥有了更多的灵活性，也使得 Vue3
  更适合于 TypeScript 结合。

    - **Vue Composition API 使得 Vue3 的开发风格更接近于原生 JavaScript，带给开发者更多地灵活性**

## **7.虚拟DOM**

### **对虚拟DOM的理解？**

- 虚拟DOM就是用来描述真实DOM的javaScript对象，可以将多次修改的DOM一次性渲染到页面上，减少页面的重排重绘，提高渲染性能。 在代码渲染到页面之前，vue会把代码转换成一个对象（虚拟
  DOM）。在每次数据发生变化前，虚拟DOM都会缓存一份，变化之时，现在的虚拟DOM会与缓存的虚拟DOM进行比较。在vue内部封装了diff算法，通过这个算法来进行比较，渲染时修改改变的变化，原先没有发生改变的通过原先的数据进行渲染。

### **虚拟DOM的解析过程**

- ● 首先对将要插入到文档中的 DOM 树结构进行分析，使用 js 对象将其表示出来并将这个 js 对象树给保存下来，最后再将 DOM 片段插入到文档中。
- ● 当页面的状态发生改变，需要对页面的 DOM 的结构进行调整的时候，首先根据变更的状态，重新构建起一棵对象树，然后将这棵新的对象树和旧的对象树进行比较，记录下两棵树的的差异。
- ● 最后将记录的有差异的地方应用到真正的 DOM 树中去，这样视图就更新了。

### **为什么要用虚拟DOM**

- 保证性能下限，在不进行手动优化的情况下，提供过得去的性能

    - 页面渲染的流程

        - 解析HTML -> 生成DOM -> 生成 CSSOM -> Layout -> Paint -> Compiler

    - 对比修改DOM时真实DOM操作和虚拟DOM的过程

        - 真实DOM∶ 生成HTML字符串＋重建所有的DOM元素
        - 虚拟DOM∶ 生成vNode+ DOMDiff＋必要的dom更新

- 跨平台

    - Virtual DOM本质上是JavaScript的对象，它可以很方便的跨平台操作，比如服务端渲染、uniapp等。

### **虚拟DOM真的比真实DOM性能好吗**

- 首次渲染大量DOM时，由于多了一层虚拟DOM的计算，会比innerHTML插入慢。
- 正如它能保证性能下限，在真实DOM操作的时候进行针对性的优化时，还是更快的。

### **DIFF算法的原理**

- ● 首先，对比节点本身，判断是否为同一节点，如果不为相同节点，则删除该节点重新创建节点进行替换
- ● 如果为相同节点，进行patchVnode，判断如何对该节点的子节点进行处理，先判断一方有子节点一方没有子节点的情况(如果新的没有子节点，将旧的子节点移除)
- ● 比较如果都有子节点，则进行updateChildren，判断如何对这些新老节点的子节点进行操作（diff核心）。
- ● 匹配时，找到相同的子节点，递归比较子节点
- ● 更新差异，复用节点

### **Vue中key的作用**

- 第一种情况是 v-if 中使用 key。由于 Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。因此当使用 v-if 来实现元素切换的时候，如果切换前后含有相同类型的元素，那么这个元素就会被复用。如果是相同的
  input 元素，那么切换前后用户的输入不会被清除掉，这样是不符合需求的。因此可以通过使用 key 来唯一的标识一个元素，这个情况下，使用 key 的元素不会被复用。这个时候 key 的作用是用来标识一个独立的元素。
- 第二种情况是 v-for 中使用 key。用 v-for 更新已渲染过的元素列表时，它默认使用“就地复用”的策略。如果数据项的顺序发生了改变，Vue 不会移动 DOM
  元素来匹配数据项的顺序，而是简单复用此处的每个元素。因此通过为每个列表项提供一个 key 值，来以便 Vue 跟踪元素的身份，从而高效的实现复用。这个时候 key 的作用是为了高效的更新渲染虚拟 DOM。
- 总结

    - vue为了更高效的渲染元素，会尽可能的复用元素，而非从头渲染，key可以为节点打标记，而非简单的复用节点。当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】,
      随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则

        - 旧虚拟DOM中找到了与新虚拟DOM相同的key

            - 若虚拟DOM中内容没变, 直接使用之前的真实DOM
            - 若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM

        - 旧虚拟DOM中未找到与新虚拟DOM相同的key

            - 创建新的真实DOM，随后渲染到到页面

### **为什么不建议用index作为key?**

- 若对数据进行：逆序添加、逆序删除等破坏顺序操作:会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低
- 如果逆序添加、逆序删除等破坏顺序的操作且结构中还包含输入类的DOM：会产生错误DOM更新 ==> 界面有问题

