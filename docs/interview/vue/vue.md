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

## **4.vuex**

### **Vuex 的原理**

-

    - vuex概述

        - Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。

            - ● Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
            - ● 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以方便地跟踪每一个状态的变化。

    - 核心流程及主要功能

        - ● Vue Components 是 vue 组件，组件会触发（dispatch）一些事件或动作，也就是图中的 Actions;
        - ● 在组件中发出的动作，肯定是想获取或者改变数据的，但是在 vuex 中，数据是集中管理的，不能直接去更改数据，所以会把这个动作提交（Commit）到 Mutations 中;
        - ● 然后 Mutations 就去改变（Mutate）State 中的数据;
        - ● 当 State 中的数据被改变之后，就会重新渲染（Render）到 Vue Components 中去，组件展示更新后的数据，完成一个流程。

    - 各模块在核心流程中的主要功能

        - ● Vue Components∶ Vue组件。HTML页面上，负责接收用户操作等交互行为，执行dispatch方法触发对应action进行回应。
        - ● dispatch∶操作行为触发方法，是唯一能执行action的方法。
        - ● actions∶ 操作行为处理模块。负责处理Vue
          Components接收到的所有交互行为。包含同步/异步操作，支持多个同名方法，按照注册的顺序依次触发。向后台API请求的操作就在这个模块中进行，包括触发其他action以及提交mutation的操作。该模块提供了Promise的封装，以支持action的链式触发。
        - ● commit∶状态改变提交操作方法。对mutation进行提交，是唯一能执行mutation的方法。
        - ● mutations∶状态改变操作方法。是Vuex修改state的唯一推荐方法，其他修改方式在严格模式下将会报错。该方法只能进行同步操作，且方法名只能全局唯一。
        - ● state∶ 页面状态管理容器对象。集中存储Vuecomponents中data对象的零散数据，全局唯一，以进行统一的状态管理。页面显示所需的数据从该对象中进行读取，并进行状态更新。
        - ● getters∶ state对象读取方法。

    - 总结

        - Vuex 实现了一个单向数据流，在全局拥有一个 State 存放数据，当组件要更改 State 中的数据时，必须通过 Mutation 提交修改信息， Mutation 同时提供了订阅者模式供外部插件调用获取 State
          数据的更新。而当所有异步操作(常见于调用后端接口异步获取更新数据)或批量的同步操作需要走 Action ，但 Action 也是无法直接修改 State 的，还是需要通过Mutation
          来修改State的数据。最后，根据 State 的变化，渲染到视图上。

### **为什么要用 Vuex**

- 对于多层嵌套的组件之间传递数据采取传参或者组件间通信的方式将会非常繁琐，而且通常会导致代码无法维护。所以需要把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，组件树构成了一个巨大的"视图"
  ，不管在树的哪个位置，任何组件都能获取状态或者触发行为。另外，通过定义和隔离状态管理中的各种概念并强制遵守一定的规则，代码将会变得更结构化且易维护。而且vuex中的数据是响应式的，只要vuex中的数据更新，依赖他的数据的组件也会跟着更新。

### **Vuex有哪几种属性？**

- state => 基本数据(数据源存放地)
- getters => 从基本数据派生出来的数据
- mutations => 提交更改数据的方法，同步
- actions => 像一个装饰器，包裹mutations，使之可以异步。
- modules => 模块化Vuex

### ** Vuex中actions和mutations的区别**

- mutations

    - mutation中的操作是一系列的同步函数，用于修改state中的变量的的状态。当使用vuex时需要通过commit来提交需要操作的内容。

- actions

    - Action 可以包含任意异步操作，Action 提交的是 mutation，而不是直接变更状态。

- 区别

    - Mutation专注于修改State，理论上是修改State的唯一途径；Action业务代码、异步请求。
    - Mutation：必须同步执行；Action：可以异步，但不能直接操作State。
    - 在视图更新时，先触发actions，actions再触发mutations

### **为什么 Vuex 的 mutation 中不能做异步操作？**

- 每个mutation执行完成后都会对应到一个新的状态变更，这样devtools就可以将新的状态存下来，然后就可以实现 数据的更新
  了。如果mutation支持异步操作，就没有办法知道状态是何时更新的，无法很好的进行状态的追踪，给调试带来困难。

### **Vuex 和 localStorage 的区别**

- 存储位置区别

    - ● vuex存储在内存中
    - ● localstorage 则以文件的方式存储在本地，只能存储字符串类型的数据，存储对象需要 JSON的stringify和parse方法进行处理。 读取内存比读取硬盘速度要快

- 应用场景区别

    - ● Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。vuex用于组件之间的传值。
    - ● localstorage是本地存储，是将数据存储到浏览器的方法，一般是在跨页面传递数据时使用 。

- 响应式区别

    - Vuex能做到数据的响应式

    - localstorage不能做到数据的响应式

      对于不变的数据确实可以用localstorage可以代替vuex，但是当两个组件共用一个数据源（对象或数组）时，如果其中一个组件改变了该数据源，希望另一个组件响应该变化时，localstorage无法做到

- 时效区别

    - 刷新页面时vuex存储的值会丢失
    - 刷新页面时localstorage存储的值不会丢失

### **Vuex和单纯的全局对象有什么区别？**

- Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
- 不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以方便地跟踪每一个状态的变化。

### **Vuex的严格模式是什么,有什么作用，如何开启？**

- 严格模式作用

    - 在严格模式下，无论何时发生了状态变更且不是由mutation函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。

- 开启方式

    -

### **如何在组件中批量使用Vuex的getter属性**

- 使用mapGetters辅助函数, 利用对象展开运算符将getter混入computed 对象中

    -

### **如何在组件中重复使用Vuex的mutation**

- **在组件中使用，然后调用this.setNumber(10)相当调用this.$store.commit('SET_NUMBER',10)**

## **5.router**

### **对前端路由的理解**

- 路由

    - 路由是url到函数的映射，可以根据不同的url地址展示不同的内容或页面。

- 服务器端路由（后端路由）

    - 对于服务器来说，当接收到客户端发来的HTTP请求，会根据请求的URL，来找到相应的映射函数，然后执行该函数，并将函数的返回值发送给客户端。

- 客户端路由（前端路由）

    - 早期的路由都是后端实现的，直接根据 url 来 reload 页面，页面变得越来越复杂服务器端压力变大，随着 ajax 的出现，页面实现非 reload 就能刷新数据，更新页面内容，使内容的切换更加流畅，可以通过记录 url
      来记录 ajax 的变化，从而实现前端路由。对于客户端（通常为浏览器）来说，路由的映射函数通常是进行一些DOM的显示和隐藏操作。这样，当访问不同的路径的时候，会显示不同的页面组件。

        - 前端路由可以帮助我们在仅有一个页面的情况下，“记住”用户当前走到了哪一步——为 SPA 中的各个视图匹配一个唯一标识。这意味着用户前进、后退触发的新内容，都会映射到不同的 URL 上去。此时即便他刷新页面，因为当前的
          URL 可以标识出他所处的位置，因此内容也不会丢失。

### **Vue-router跳转和location.href有什么区别**

- 使用 location.href= ‘/url’ 来跳转，简单方便，但是刷新了页面；
- 引进 router ，然后使用 router.push( ‘/url’ ) 来跳转，无刷新页面，静态跳转。使用了 diff 算法，实现了按需加载，减少了 dom 的消耗。使用 router
  跳转底层是用history.pushState()

### **$route 和$router 的区别**

- $router 是“路由实例”对象包括了路由的跳转方法，钩子函数等，可以使用$router.push()、$router.replace()、$router.go()等
- $route 是“路由信息对象”，包括 name，path，params，query，meta，fullPath，hash、matched等路由信息参数

### **params和query的区别**

- 用法

    - query可以用name和path来引入；接收参数this.$route.query.name；在路由信息配置时路径path不需要占位
    - params要用name来引入；接收参数this.$route.params.name；在路由信息配置时路径path需要占位

- url地址显示

    - query更加类似于ajax中get传参，在浏览器地址栏中显示参数
    - params则类似于post，在浏览器地址栏中不显示参数

- 刷新

    - query刷新不会丢失query里面的数据
    - params刷新会丢失 params里面的数据（可考虑采取本地存储解决此问题）

### ** 路由的hash和history模式的区别**

- hash模式

    - 简介

        - hash模式是开发中默认的模式，它的URL带着一个#，例如：http://www.abc.com/#/vue，它的hash值就是#/vue。

    - 特点

        -
        hash值会出现在URL里面，但是不会出现在HTTP请求中，对后端完全没有影响。所以改变hash值，不会重新加载页面。这种模式的浏览器支持度很好，低版本的IE浏览器也支持这种模式。hash路由被称为是前端路由，已经成为SPA（单页面应用）的标配。

    - 原理

        - hash模式的主要原理就是onhashchange()事件：

            - 使用onhashchange()
              事件的好处就是，在页面的hash值发生变化时，无需向后端发起请求，window就可以监听事件的改变，并按规则加载相应的代码。除此之外，hash值变化对应的URL都会被浏览器记录下来，这样浏览器就能实现页面的前进和后退。虽然是没有请求后端服务器，但是页面的hash值和对应的URL关联起来了。

- history模式

    - 简介

        - history模式的URL中没有#，它使用的是传统的路由分发模式，即用户在输入一个URL时，服务器会接收这个请求，并解析这个URL，然后做出相应的逻辑处理。

    - 特点

        - 当使用history模式时，URL就像这样：http://abc.com/user/id。相比hash模式更加好看。但是，history模式需要后台配置支持。如果后台没有正确配置，访问时会返回404。

    - API

        - history api可以分为两大部分，切换历史状态和修改历史状态：

            - 修改历史状态

                - 包括了 HTML5 History Interface 中新增的 pushState() 和 replaceState()
                  方法，这两个方法应用于浏览器的历史记录栈，提供了对历史记录进行修改的功能。只是当他们进行修改时，虽然修改了url，但浏览器不会立即向后端发送请求。如果要做到改变url但又不刷新页面的效果，就需要前端用上这两个API。

            - 切换历史状态

                - 包括forward()、back()、go()三个方法，对应浏览器的前进，后退，跳转操作。

    - 虽然history模式丢弃了丑陋的#。但是，它也有自己的缺点，就是在刷新页面的时候，如果没有相应的路由或资源，就会刷出404来。
    - 切换为history模式

        -

- 调用 history.pushState() 与直接修改 hash对比

    - pushState() 设置的新 URL 可以是与当前 URL 同源的任意 URL；而 hash 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL；
    - pushState() 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发动作将记录添加到栈中；
    - pushState() 通过 stateObject 参数可以添加任意类型的数据到记录中；而 hash 只可添加短字符串；
    - pushState() 可额外设置 title 属性供后续使用。
    - hash模式下，仅hash符号之前的url会被包含在请求中，后端如果没有做到对路由的全覆盖，也不会返回404错误；history模式下，前端的url必须和实际向后端发起请求的url一致，如果没有对用的路由处理，将返回404错误。

### **如何获取页面的hash变化**

- 监听$route的变化

    -

- window.location.hash读取#值

    - window.location.hash 的值可读可写，读取来判断状态是否改变，写入时可以在不重载网页的前提下，添加一条历史访问记录。

### **如何定义动态路由？如何获取传过来的动态参数？**

- params传参

    - 路由格式

        - 配置路由格式：/router/:id
        - 传递的方式：在path后面跟上对应的值
        - 传递后形成的路径：/router/123

    - 定义路由

        -

    - 接收参数

        - 通过 $route.params.userid 获取传递的值

- query传参

    - 路由格式

        - 配置路由格式：/router？key1=value1&key2=value2
        - 传递的方式：对象中使用query的key作为传递方式
        - 传递后形成的路径：/route?id=123&uname=cara

    - 定义路由

        -

    - 接收参数

        - 通过$route.query.userid获取传递的值

### **Vue-Router 的懒加载如何实现**

- 非懒加载

    -

- 懒加载

    - 使用箭头函数+import动态加载

        -

    - 使用箭头函数+require动态加载

        -

    - webpack

      使用webpack的require.ensure技术，也可以实现按需加载。 这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。

        -

### **Vue-router 导航守卫有哪些**

- 全局守卫（前置/后置）：beforeEach、beforeResolve、afterEach
- 路由独享的守卫：beforeEnter
- 组件内的守卫：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave

### **Vue-router 路由守卫在生命周期的体现**

- 完整的路由导航解析流程

    - ● 触发进入其他路由。
    - ● 调用要离开路由的组件守卫beforeRouteLeave
    - ● 调用全局前置守卫∶ beforeEach
    - ● 在重用的组件里调用 beforeRouteUpdate
    - ● 调用路由独享守卫 beforeEnter。
    - ● 解析异步路由组件。
    - ● 在将要进入的路由组件中调用 beforeRouteEnter
    - ● 调用全局解析守卫 beforeResolve
    - ● 导航被确认。
    - ● 调用全局后置钩子的 afterEach 钩子。
    - ● 触发DOM更新（mounted）。
    - ● 执行beforeRouteEnter 守卫中传给 next 的回调函数

- 触发钩子的完整顺序

    - ● beforeRouteLeave：路由组件的组件离开路由前钩子，可取消路由离开。
    - ● beforeEach：路由全局前置守卫，可用于登录验证、全局路由loading等。
    - ● beforeEnter：路由独享守卫
    - ● beforeRouteEnter：路由组件的组件进入路由前钩子。
    - ● beforeResolve：路由全局解析守卫
    - ● afterEach：路由全局后置钩子
    - ● beforeCreate：组件生命周期，不能访问this。
    - ● created;组件生命周期，可以访问this，不能访问dom。
    - ● beforeMount：组件生命周期
    - ● deactivated：离开缓存组件a，或者触发a的beforeDestroy和destroyed组件销毁钩子。
    - ● mounted：访问/操作dom。
    - ● activated：进入缓存组件，进入a的嵌套子组件（如果有的话）。
    - ● 执行beforeRouteEnter回调函数next。

- 导航行为被触发到导航完成的整个过程

    - ● 导航行为被触发，此时导航未被确认。
    - ● 在失活的组件里调用离开守卫 beforeRouteLeave。
    - ● 调用全局的 beforeEach守卫。
    - ● 在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。
    - ● 在路由配置里调用 beforeEnteY。
    - ● 解析异步路由组件（如果有）。
    - ● 在被激活的组件里调用 beforeRouteEnter。
    - ● 调用全局的 beforeResolve 守卫（2.5+），标示解析阶段完成。
    - ● 导航被确认。
    - ● 调用全局的 afterEach 钩子。
    - ● 非重用组件，开始组件实例的生命周期：beforeCreate&created、beforeMount&mounted
    - ● 触发 DOM 更新。
    - ● 用创建好的实例调用 beforeRouteEnter守卫中传给 next 的回调函数。
    - ● 导航完成

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

