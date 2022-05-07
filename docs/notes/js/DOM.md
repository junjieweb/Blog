# DOM

**文档对象模型**
在浏览器标签中当前载入的文档用文档对象模型来表示。这是一个由浏览器生成的“树结构”，使编程语言可以很容易的访问HTML结构 —
例如浏览器自己在呈现页面时，使用它将样式和其他信息应用于正确的元素，而页面呈现完成以后，开发人员可以用JavaScript操作DOM。

## DOM 查询

#### 通过 `document` 对象查询

- 根据`id`获取一个元素节点对象 `document.getElementById()`
- 根据`class`属性值获取一组元素节点对象 `document.getElementsByClassName()`
- 根据`标签名`获取一组元素节点对象 `document.getElementsByTagName()`
- 获取页面中的所有元素 `document.getElementsByTagName('*')`
- 根据元素的`name`属性获取一组元素节点对象（主要用于表单） `document.getElementsByName()`
- 根据选择器字符串获取符合条件的第一个元素 `document.querySelector()`
- 根据选择器字符获取符合条件的所有元素 `document.querySelectorAll()`
- 获取页面的根元素（`html`）`document.documentElement`
- 获取页面的`body`元素 `document.body`

#### 通过 `element` 进行查询

- 根据标签名获取元素中的指定的后代元素 `element.getElementsByTagName()`
- 获取当前元素的所有子节点 `element.childNodes`
- 获取当前元素的所有子元素 `element.children`
- 获取第一个子节点 `element.firstChild`
- 获取第一个子元素 `element.firstElementChild`
- 获取最后一个子节点 `element.lastChild`
- 获取最后一个子元素 `element.lastElementChild`
- 获取当前元素的父元素 `element.parentNode`
- 获取前一个兄弟节点 `element.previousSibling`
- 获取前一个兄弟元素 `element.previousElementSibling`
- 获取后一个兄弟节点 `element.nextSibling`
- 获取后一个兄弟元素 `element.nextElementSibling`

## 元素中的属性

#### 读取

- `element.name`
- `element.value`
- `element.id`
- `element.className`

#### 设置

- `element.name = xxx;`
- `element.value = xxx;`
- `element.id = xxx;`
- `element.className = xxx;`

#### 其他属性

`innerHTML`标签内部的HTML代码，带标签

`innerText`标签内部的文本内容，不带标签

#### 读取一个标签内部的文本

- `element.innerHTML`
- `element.innerText`
- `element.textContent`
- `element.firstChild.nodeValue`

## 创建元素

创建一个新元素 `document.createElement('标签名')`

创建一个新的文本节点 `document.createTextNode('文本内容')`

## 插入元素

- 向父节点中插入一个子节点 `父节点.appendChild(子节点);`
- 向元素的指定位置插入子元素 `元素.insertAdjacentElement('位置',元素);`
- 向元素的指定位置插入HTML代码 `元素.insertAdjacentHTML('位置','HTML代码');`
- 向元素的指定位置插入文本内容 `元素.insertAdjacentText('位置','文本内容');`
    - 位置需要一个字符串作为参数：
        - `'beforebegin'` 开始标签前，成为当前元素的前一个兄弟元素
        - `'afterbegin'` 开始标签后，成为当前元素的第一个子元素
        - `'beforeend'` 结束标签前，成为当前元素的最后一个子元素
        - `'afterend'` 结束标签后，成为当前元素的后一个兄弟元素
- 使用新节点替换旧节点 `父节点.replaceChild(新节点,旧节点);`
- 将新节点插入到旧节点的前面 `父节点.inserBefore(新节点,旧节点);`

## 复制元素

将节点进行浅复制（只复制节点本身） `节点.cloneNode()`

对节点进行深复制（复制节点本身及所有的后代节点） `节点.cloneNode(true)`

## 删除元素

`子节点.parentNode.removeChild(子节点);`

`子节点.remove();`

## 事件 Event



