# Svelte + TS + Vite + Tailwindcss


### 简介

基于Svelte + TS + Vite + Tailwindcss搭建的多页面应用，适合用于C端活动页

### 相关文档

svelte: https://www.sveltejs.cn/

tailwindcss: https://docs.tailwindchina.com/docs

windicss: https://windicss.org/guide/(tailwindcss的替代品，完全兼容tailwindcss，提供了更快的加载速度，本项目使用这个)

vite: https://vitejs.bootcss.com/

### 开发环境配置

vscode开发需要在vscode插件市场搜索安装Svelte for VS Code、WindiCSS IntelliSense、Svelte 3 Snippets三个插件

工作区setting.json添加如下设置

``` json
"[svelte]": {
     "editor.defaultFormatter": "svelte.svelte-vscode"
  },
```

本项目需要在nodejs14.x上启动,首先安装nvm

`nvm install v14.17.6`

`nvm use v14.17.6`

### 启动

`npm i`

打开指定页面 
注意：这里的${pageName}为pages目录下文件夹名称

`npm run start --serve=${pageName}`

创建页面 
注意：这里的${pageName}为你自己命名的页面名称

`npm run create-page ${pageName}`

### 提交代码

提交代码请用`npm run commit`命令，规范提交，按步骤填写commit信息