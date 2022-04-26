# 五、router

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
