# CSS

## 简介

**层叠样式表** (Cascading Style Sheets，缩写为 **CSS**），用于设置和布置网页 - 例如，更改内容的字体，颜色，大小和间距，将其拆分为多个列，或添加动画和其他装饰功能。

CSS 是**开放网络**的核心语言之一，由 [W3C 规范](https://w3.org/Style/CSS/#specs) 实现跨浏览器的标准化。CSS节省了大量的工作。
样式可以通过定义保存在外部.css文件中，同时控制多个网页的布局，这意味着开发者不必经历在所有网页上编辑布局的麻烦。CSS 被分为不同等级：CSS1 现已废弃， CSS2.1
是推荐标准， [CSS3](https://developer.mozilla.org//docs/CSS/CSS3) 分成多个小模块且正在标准化中。

#### 编写的位置

1. 第一种：内联样式：可将css代码编写到标签的style属性中

   `<p style="color: red; font-size: 30px;">海内存知己，天涯若比邻！</p>`

2. 第二种：内部样式表：可以将css代码编写到一个style标签中

   ```html
   <style>
       p {
           color: green;
           font-size: 30px;
           background-color: yellow;
       }
   </style>
   ```

3. 第三种：外部样式表：可以将css代码编写到一个外部文件中，然后通过link标签引入

   `<link rel="stylesheet" href="./index.css">`

## CSS 语法

和 HTML 类似，CSS 也不是真正的编程语言，甚至不是标记语言。它是一门样式表语言，这也就是说人们可以用它来选择性地为 HTML 元素添加样式。举例来说，要选择一个 HTML 页面里所有的段落元素，然后将其中的文本改成红色，可以这样写
CSS：

```css
p {
    color: red;
}
```

#### “CSS 规则集”详解

让我们来仔细看一看上述CSS：

![图解CSS声明](https://mdn.mozillademos.org/files/16483/css-declaration.png)

整个结构称为 **规则集**（通常简称“规则”），各部分释义如下：

- 选择器（Selector）

  HTML 元素的名称位于规则集开始。它选择了一个或多个需要添加样式的元素（在这个例子中就是 `p` 元素）。要给不同元素添加样式只需要更改选择器就行了。

- 声明（**Declaration**）

  一个单独的规则，如 `color: red;` 用来指定添加样式元素的**属性**。

- 属性（**Properties**）

  改变 HTML 元素样式的途径。（本例中 `color` 就是元素的属性。）CSS 中，由编写人员决定修改哪个属性以改变规则。

- 属性的值（Property value）

  在属性的右边，冒号后面即**属性的值**，它从指定属性的众多外观中选择一个值（我们除了 `red` 之外还有很多属性值可以用于 `color` ）。

注意其他重要的语法：

- 每个规则集（除了选择器的部分）都应该包含在成对的大括号里（`{}`）。
- 在每个声明里要用冒号（`:`）将属性与属性值分隔开。
- 在每个规则集里要用分号（`;`）将各个声明分隔开。

如果要同时修改多个属性，只需要将它们用分号隔开，就像这样：

```css
p {
    color: red;
    width: 500px;
    border: 1px solid black;
}
```

#### 多元素选择

也可以选择多种类型的元素并为它们添加一组相同的样式。将不同的选择器用逗号分开。例如：

```css
p, li, h1 {
    color: red;
}
```

## 选择器

CSS选择器是CSS规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个HTML元素应当是被选为应用规则中的CSS属性值的方式。选择器所选择的元素，叫做“选择器的对象”。

#### 基本选择器

| 选择器名称              | 选择的内容              | 示例            |
|:-------------------|:-------------------|:--------------|
| 通配选择器              | 选中页面中的所有元素         | `*{}`         |
| 元素选择器（也称作标签或类型选择器） | 所有指定(该)类型的 HTML 元素 | `p{}`         |
| ID 选择器             | 具有特定 ID 的元素        | `#my-id{}`    |
| 类选择器               | 具有特定类的元素           | `.my-class{}` |
| 属性选择器              | 拥有特定属性的元素          | `img[src]`    |
| 选择器列表              | 同时选择多个选择器对应的元素     | `div,p,span`  |
| 子元素选择器             | 选择指定父元素的指定子元素      | `ul > li`     |
| 后代元素选择器            | 选中指定元素内的指定后代元素     | `div span`    |
| 相邻兄弟选择器            | 选择指定元素第一个指定兄弟元素    | `div + p`     |
| 通用兄弟选择器            | 指定元素所有指定兄弟元素       | `div ~ p`     |



- 根据元素的属性来获取元素
    - [属性名] 选择含有指定属性的元素
    - [属性名 = 属性值] 选择含有指定属性和属性值的元素
    - [属性名 ^= 属性值] 选择属性值以指定值开头的元素
    - [属性名 $= 属性值] 选择属性值以指定值结尾的元素
    - [属性名 *= 属性值] 选择属性值中含有某值的元素的元素

**伪类选择器**

- 伪类（不存在的类，特殊的类）
- 伪类用来描述一个元素的特殊状态
- 比如：第一个子元素、被点击的元素、鼠标移入的元素
- 伪类一般情况下都是使用:开头
    - :first-child 第一个子元素
    - :first-of-type 同类型的第一个子元素
    - :last-child 最后一个子元素
    - :last-of-type 同类型的最后一个子元素
    - :nth-child(n) 选中第n个子元素
    - :nth-of-type(n)      同类型的第N个子元素
    - :only-child 唯一的子元素
    - :only-of-type 同类型中唯一的子元素
    - :empty 空元素
    - :not() 除了
    - :link 正常的链接（没访问过的链接）
    - :visited 访问过的链接
    - :hover 鼠标移入的状态
    - :active 鼠标点击的状态

**伪元素选择器**

- 伪元素，表示页面中一些特殊的并不真实存在的元素（特殊的位置）
- 伪元素使用 :: 开头
    - ::before 元素内部的开始位置
    - ::after 元素内部的结束位置
    - ::selection 选中的内容
    - ::first-letter 第一个字母（汉字）
    - ::first-line 第一行

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">选择器</th>
   <th scope="col">示例</th>
   <th scope="col">学习CSS的教程</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="//docs/Web/CSS/Type_selectors">类型选择器</a></td>
   <td><code>h1 {&nbsp; }</code></td>
   <td><a href="//docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#Type_selectors" class="page-not-created" title="This is a link to an unwritten page">类型选择器</a></td>
  </tr>
  <tr>
   <td><a href="//docs/Web/CSS/Universal_selectors">通配选择器</a></td>
   <td><code>* {&nbsp; }</code></td>
   <td><a href="//docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#The_universal_selector" class="page-not-created" title="This is a link to an unwritten page">通配选择器</a></td>
  </tr>
  <tr>
   <td><a href="//docs/Web/CSS/Class_selectors">类选择器</a></td>
   <td><code>.box {&nbsp; }</code></td>
   <td><a href="//docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#Class_selectors">类选择器</a></td>
  </tr>
  <tr>
   <td><a href="//docs/Web/CSS/ID_selectors">ID选择器</a></td>
   <td><code>#unique { }</code></td>
   <td><a href="//docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#ID_Selectors">ID选择器</a></td>
  </tr>
  <tr>
   <td><a href="//docs/Web/CSS/Attribute_selectors">标签属性选择器</a></td>
   <td><code>a[title] {&nbsp; }</code></td>
   <td><a href="//docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Attribute_selectors">标签属性选择器</a></td>
  </tr>
  <tr>
   <td><a href="//docs/Web/CSS/Pseudo-classes">伪类选择器</a></td>
   <td><code>p:first-child { }</code></td>
   <td><a href="//docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-class">伪类</a></td>
  </tr>
  <tr>
   <td><a href="//docs/Web/CSS/Pseudo-elements">伪元素选择器</a></td>
   <td><code>p::first-line { }</code></td>
   <td><a href="//docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-element">伪元素</a></td>
  </tr>
  <tr>
   <td><a href="//docs/Web/CSS/Descendant_combinator">后代选择器</a></td>
   <td><code>article p</code></td>
   <td><a href="//docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#Descendant_Selector">后代运算符</a></td>
  </tr>
  <tr>
   <td><a href="//docs/Web/CSS/Child_combinator">子代选择器</a></td>
   <td><code>article &gt; p</code></td>
   <td><a href="//docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#Child_combinator">子代选择器</a></td>
  </tr>
  <tr>
   <td><a href="//docs/Web/CSS/Adjacent_sibling_combinator">相邻兄弟选择器</a></td>
   <td><code>h1 + p</code></td>
   <td><a href="//docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#Adjacent_sibling">相邻兄弟</a></td>
  </tr>
  <tr>
   <td><a href="//docs/Web/CSS/General_sibling_combinator">通用兄弟选择器</a></td>
   <td><code>h1 ~ p</code></td>
   <td><a href="//docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#General_sibling">通用兄弟</a></td>
  </tr>
 </tbody>
</table>

**选择器优先级**

- 当我们通过不同的选择器，选中相同的元素，并且为相同的样式设置不同的值时，此时就发生了样式的冲突。
- 发生样式冲突时，应用哪个样式由选择器的权重（优先级）决定

| 内联样式/行内样式 | 1，0，0，0 |
| ----------------- | ---------- |
| id选择器          | 0，1，0，0 |
| 类和伪类选择器    | 0，0，1，0 |
| 元素选择器        | 0，0，0，1 |
| 通配选择器        | 0，0，0，0 |
| 继承的样式        | 没有优先级 |

- 比较优先级时，需要将所有的选择器的优先级相加计算，最后优先级越高，则越优先显示（分组选择器是单独计算的）

-
    - 选择器的累加不会超过其最大的数量级，类选择器在高也不会超过id选择器
    - 如果优先级计算后相等，此时则优先使用靠下的样式

- 可以在某一个样式的后面添加 **!important**，则此时该样式会获取到最高的优先级，甚至超过内联样式

注意：在开发中这个一定要慎用

https://specifishity.com/

![specifishity](/images/css/specifishity.png)

## 盒模型

在 CSS 中，所有的元素都被一个个的“盒子（box）”包围着，理解这些“盒子”的基本原理，是我们使用CSS实现准确布局、处理元素排列的关键。

在 CSS 中我们广泛地使用两种“盒子” —— **块级盒子** (**block box**) 和 **内联盒子** (**inline box**)**。**这两种盒子会在**页面流**（page flow）和**元素之间的关系**
方面表现出不同的行为:

一个被定义成块级的（block）盒子会表现出以下行为:

- 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽
- 每个盒子都会换行
- [`width`](https://developer.mozilla.org//docs/Web/CSS/width)
  和 [`height`](https://developer.mozilla.org//docs/Web/CSS/height) 属性可以发挥作用
- 内边距（padding）, 外边距（margin） 和 边框（border） 会将其他元素从当前盒子周围“推开”

除非特殊指定，诸如标题(`<h1>`等)和段落(`<p>`)默认情况下都是块级的盒子。

如果一个盒子对外显示为 `inline`，那么他的行为如下:

- 盒子不会产生换行。
- [`width`](https://developer.mozilla.org//docs/Web/CSS/width)
  和 [`height`](https://developer.mozilla.org//docs/Web/CSS/height) 属性将不起作用。
- 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 `inline` 状态的盒子推开。
- 水平方向的内边距、外边距以及边框会被应用且会把其他处于 `inline` 状态的盒子推开。

用做链接的 `<a>` 元素、 `<span>`、 `<em>` 以及 `<strong>` 都是默认处于 `inline` 状态的。

我们通过对盒子[`display`](https://developer.mozilla.org//docs/Web/CSS/display) 属性的设置，比如 `inline` 或者 `block` ，来控制盒子的外部显示类型。

组成部分：`content(width|height) + padding(内边距) + border(边框) + margin(外边距)`

百分比单位根据父元素的`width`计算

w3c标准：`width = width`

IE标准：`width = content + padding + border`

切换盒模型的标准：

- w3c(默认)：`box-sizing: content-box`
- IE：`box-sizing: border-box`

```css
/* 清除浮动 */
.clearfix::after {
    content: '';
    clear: both;
    display: block;
}
```

## overflow和BFC-定位/绝对定位

### overflow

处理内容溢出

- 溢出隐藏：`hidden`
- 溢出自动添加滚动条：`scroll`

### BFC

块级格式化上下文，如果一个元素具有BFC，内部元素再怎么弄，都不会影响到外面的元素

**开启BFC的方式：**

- `float`的值不是none
- `overflow`的值不是默认值
- `display: table-cell;`
- `position`的值不是`static和relative`

### 定位

#### 相对定位`position: relative`

1. 不设置偏移量元素不会发生变化
2. 元素不会脱离文档流
3. 不会改变元素的性质
4. 元素会提升一个层级
5. 相对于自身在文档流中的位置进行定位

#### 绝对定位`position: absolute;`

1. 不设置偏移量元素不会发生变化
2. 元素会脱离文档流
3. 会改变元素性质，行内元素变块元素，块元素高度被内容撑开
4. 元素会提升一个等级
5. 相对其包含块进行定位
    1. 初始包含块：`html`根元素
    2. 默认包含块是离当前元素最近的祖先元素
    3. 对于绝对定位元素，包含快是离它最近的开启了定位的祖先元素。如果所有元素都没有开启定位，则其包含块就是初始包含块

#### 固定定位`position: fixed;`

1. 大部分特点和绝对定位一样
2. 相对于视口进行定位的
3. 会固定在网页的视口上，不会随网页滚动

