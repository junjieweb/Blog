# Website

该网站是使用现代静态网站生成器 [VuePress](https://v2.vuepress.vuejs.org/zh/) 构建的。

### 安装

```
$ npm install
```

### 本地开发

```
$ npm start
```

此命令启动本地开发服务器并打开浏览器窗口。大多数更改都会实时反映，而无需重新启动服务器。

### 构建打包

```
$ npm run build
```

此命令将静态内容生成到“build”目录中，并且可以使用任何静态内容托管服务提供服务。

### 部署

下述的指南基于以下条件：

Markdown 源文件放置在你项目的 docs 目录；
使用的是默认的构建输出目录 (.vuepress/dist) ；
使用 Yarn classic 作为包管理器，当然也可以使用 NPM 。
VuePress 作为项目依赖安装，并在 package.json 中配置了如下脚本：

```json
{
  "scripts": {
    "docs:build": "vuepress build docs"
  }
}
```

#### GitHub Pages

设置正确的 base 选项。

如果你准备发布到 `https://<USERNAME>.github.io/` ，你可以省略这一步，因为 `base` 默认就是 `"/"`。

如果你准备发布到 `https://<USERNAME>.github.io/<REPO>/` ，也就是说你的仓库地址是 `https://github.com/<USERNAME>/<REPO>` ，则将 base 设置为 `"
/<REPO>/"`。

选择你想要使用的 CI 工具。这里我们以 [GitHub Actions](https://github.com/features/actions) 为例。

创建 `.github/workflows/docs.yml` 文件来配置工作流。

```yml
name: docs

on:
# 每当 push 到 main 分支时触发部署
push:
branches: [ main ]
# 手动触发部署
workflow_dispatch:

jobs:
docs:
runs-on: ubuntu-latest

  steps:
    - uses: actions/checkout@v2
      with:
        # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
        fetch-depth: 0

    - name: Setup Node.js
      uses: actions/setup-node@v1
      with:
        # 选择要使用的 node 版本
        node-version: '14'

    # 缓存 node_modules
    - name: Cache dependencies
      uses: actions/cache@v2
      id: yarn-cache
      with:
        path: |
          **/node_modules
        key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
        restore-keys: |
          ${{ runner.os }}-yarn-

    # 如果缓存没有命中，安装依赖
    - name: Install dependencies
      if: steps.yarn-cache.outputs.cache-hit != 'true'
      run: yarn --frozen-lockfile

    # 运行构建脚本
    - name: Build VuePress site
      run: yarn docs:build

    # 查看 workflow 的文档来获取更多信息
    # @see https://github.com/crazy-max/ghaction-github-pages
    - name: Deploy to GitHub Pages
      uses: crazy-max/ghaction-github-pages@v2
      with:
        # 部署到 gh-pages 分支
        target_branch: gh-pages
        # 部署目录为 VuePress 的默认输出目录
        build_dir: docs/.vuepress/dist
      env:
        # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

```

提示

请参考 [GitHub Pages](https://pages.github.com/) 官方指南 来获取更多信息。
