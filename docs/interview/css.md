# CSS面试

## **1.CSS基础**

### **CSS选择器及优先级**

- **选择器**

    - 基础选择器

        - 通配符选择器
        - 标签选择器/元素选择器
        - 类选择器
        - id选择器

    - 复合选择器

        - 后代选择器
        - 子代选择器
        - 并集选择器
        - 伪类选择器

    - 新增选择器

        - 属性选择器
        - 结构伪类选择器
        - 伪元素选择器

- **优先级**

    - 0：通配符选择器（继承）
    - 1：标签选择器、伪元素选择器
    - 10：类选择器、属性选择器、结构伪类选择器
    - 100：id选择器
    - 1000：内联样式
    - 无穷大：！important
    - 需计算累加权重：复合选择器

- **注意**

    - !important声明的样式的优先级最高；
    - 如果优先级相同，则最后出现的样式生效；
    - 继承得到的样式的优先级最低；
    - 通用选择器（*）、子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以它们的权值都为 0 ；
    - 样式表的来源不同时，优先级顺序为：内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式。

### **CSS中可继承与不可继承属性有哪些**

- **不可继承属性**

    - display：元素的显示模式（块级、行内元素、行内块）
    - 文本属性

        - `vertical-align`：垂直对齐方式
        - `text-decoration`：规定添加到文本的装饰（underline-line、line-through、overline）
        - `text-shadow`：文本阴影效果
        - `white-space`：空白符的处理
        - `unicode-bidi`：设置文本的方向

    - 盒子模型的属性

        - `border`
        - `margin`
        - `padding`
        - `width`
        - `height`

    - 背景属性

        - background、background-color、background-image、background-repeat、background-position、background-attachment
        - 定位属性

            - float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index

        - 生成内容属性

            - content、counter-reset、counter-increment

        - 轮廓样式属性

            - outline-style、outline-width、outline-color、outline

        - 页面样式属性

            - size、page-break-before、page-break-after

        - 声音样式属性

            - pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

- **可继承属性**

    - 字体系列属性

        - font-family
        - font-size
        - font-weight（normal、bold）
        - font-style（normal、italic）

    - 文本系列属性

        - text-align：文本水平对齐
        - text-indent：文本缩进
        - line-height：行高
        - word-spacing：单词之间的间距
        - letter-spacing：中文或者字母之间的间距
        - text-transform：控制文本大小写（就是uppercase、lowercase、capitalize这三个）
        - color：文本颜色

    - 元素可见性

        - visibility：控制元素显示隐藏

    - 列表布局属性

        - list-style：列表风格，包括list-style-type、list-style-image等

    - 光标属性

        - cursor：光标显示为何种形态

### **display的属性值及其作用**

- none：元素不显示，并且会从文档流中移除。
- block：元素显示/块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
- inline：行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。
- inline-block：行内块元素类型。默认宽度为内容宽度，可以设置宽高，同行显示（有间隙）。
- list-item：像块类型元素一样显示，并添加样式列表标记。
- table：此元素会作为块级表格来显示。
- inherit：规定应该从父元素继承display属性的值。

### **display的block、inline和inline-block的区别**

- **block：块级元素类型**

    - 独占一行，多个元素换行显示
    - 可以设置宽度、高度、border、padding、margin

- **inline：行内元素类型**

    - 一行显示多个
    - 不可以设置宽度、高度
    - 可设置水平方向的padding和margin，不可以设置垂直方向的padding和margin

- **inline-block：行内块元素类型**

    - 一行内显示多个，且有间隙，默认宽度为内容的宽度
    - 可以设置宽度和高度

### **隐藏元素的方法有哪些**

- display：none

    - 渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置

- visibility：hidden

    - 元素在页面中仍占据空间

- opacity: 0

    - 将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间

- position: absolute

    - 通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。

- z-index: 负值

    - 来使其他元素遮盖住该元素，以此来实现隐藏。

- clip/clip-path

    - 使用元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置

- transform: scale(0,0)

    - 将元素缩放为 0，来实现元素的隐藏。这种方法下，元素仍在页面中占据位置

### **display:none与visibility:hidden的区别**

- 这两个属性都是让元素隐藏，不可见。两者区别如下：

    - 在渲染树中

        - display:none会让元素完全从渲染树中消失，渲染时不会占据任何空间；
        - visibility:hidden不会让元素从渲染树中消失，渲染的元素还会占据相应的空间，只是内容不可见。

    - 是否是继承属性

        - display:none是非继承属性，子孙节点会随着父节点从渲染树消失，通过修改子孙节点的属性也无法显示；
        - visibility:hidden是继承属性，子孙节点消失是由于继承了hidden，通过设置visibility:visible可以让子孙节点显示；

    - 修改常规文档流中元素的 display 通常会造成文档的重排，但是修改visibility属性只会造成本元素的重绘；
    - 如果使用读屏器，设置为display:none的内容不会被读取，设置为visibility:hidden的内容会被读取。

### **link和@import的区别**

- 两者都是外部引用CSS的方式，它们的区别如下：

    - link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。
    - link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。
    - link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。
    - link支持使用Javascript控制DOM去改变样式；而@import不支持。

### **transition和animation的区别**

- **transition是过渡属性**

    - 强调过渡，它的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。它类似于flash的补间动画，设置一个开始关键帧，一个结束关键帧。

- **animation是动画属性**

    - 它的实现不需要触发事件，设定好时间之后可以自己执行，且可以循环一个动画。它也类似于flash的补间动画，但是它可以设置多个关键帧（用@keyframe定义）完成动画。

### **伪元素和伪类的区别和作用？**

- 伪元素：在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。
- 伪类：将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。

### ** 对盒模型的理解**

- 两种盒模型（box-sizing），但是都包含content、padding、border、margin

    - box-sizing：content-box 盒子大小为width+padding+border（以前默认的，会撑大盒子）
    - box-sizing：border-box 盒子大小为width
      如果盒子模型我们改为了box-sizing：border-box，那padding和border就不会撑大盒子了（前提padding和border不会超过width宽度）

### **为什么有时候⽤translate来改变位置⽽不是定位？**

- translate 是 transform 属性的⼀个值。改变transform或opacity不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。⽽改变绝对定位会触发重新布局，进⽽触发重绘和复合。transform使浏览器为元素创建⼀个 GPU 图层，但改变绝对定位会使⽤到 CPU。 因此translate()更⾼效，可以缩短平滑动画的绘制时间。 ⽽translate改变位置时，元素依然会占据其原始空间，绝对定位就不会发⽣这种情况。translate不会影响其他元素的位置，而绝对定位会脱标，从而影响其他元素的位置

### **li 与 li 之间有看不见的空白间隔是什么原因引起的？如何解决？**

- 原因：浏览器会把inline内联元素间的空白字符（空格、换行、Tab等）渲染成一个空格。为了美观，通常是一个`<li>`放在一行，这导致`<li>`换行后产生换行字符，它变成一个空格，占用了一个字符的宽度。
- 解决办法：
  （1）为`<li>`设置float:left。不足：有些容器是不能设置浮动，如左右切换的焦点图等。
  （2）将所有`<li>`写在同一行。不足：代码不美观。
  （3）将`<ul>`内的字符尺寸直接设为0，即font-size:0。不足：`<ul>`中的其他字符尺寸也被设为0，需要额外重新设定其他字符尺寸，且在Safari浏览器依然会出现空白间隔。
  （4）消除`<ul>`的字符间隔letter-spacing:-8px，不足：这也设置了`<li>`内的字符间隔，因此需要将`<li>`内的字符间隔设为默认letter-spacing:normal。

### **CSS3中有哪些新特性**

- **新增选择器**

    - 属性选择器
    - 结构伪类选择器
    - 伪元素选择器

- **2D转换：transform**

    - 位移：transform：translate（100px，100px）
    - 缩放：transform：scale（1，1）
    - 旋转：transform：rotate（45deg）

- **3D转换：transform**

    - 位移：transform：translate（100px，100px，100px）
    - 旋转：transform：rotate（0，0，1，45deg）
    - 3D呈现：transform-style

        - flat：子元素不开启3d空间
        - preserve-3d：子元素开启3d空间

    - 透视：perspective（单位px）

        - 人的眼睛到屏幕的距离；近大远小。

- **动画**

    - @keyframes 动画名称 {0% {width：100px} 100% {width：200px}}

- **过渡：transition**

    - 谁过度给谁加

- **其他特性**

    - 背景渐变background：linear-gradient（top left，red，pink）
    - 图片模糊：filter：blur（5px）数值越大越模糊
    - calc函数：width：calc（100% - 80px）
    - 圆角：border-radius
    - 文字特效 （text-shadow）
    - 文字渲染 （text-decoration）

### **常见的图片格式和适用场景**

- **BMP**

    - 是无损的、既支持索引色也支持直接色的点阵图。这种图片格式几乎没有对数据进行压缩，所以BMP格式的图片通常是较大的文件。

- **GIF**

    - 是无损的、采用索引色的点阵图。采用LZW压缩算法进行编码。文件小，是GIF格式的优点，同时，GIF格式还具有支持动画以及透明的优点。但是GIF格式仅支持8bit的索引色，所以GIF格式适用于对色彩要求不高同时需要文件体积较小的场景。

- **JPEG**

    - 是有损的、采用直接色的点阵图。JPEG的图片的优点是采用了直接色，得益于更丰富的色彩，JPEG非常适合用来存储照片，与GIF相比，JPEG不适合用来存储企业Logo、线框类的图。因为有损压缩会导致图片模糊，而直接色的选用，又会导致图片文件较GIF更大。

- **PNG-8**

    - 是无损的、使用索引色的点阵图。PNG是一种比较新的图片格式，PNG-8是非常好的GIF格式替代者，在可能的情况下，应该尽可能的使用PNG-8而不是GIF，因为在相同的图片效果下，PNG-8具有更小的文件体积。除此之外，PNG-8还支持透明度的调节，而GIF并不支持。除非需要动画的支持，否则没有理由使用GIF而不是PNG-8。

- **PNG-24**

    - 是无损的、使用直接色的点阵图。PNG-24的优点在于它压缩了图片的数据，使得同样效果的图片，PNG-24格式的文件大小要比BMP小得多。当然，PNG24的图片还是要比JPEG、GIF、PNG-8大得多。

- **SVG**

    - 是无损的矢量图。SVG是矢量图意味着SVG图片由直线和曲线以及绘制它们的方法组成。当放大SVG图片时，看到的还是线和曲线，而不会出现像素点。SVG图片在放大时，不会失真，所以它适合用来绘制Logo、Icon等。

- **WebP**

    - 是谷歌开发的一种新图片格式，WebP是同时支持有损和无损压缩的、使用直接色的点阵图。从名字就可以看出来它是为Web而生的，什么叫为Web而生呢？就是说相同质量的图片，WebP具有更小的文件体积。现在网站上充满了大量的图片，如果能够降低每一个图片的文件大小，那么将大大减少浏览器和服务器之间的数据传输量，进而降低访问延迟，提升访问体验。目前只有Chrome浏览器和Opera浏览器支持WebP格式，兼容性不太好。
      ● 在无损压缩的情况下，相同质量的WebP图片，文件大小要比PNG小26%；
      ● 在有损压缩的情况下，具有相同图片精度的WebP图片，文件大小要比JPEG小25%~34%；
      ● WebP图片格式支持图片透明度，一个无损压缩的WebP图片，如果要支持透明度只需要22%的格外文件大小。

### **对 CSSSprite 的理解**

- CSSSprite（精灵图），将一个页面涉及到的所有图片都包含到一张大图中去，然后利用CSS的 background-image，background-repeat，background-position属性的组合进行背景定位。
- 优点

    - 利用CSS Sprite能很好地减少网页的http请求，从而大大提高了页面的性能，这是CSS Sprite最大的优点；
    - CSS Sprite能减少图片的字节，把3张图片合并成1张图片的字节总是小于这3张图片的字节总和。

- 缺点

    - 在图片合并时，要把多张图片有序的、合理的合并成一张图片，还要留好足够的空间，防止板块内出现不必要的背景。在宽屏及高分辨率下的自适应页面，如果背景不够宽，很容易出现背景断裂；
    - CSSSprite在开发的时候相对来说有点麻烦，需要借助photoshop或其他工具来对每个背景单元测量其准确的位置。
    - 维护方面：CSS Sprite在维护的时候比较麻烦，页面背景有少许改动时，就要改这张合并的图片，无需改的地方尽量不要动，这样避免改动更多的CSS，如果在原来的地方放不下，又只能（最好）往下加图片，这样图片的字节就增加了，还要改动CSS。

### **什么是物理像素，逻辑像素和像素密度，为什么在移动端开发时需要用到@3x, @2x这种图片？**

- 物理像素：指的是设备屏幕实际拥有的像素点。一个设备生产出来，它的像素就已经确定了，iphone6的分辨率是375px * 667px。
- 逻辑像素：是我们进行CSS样式设计时的一种抽象单位，它可以自动在不同设备之间调节。
- 像素密度/设备像素比：设备的物理像素 / CSS像素
- 对于一张50px*50px的图片，在手机Retina屏中打开，按照刚才的物理像素比会放大倍数，这样会造成图片模糊
  也就是说当我们需要一个50px*50px的图片的时候，放到手机上会显示100*100的，图片放大会模糊，可以准备一个原本就是100*100的图片，把他缩小大50*50，那么在手机上即使放大，也不会出现模糊的问题。移动端开发时需要用到@3x, @2x这种图片目的是使图片分辨率高一些，不失真

### **margin 和 padding 的使用场景**

- 需要在border外侧添加空白，使用 margin；
- 需要在border内测添加空白，使用 padding。

### **对line-height 的理解及其赋值方式**

- **line-height的概念：**

    - line-height 指一行文本的高度，包含了字间距，上间距、下间距，实际上是下一行基线到上一行基线距离；
    - 如果一个标签没有定义 height 属性，那么其最终表现的高度由 line-height 决定；
    - 一个容器没有设置高度，那么撑开容器高度的是 line-height，而不是容器内的文本内容；
    - 把 line-height 值设置为 height 一样大小的值可以实现单行文字的垂直居中；
    - line-height 和 height 都能撑开一个高度；

- **line-height 的赋值方式：**

    - 带单位：px 是固定值，而 em 会参考父元素 font-size 值计算自身的行高
    - 纯数字：会把比例传递给后代。例如，父级行高为 1.5，子元素字体为 18px，则子元素行高为 1.5 * 18 = 27px
    - 百分比：将计算后的值传递给后代

### **CSS 优化和提高性能的方法有哪些？**

- 加载性能

    - css压缩：将写好的css进行打包压缩，可以减小文件体积。
    - css单一样式：当需要下边距和左边距的时候，很多时候会选择使用 margin:top 0 bottom 0；但margin-bottom:bottom;margin-left:left;执行效率会更高。
    - 减少使用@import，建议使用link，因为后者在页面加载时一起加载，前者是等待页面加载完成之后再进行加载。

- 选择器性能

    - 关键选择器（key selector）。选择器的最后面的部分为关键选择器（即用来匹配目标元素的部分）。CSS选择符是从右到左进行匹配的。当使用后代选择器的时候，浏览器会遍历所有子元素来确定是否是指定的元素等等；
    - 如果规则拥有ID选择器作为其关键选择器，则不要为规则增加标签。过滤掉无关的规则（这样样式系统就不会浪费时间去匹配它们了）。
    - 避免使用通配规则，如*{}计算次数惊人，只对需要用到的元素进行选择。
    - 尽量少的去对标签进行选择，而是用class。
    - 尽量少的去使用后代选择器，降低选择器的权重值。后代选择器的开销是最高的，尽量将选择器的深度降到最低，最高不要超过三层，更多的使用类来关联每一个标签元素。
    - 了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则。

- 渲染性能

    - 慎重使用高性能属性：浮动、定位。
    - 尽量减少页面重排、重绘。
    - 去除空规则：｛｝。空规则的产生原因一般来说是为了预留样式。去除这些空规则无疑能减少css文档体积。
    - 属性值为0时，不加单位。
    - 属性值为浮动小数0.**，可以省略小数点之前的0。
    - 标准化各种浏览器前缀：带浏览器前缀的在前。标准属性在后。
    - 不使用@import前缀，它会影响css的加载速度。
    - 选择器优化嵌套，尽量避免层级过深。
    - css雪碧图，同一页面相近部分的小图标，方便使用，减少页面的请求次数，但是同时图片本身会变大，使用时，优劣考虑清楚，再使用。
    - 正确使用display的属性，由于display的作用，某些样式组合会无效，徒增样式体积的同时也影响解析性能。
    - 不滥用web字体。对于中文网站来说WebFonts可能很陌生，国外却很流行。web fonts通常体积庞大，而且一些浏览器在下载web fonts时会阻塞页面渲染损伤性能。

- 可维护性、健壮性

    - 将具有相同属性的样式抽离出来，整合并通过class在页面中进行使用，提高css的可维护性。
    - 样式与内容分离：将css代码定义到外部css中。

### **CSS预处理器/后处理器是什么？为什么要使用它们？**

- 预处理器：less，sass，stylus，用来预编译。sass或者less，增加了css代码的复用性。层级，mixin， 变量，循环， 函数等对编写以及开发UI组件都极为方便。

    - css预处理器为css增加一些编程特性，无需考虑浏览器的兼容问题，可以在CSS中使用变量，简单的逻辑程序，函数等在编程语言中的一些基本的性能，可以让css更加的简洁，增加适应性以及可读性，可维护性等。

- 后处理器， 如： postCss，通常是在完成的样式表中根据css规范处理css，让其更加有效。目前最常做的是给css属性添加浏览器私有前缀，实现跨浏览器兼容性的问题。
- 使用原因

    - 结构清晰， 便于扩展
    - 可以很方便的屏蔽浏览器私有语法的差异
    - 可以轻松实现多重继承
    - 完美的兼容了CSS代码，可以应用到老项目中

### **Sass、Less 是什么？为什么要使用他们？ **

- 他们都是 CSS 预处理器，是 CSS 上的一种抽象层。他们是一种特殊的语法/语言编译成 CSS。 例如 Less 是一种动态样式语言，将 CSS 赋予了动态语言的特性，如变量，继承，运算， 函数，LESS 既可以在客户端上运行 (支持 IE 6+, Webkit, Firefox)，也可以在服务端运行 (借助 Node.js)。
- 为什么要使用

    - 结构清晰，便于扩展。 可以方便地屏蔽浏览器私有语法差异。封装对浏览器语法差异的重复处理， 减少无意义的机械劳动。
    - 可以轻松实现多重继承。 完全兼容 CSS 代码，可以方便地应用到老项目中。LESS 只是在 CSS 语法上做了扩展，所以老的 CSS 代码也可以与 LESS 代码一同编译。

### **::before 和 :after 的双冒号和单冒号有什么区别？**

- 冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。
- ::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于dom之中，只存在在页面之中。
- 注意:before 和 :after 这两个伪元素，是在CSS2.1里新出现的。起初，伪元素的前缀使用的是单冒号语法，但随着Web的进化，在CSS3的规范里，伪元素的语法被修改成使用双冒号，成为::before、::after。

### **display:inline-block 什么时候会显示间隙？**

- 有空格时会有间隙，可以删除空格解决；
- margin正值时，可以让margin使用负值解决；
- 使用font-size时，可通过设置font-size:0、letter-spacing（字母间距）、word-spacing（单词间距，中文无效）解决；

### **单行、多行文本溢出隐藏**

- **单行文本溢出**

    - white-space：nowrap；overflow：hidden；text-hidden：ellipsis；

- **多行文本溢出**

    - overflow：hidden；text-hidden：ellipsis；display:-webkit-box;（作为弹性伸缩盒子模型显示）-webkit-box-orient:vertical; （ 设置伸缩盒子的子元素排列方式：从上到下垂直排列）-webkit-line-clamp:3;       （ 显示的行数）

### **对媒体查询的理解？**

- 使用 @media 查询，可以针对不同的媒体类型定义不同的样式。@media 可以针对不同的屏幕尺寸设置不同的样式，特别是需要设置设计响应式的页面，@media 是非常有用的。当重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。

### **对 CSS 工程化的理解**

基于这三个方向，可以衍生出一些具有典型意义的子问题，这里我们逐个来看：

（1）预处理器：为什么要用预处理器？它的出现是为了解决什么问题？

预处理器，其实就是 CSS 世界的“轮子”。预处理器支持我们写一种类似 CSS、但实际并不是 CSS 的语言，然后把它编译成 CSS 代码：

那为什么写 CSS 代码写得好好的，偏偏要转去写“类 CSS”呢？这就和本来用 JS 也可以实现所有功能，但最后却写 React 的 jsx 或者 Vue 的模板语法一样——为了爽！要想知道有了预处理器有多爽，首先要知道的是传统 CSS 有多不爽。随着前端业务复杂度的提高，前端工程中对 CSS 提出了以下的诉求：

1. 宏观设计上：我们希望能优化 CSS 文件的目录结构，对现有的 CSS 文件实现复用；

2. 编码优化上：我们希望能写出结构清晰、简明易懂的 CSS，需要它具有一目了然的嵌套层级关系，而不是无差别的一铺到底写法；我们希望它具有变量特征、计算能力、循环能力等等更强的可编程性，这样我们可以少写一些无用的代码；

3. 可维护性上：更强的可编程性意味着更优质的代码结构，实现复用意味着更简单的目录结构和更强的拓展能力，这两点如果能做到，自然会带来更强的可维护性。



这三点是传统 CSS 所做不到的，也正是预处理器所解决掉的问题。预处理器普遍会具备这样的特性：

● 嵌套代码的能力，通过嵌套来反映不同 css 属性之间的层级关系 ；

● 支持定义 css 变量；

● 提供计算函数；

● 允许对代码片段进行 extend 和 mixin；

● 支持循环语句的使用；

● 支持将 CSS 文件模块化，实现复用。

（2）PostCss：PostCss 是如何工作的？我们在什么场景下会使用 PostCss？

PostCss 仍然是一个对 CSS 进行解析和处理的工具，它会对 CSS 做这样的事情：

它和预处理器的不同就在于，预处理器处理的是 类CSS，而 PostCss 处理的就是 CSS 本身。Babel 可以将高版本的 JS 代码转换为低版本的 JS 代码。PostCss 做的是类似的事情：它可以编译尚未被浏览器广泛支持的先进的 CSS 语法，还可以自动为一些需要额外兼容的语法增加前缀。更强的是，由于 PostCss 有着强大的插件机制，支持各种各样的扩展，极大地强化了 CSS 的能力。



PostCss 在业务中的使用场景非常多：

● 提高 CSS 代码的可读性：PostCss 其实可以做类似预处理器能做的工作；

● 当我们的 CSS 代码需要适配低版本浏览器时，PostCss 的 Autoprefixer 插件可以帮助我们自动增加浏览器前缀；

● 允许我们编写面向未来的 CSS：PostCss 能够帮助我们编译 CSS next 代码；

（3）Webpack 能处理 CSS 吗？如何实现？

Webpack 能处理 CSS 吗：

● Webpack 在裸奔的状态下，是不能处理 CSS 的，Webpack 本身是一个面向 JavaScript 且只能处理 JavaScript 代码的模块化打包工具；

● Webpack 在 loader 的辅助下，是可以处理 CSS 的。

如何用 Webpack 实现对 CSS 的处理：

● Webpack 中操作 CSS 需要使用的两个关键的 loader：css-loader 和 style-loader

● 注意，答出“用什么”有时候可能还不够，面试官会怀疑你是不是在背答案，所以你还需要了解每个 loader 都做了什么事情：

○ css-loader：导入 CSS 模块，对 CSS 代码进行编译处理；

○ style-loader：创建style标签，把 CSS 内容写入标签。



在实际使用中，css-loader 的执行顺序一定要安排在 style-loader 的前面。因为只有完成了编译过程，才可以对 css 代码进行插入；若提前插入了未编译的代码，那么 webpack 是无法理解这坨东西的，它会无情报错。

- CSS 工程化是为了解决以下问题

    - 宏观设计：CSS 代码如何组织、如何拆分、模块结构怎样设计？
    - 编码优化：怎样写出更好的 CSS？
    - 构建：如何处理我的 CSS，才能让它的打包结果最优？
    - 可维护性：代码写完了，如何最小化它后续的变更成本？如何确保任何一个同事都能轻松接手？

- 以下三个方向都是时下比较流行的、普适性非常好的 CSS 工程化实践

    - 预处理器：Less、 Sass 等；
    - 重要的工程化插件： PostCss；
    - Webpack loader 等 。

### **如何判断元素是否到达可视区域 **

- window.innerHeight 是浏览器可视区的高度；
- document.body.scrollTop || document.documentElement.scrollTop 是浏览器滚动的过的距离；
- imgs.offsetTop 是元素顶部距离文档顶部的高度（包括滚动条的距离）；
- 内容达到显示区域的：img.offsetTop < window.innerHeight + document.body.scrollTop;

- 子主题 5

### ** z-index属性在什么情况下会失效**

- 通常 z-index 的使用是在有两个重叠的标签，在一定的情况下控制其中一个在另一个的上方或者下方出现。z-index值越大就越是在上层。z-index元素的position属性需要是relative，absolute或是fixed。
- z-index属性在下列情况下会失效

    - 父元素position为relative时，子元素的z-index失效。解决：父元素position改为absolute或static；
    - 元素没有设置position属性为非static属性，解决：设置该元素的position属性为relative，absolute或是fixed中的一种；
    - 元素在设置z-index的同时还设置了float浮动。解决：float去除，改为display：inline-block；

## **2.定位与浮动**

### **为什么需要清除浮动，清除浮动的方式？**

- 为什么清除浮动

    - 非IE浏览器下，容器不设高度且子元素浮动时，浮动的子元素脱离文档流，不占据空间（引起“高度塌陷”现象），父元素的高度无法被撑开，影响与父元素同级的元素，影响布局

- 清除浮动的方式

    - 给父级div定义height属性
    - 最后一个浮动元素之后添加一个空的div标签，并添加clear:both样式
    - 包含浮动元素的父级标签添加overflow:hidden或者overflow:auto
    - 使用 :：after 伪元素。由于IE6-7不支持 :after，使用 zoom:1 触发 hasLayout**

### **使用clear属性清除浮动的原理**

- 使用clear属性清除浮动，其语法如下：clear:none|left|right|both，官方对clear属性解释：“元素盒子的边不能和前面的浮动元素相邻”，对元素设置clear属性是为了避免浮动元素对该元素的影响，而不是清除掉浮动。

    - 一般使用伪元素的方式清除浮动：.clear::after{
      content:'';
      display: block;
      clear:both;
      }

### **对BFC的理解，如何创建BFC**

- BFC理解

    - Box: Box 是 CSS 布局的对象和基本单位，⼀个⻚⾯是由很多个 Box 组成的，这个Box就是我们所说的盒模型。
    - Formatting context：块级上下⽂格式化，它是⻚⾯中的⼀块渲染区域，并且有⼀套渲染规则，它决定了其⼦元素将如何定位，以及和其他元素的关系和相互作⽤。
    - 块格式化上下文（Block Formatting Context，BFC）是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。
      通俗来讲：BFC是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物品。如果一个元素符合触发BFC的条件，则BFC中的元素布局不受外部影响。

- 如何创建BFC

    - ● 根元素：body；
    - ● 元素设置浮动：float 除 none 以外的值；
    - ● 元素设置绝对定位或者固定定位：position (absolute、fixed)；
    - ● display 值为：inline-block、table-cell、table-caption、flex等；
    - ● overflow 值为：hidden、auto、scroll；

- BFC特点

    - ● 垂直方向上，自上而下排列，和文档流的排列方式一致。
    - ● 在BFC中上下相邻的两个容器的margin会重叠
    - ● 计算BFC的高度时，需要计算浮动元素的高度
    - ● BFC区域不会与浮动的容器发生重叠
    - ● BFC是独立的容器，容器内部元素不会影响外部元素
    - ● 每个元素的左margin值和容器的左border相接触

- BFC应用

    - 解决margin的重叠问题

        - 由于BFC是一个独立的区域，内部的元素和外部的元素互不影响，将两个元素变为两个BFC，就解决了margin重叠的问题。

    - 解决高度塌陷的问题

        - 在对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为0。解决这个问题，只需要把父元素变成一个BFC。常用的办法是给父元素设置overflow:hidden。

    - 创建自适应两栏布局

        - 可以用来创建自适应两栏布局：左边的宽度固定，右边的宽度自适应。

### **什么是margin重叠问题？如何解决**

- margin重叠问题

    - 个块级元素的上外边距和下外边距可能会合并（折叠）为一个外边距，其大小会取其中外边距值大的那个，这种行为就是外边距折叠。需要注意的是，浮动的元素和绝对定位这种脱离文档流的元素的外边距不会折叠。重叠只会出现在垂直方向。只有块级元素会触发外边距塌陷的问题

- 计算原则

    - 如果两者都是正数，那么就去最大者
    - 如果是一正一负，就会正值减去负值的绝对值
    - 两个都是负值时，用0减去两个中绝对值大的那个

- 解决方案

    - 兄弟之间重叠

        - 底部元素变为行内盒子：display: inline-block
        - 底部元素设置浮动：float
        - 底部元素的position的值为absolute/fixed

    - 父子之间重叠

        - 父元素加入：overflow: hidden
        - 父元素添加透明边框：border:1px solid transparent
        - 子元素变为行内盒子：display: inline-block
        - 子元素加入浮动属性或定位

### **元素的层叠顺序**

- 层叠顺序，英文称作 stacking order，表示元素发生层叠时有着特定的垂直显示顺序。

    - 背景和边框：建立当前层叠上下文元素的背景和边框。
    - 负的z-index：当前层叠上下文中，z-index属性值为负的元素。
    - 块级盒：文档流内非行内级非定位后代元素。
    - 浮动盒：非定位浮动元素。
    - 行内盒：文档流内行内级非定位后代元素。
    - z-index:0：层叠级数为0的定位元素。
    - 正z-index：z-index属性值为正的定位元素。

### **position的属性有哪些？区别是什么**

- 属性

    - static

        - 默认值，没有定位，元素出现在正常的文档流中，会忽略 top, bottom, left, right 或者 z-index 声明，块级元素从上往下纵向排布，⾏级元素从左向右排列。

    - relative

        - 生成相对定位的元素，相对于其原来的位置进行定位。元素的位置通过left、top、right、bottom属性进行规定。

            - 元素的定位永远是相对于元素自身位置的，和其他元素没关系，也不会影响其他元素。

    - absolute

        - 生成绝对定位的元素，相对于static定位以外的一个有定位的父元素进行定位。元素的位置通过left、top、right、bottom属性进行规定。

            - 元素的定位相对于前两者要复杂许多。如果为 absolute 设置了 top、left，浏览器会根据什么去确定它的纵向和横向的偏移量呢？答案是浏览器会递归查找该元素的所有父元素，如果找到一个设置了position:relative/absolute/fixed的元素，就以该元素为基准定位，如果没找到，就以浏览器边界定位。

    - fixed

        - 生成固定定位的元素，指定元素相对于屏幕视⼝（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，⽐如回到顶部的按钮⼀般都是⽤此定位⽅式。

            - 元素的定位是相对于 window （或者 iframe）边界的，和其他元素没有关系。但是它具有破坏性，会导致其他元素位置的变化。

    - sticky

        - 粘性定位，基于用户的滚动位置来定位。元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

    - inherit

        - 规定从父元素继承position属性的值

### **display、float、position的关系**

- 首先判断display属性是否为none，如果为none，则position和float属性的值不影响元素最后的表现。
- 然后判断position的值是否为absolute或者fixed，如果是，则float属性失效，并且display的值应该被设置为table或者block，具体转换需要看初始转换值。
- 如果position的值不为absolute或者fixed，则判断float属性的值是否为none，如果不是，则display的值则按上面的规则转换。注意，如果position的值为relative并且float属性的值存在，则relative相对于浮动后的最终位置定位。
- 如果float的值为none，则判断元素是否为根元素，如果是根元素则display属性按照上面的规则转换，如果不是，则保持指定的display属性值不变。
- 总的来说，可以把它看作是一个类似优先级的机制，"position:absolute"和"position:fixed"优先级最高，有它存在的时候，浮动不起作用，'display'的值也需要调整；其次，元素的'float'特性的值不是"none"的时候或者它是根元素的时候，调整'display'的值；最后，非根元素，并且非浮动元素，并且非绝对定位的元素，'display'特性值同设置值。

### **absolute和fixed的共同点和不同点**

- 共同点

    - 改变行内元素的呈现方式，将display置为inline-block
    - 子主题使元素脱离普通文档流，不再占据文档物理空间
    - 覆盖非定位文档元素

- 不同点

    - absolute与fixed的根元素不同，absolute的根元素可以设置，fixed根元素是浏览器。
    - 在有滚动条的页面中，absolute会跟着父元素进行移动，fixed固定在页面的具体位置。

### **对sticky定位的理解**

- sticky 英文字面意思是粘贴，所以可以把它称之为粘性定位。语法：position: sticky; 基于用户的滚动位置来定位。
- 粘性定位的元素是依赖于用户的滚动，在 position:relative 与 position:fixed 定位之间切换。它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

## **3.页面布局**

### **常见的CSS布局单位**

- 像素（px）：是页面布局的基础，一个像素表示终端（电脑、手机、平板等）屏幕所能显示的最小的区域，像素分为两种类型：CSS像素和物理像素：

    - CSS像素：为web开发者提供，在CSS中使用的一个抽象单位；
    - 物理像素：只与设备的硬件密度有关，任何设备的物理像素都是固定的。

- 百分比（%）：当浏览器的宽度或者高度发生变化时，通过百分比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。一般认为子元素的百分比相对于直接父元素。

- em和rem：对于px更具灵活性，它们都是相对长度单位，它们之间的区别：em相对于自身或者父元素字体，rem相对于根元素（html字体大小）。

    - em： 文本相对长度单位。相对于当前对象内文本的字体尺寸。如果当前行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸(默认16px)。(相对父元素的字体大小倍数)。
    - rem： rem是CSS3新增的一个相对单位，相对于根元素（html元素）的font-size的倍数。作用：利用rem可以实现简单的响应式布局，可以利用html元素中字体的大小与屏幕间的比值来设置font-size的值，以此实现当屏幕分辨率变化时让元素也随之变化。

- vw/vh是与视口有关的单位，vw表示相对于视图窗口的宽度，vh表示相对于视图窗口高度，除了vw和vh外，还有vmin和vmax两个相关的单位。

  ● 百分比（%）：大部分相对于祖先元素，也有相对于自身的情况比如（border-radius、translate等)

  ● vw/vm：相对于视窗的尺寸

    - vw：相对于视窗的宽度，1vw = 1/100视口宽度；
    - vh：相对于视窗的高度，1vh = 1/100视口高度；
    - vmin：vw和vh中的较小值；
    - vmax：vw和vh中的较大值；

### **px、em、rem的区别及使用场景**

- **区别**

    - px是固定的像素，一旦设置了就无法因为适应页面大小而改变。
    - em和rem相对于px更具有灵活性，他们是相对长度单位，其长度不是固定的，更适用于响应式布局。

        - em是以自身的font-size为参考的，当em没有设置自身的font-size，则会以父元素的font-size为标准；
        - rem是相对于根元素，这样就意味着，只需要在根元素确定一个参考值。

- **适用场景**

    - 对于只需要适配少部分移动设备，且分辨率对页面影响不大的，使用px即可 。
    - 对于需要适配各种移动设备，使用rem，例如需要适配iPhone和iPad等分辨率差别比较挺大的设备。

### **两栏布局的实现**

- **一般两栏布局指的是左边一栏宽度固定，右边一栏宽度自适应**

    - 左侧浮动+右侧margin-left

        - 给父容器一个高度；左边盒子宽度给200px，高度100%，左浮动，右边盒子margin-left：200px，宽度auto，高度100%

    - 左侧浮动+右侧BFC

      BFC：全称块级格式化上下文，一个 独立的个体，是的不受其他元素的影响，始终保持自己独立，内部的子元素 不受外界的影响，外界的元素，也不受内部的元素的影响

      BFC触发条件：



      　　【1】根元素，即HTML元素

      

      　　【2】float的值不为none

      

      　　【3】overflow的值不为visible

      

      　　【4】display的值为inline-block、table-cell、table-caption

      

      　　【5】position的值为absolute或fixed 

      BFC的区域不会与float box重叠。BFC区域的子元素不受外面的影响，外面的也不受BFC区域里面的影响（这个挺重要的，设置的浮动的元素，脱离了文档流，正常的相邻的元素会跑到它下面（靠左）。设置成BFC，自己独成一块，不会跑到它下面，而是保持洁身自好，自己依然占一块。）

      - 给父容器一个高度，左侧的盒子宽度200px，高度100%，左浮动，右侧的盒子高度100%，overflow：hidden触发BFC

- flex布局

    - 父容器给一个高度，display：flex；左侧盒子给一个宽度200px，高度100%，右侧盒子宽度100%，flex：1

- 左侧绝对定位+右侧margin-left

    - 父容器给一个高度，position：relative；左侧盒子给一个宽度200px，高度100%，position：absolute，top：0；left：0；右侧盒子margin-left：200px，高度100%

- 右侧绝对定位+右侧定位left

    - 父容器给一个高度，position：relative；左侧盒子宽度200px，高度100%；右侧盒子高度100%，position：absolute，top：0；right：0；bottom：0；left：200px；

### **三栏布局的实现**

- **三栏布局一般指的是页面中一共有三栏，左右两栏宽度固定，中间自适应的布局**

    - 左右绝对定位，中间margin

        - 给父容器一个高度，position：relative；左侧盒子和右侧盒子宽度200px，高度100%，左侧盒子左侧绝对定位，右侧盒子右侧绝对定位（position：absolute）中间盒子高度100%，margin：0 200px；

    - flex布局

        - 父容器给一个高度，display：flex；左侧和右侧盒子高度100%，宽度200px；中间盒子高度100%，flex：1；

    - 两侧浮动+中间margin

        - 父容器给一个高度；左右盒子宽度200px，高度100%，左边左浮动，右边右浮动，中间的盒子margin：0 200px；高度100%

    - 圣杯布局：父盒子padding+三个盒子浮动+左右盒子相对定位并负边距

        - **html**

            - **css**

    - 双飞翼布局：三个盒子浮动+中间盒子左右margin留位+左右负边距

        - **html**

            - **css**

### **水平垂直居中的实现**

- 绝对定位+transform

  需考虑浏览器兼容问题

    - 父亲给一个高度，position：relative；子盒子position：absolute，top：50%；left：50%；transform：translate（-50%，-50%）

- 绝对定位+margin:auto

    - 父容器给一个高度，position：relative；子容器有宽度和高度，position：absolute，上下左右都是0，margin：auto；

- 绝对定位+margin负值

    - 父容器给一个高度，position：relative；子盒子绝对定位，top：50%；left：50%，margin-top： - 高度/2 px;margin-left:- 宽度/2 px

- flex布局

    - 父容器给一个高度，display：flex，justify-content：center，align-items：center；

### **如何根据设计稿进行移动端适配？**

- 移动端适配主要有两个维度

    - 适配不同像素密度

        - 针对不同的像素密度，使用 CSS 媒体查询，选择不同精度的图片，以保证图片不会失真；

    - 适配不同屏幕大小

        - 由于不同的屏幕有着不同的逻辑像素大小，所以如果直接使用 px 作为开发单位，会使得开发的页面在某一款手机上可以准确显示，但是在另一款手机上就会失真。为了适配不同屏幕的大小，应按照比例来还原设计稿的内容。为了能让页面的尺寸自适应，可以使用 rem，em，vw，vh 等相对单位。

### **对Flex布局的理解及其使用场景**

- Flex是FlexibleBox的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。任何一个容器都可以指定为Flex布局。行内元素也可以使用Flex布局。注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。采用Flex布局的元素，称为Flex容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称"项目"。容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis），项目默认沿水平主轴排列。

    - 容器属性

        - flex-direction属性决定主轴的方向（即项目的排列方向）。
        - flex-wrap属性定义，如果一条轴线排不下，是否换行。
        - flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
        - justify-content属性定义了项目在主轴上的对齐方式。
        - align-items属性定义单行项目在侧轴上如何对齐。
        - align-content属性定义了多行项目在侧轴的对齐方式。如果项目只有一行，该属性不起作用。

    - 项目属性

        - order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
        - flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
        - flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
        - flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
        - flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。

            - flex:1 表示什么

                - flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。flex:1 表示 flex: 1 1 auto，它还有另外两种完整写法, 分别是 initial (0 1 auto) 和 none (0 0 auto)

        - align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

### **响应式设计的概念及基本原理**

- 概念

    - 响应式网站设计（Responsive Web design）是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。

- 原理

    - 基本原理是通过媒体查询（@media）查询检测不同的设备屏幕尺寸做处理。

- 兼容

    - 页面头部必须有meta声明的viewport。

### **品字布局**

-

    - margin： 0 auto；+ 浮动

        - 设置三个div宽和高，第一个div margin： 0 auto；后两个div浮动使其一行显示，然后通过margin-left以及transform：translate实现布局，（padding和margin若是百分比则是以父亲的宽度为准）

    - margin： 0 auto； + inline-block

        - 设置三个div宽和高，第一个div margin： 0 auto；后两个divdisplay：inline-block使其一行显示，然后通过margin-left以及transform：translate实现布局，（padding和margin若是百分比则是以父亲的宽度为准）

### **九宫格布局**

-

    - float

        - 给ul设定宽和高（需计算：比如330*330）每个li宽和高（100*100）并且设置左浮动，每个limargin-right：10px；margin-bottom：10px；

    - flex

        - 给ul设定宽和高（330*330），display：flex；flex-wrap：wrap；justify-content：space-around；align-items：space-around；，每个li给定宽和高（100*100）

    - inline-block

        - 给ul设定宽和高（需计算：比如330*330）每个li宽和高（100*100）并且设置display：inline-block；每个limargin-bottom： 10px；

## **4.场景应用**

### **实现一个三角形**

- 原理

    - CSS绘制三角形主要用到的是border属性，也就是边框。平时在给盒子设置边框时，往往都设置很窄，就可能误以为边框是由矩形组成的。实际上，border属性是由三角形组成的

- 实现

    - div {
      width: 0;
      height: 0;
      border: 100px solid;
      border-color: orange blue red green;
      }

        -

    -

        -

### **实现一个扇形**

- 原理

    - 用CSS实现扇形的思路和三角形基本一致，就是多了一个圆角的样式，实现一个90°的扇形

- 实现

    - div{
      border: 100px solid transparent;
      width: 0;
      height: 0;
      border-radius: 100px;
      border-top-color: red;
      }

        - 子主题 1

    - div {
      background-color: red;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      }

        - 圆

### **实现一个宽高自适应的正方形**

- vw方式

    - .square {
      width: 10%;
      height: 10vw;
      background: tomato;
      }

- 利用元素的margin/padding百分比是相对父元素width的性质来实现：

    - .square {
      width: 20%;
      height: 0;
      padding-top: 20%;
      background: orange;
      }

- 利用子元素的margin-top的值来实现：

    - .square {
      width: 30%;
      overflow: hidden;
      background: yellow;
      }
      .square::after {
      content: '';
      display: block;
      margin-top: 100%;
      }

### **画一条0.5px的线**

- 采用transform: scale()的方式

    - transform: scale(0.5,0.5);

- 采用meta viewport的方式

    - <meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"/>

### **设置小于12px的字体**

- 使用Webkit的内核的-webkit-text-size-adjust的私有CSS属性来解决，只要加了-webkit-text-size-adjust:none;字体大小就不受限制了。但是chrome更新到27版本之后就不可以用了。所以高版本chrome谷歌浏览器已经不再支持-webkit-text-size-adjust样式，所以要使用时候慎用。
- 使用css3的transform缩放属性-webkit-transform:scale(0.5); 注意-webkit-transform:scale(0.75);收缩的是整个元素的大小，这时候，如果是内联元素，必须要将内联元素转换成块元素，可以使用display：block/inline-block/...；
- 使用图片：如果是内容固定不变情况下，使用将小于12px文字内容切出做图片，这样不影响兼容也不影响美观。

### **如何解决1px问题**

- 问题

    - 1px 问题指的是：在一些 Retina屏幕 的机型上，移动端页面的 1px 会变得很粗，呈现出不止 1px 的效果。原因很简单——CSS 中的 1px 并不能和移动设备上的 1px 划等号。

- 原因

    - window.devicePixelRatio = 设备的物理像素 / CSS像素。
    - 打开 Chrome 浏览器，启动移动端调试模式，在控制台去输出这个 devicePixelRatio 的值。这里选中 iPhone6/7/8 这系列的机型，输出的结果就是2：
    - 这就意味着设置的 1px CSS 像素，在这个设备上实际会用 2 个物理像素单元来进行渲染，所以实际看到的一定会比 1px 粗一些。

- 解决方案

    - 直接写 0.5px

        - 目前为止最简单的一种方法。这种方法的缺陷在于兼容性不行，IOS 系统需要8及以上的版本，安卓系统则直接不兼容。

    - 伪元素先放大后缩小

        - 思路是先放大、后缩小：在目标元素的后面追加一个 ::after 伪元素，让这个元素布局为 absolute 之后、整个伸展开铺在目标元素上，然后把它的宽和高都设置为目标元素的两倍，border值设为 1px。接着借助 CSS 动画特效中的放缩能力，把整个伪元素缩小为原来的 50%。此时，伪元素的宽高刚好可以和原有的目标元素对齐，而 border 也缩小为了 1px 的二分之一，间接地实现了 0.5px 的效果。

            - 这个方法的可行性会更高，兼容性也更好。唯一的缺点是代码会变多。

    - 思路三：viewport 缩放来解决

        - <meta name="viewport" content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no">


         - 整个页面被缩放了。这时 1px 已经被处理成物理像素大小，这样的大小在手机上显示边框很合适。但是，一些原本不需要被缩小的内容，比如文字、图片等，也被无差别缩小掉了。


