# Vue
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
        originPush.call(this, location, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve || reject) { // 如果指定了成功或失败的回调
        originReplace.call(this, location, resolve, reject) // 直接调用原来的replace方法
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}
```



## 5.vue中的key有什么作用？（key的内部原理）

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

    1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:

        - 会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

    1. 如果结构中还包含输入类的DOM：

        - 会产生错误DOM更新 ==> 界面有问题。

4. 开发中如何选择key?:

    1. 最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。

    2. 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，

        - 使用index作为key是没有问题的。

## 6.路由传参

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


